import React, { useContext, useState } from 'react'
import TagInput from '~/components/Input/TagInput'
import { AppContext } from '~/context/AppContext';
import noteApi from '@api/noteApi';

const AddEditNotes = ({ noteData, type, onClose, fetchNotes }) => {
    // console.log("Current mode :", type); 
    const [title, setTitle] = useState(noteData ? noteData.title : '');
    const [content, setContent] = useState(noteData ? noteData.content :'');
    const [tags, setTags] = useState(noteData ?  noteData.tags : []);
    const [error, setError] = useState(null)
 
    const { ShowModal } = useContext(AppContext)
    const addNotes = async () => {
        try {
            
            const res = await noteApi.addNote({ title, content, tags });
            if (res.data && res.data.savedNote) {
                console.log("da", res.data);
               
                fetchNotes(); // Gọi fetchNotes để cập nhật danh sách ghi chú
                onClose(); // Đóng modal sau khi thêm thành công
                ShowModal("success", "Bạn đã tạo notes thành công", ["welcome to back"], () => { onClose() });
            } else {
                setError("Unexpected response structure");
            }
        }
        catch (error) {
            console.error("Error:", error);
            if (error.res.data && error.res.data && error.res.data.message) {
                setError(error.res.data.message)
            } else {
                setError("An error occurred");
            }

        }
    }
    const editNote = async () => {
        try {
            const res = await noteApi.editNote(noteData._id, { title, content, tags });
            
            //  console.log("type ",type)
            //  console.log("datanote",res.data.note)
            if (res.data && res.data.note) {
              
                fetchNotes(); 
                onClose(); 
                ShowModal("success", "Ghi chú đã được cập nhật thành công", ["welcome to back!"], () => { onClose() });
            } else {
                setError("Unexpected response structure");
            }
        } catch (error) {
            console.error("Error:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred");
            }
        }
    }
    const handleSubmitAdd = (e) => {
        e.preventDefault();

        // console.log("data", JSON.stringify(data))
        // addNotes(data)
        if (!title) {
            setError("please enter the title")
            return;
        }
        if (!content) {
            setError("please enter the content")
            return
        }
        setError("")
        if (type === 'edit') {
            // console.log("Editing note :", noteData);
          
            editNote();
            
        }
        else {
            addNotes()
        }
    }
    return (
        <form>
            <div className='flex flex-col gap-2 m-auto '
            >
                <label htmlFor="" className='input-lable'>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' className='w-full p-4 text-xl font-medium text-slate-900 bg-slate-100 border border-slate-200 rounded-md outline-none focus:border-blue-500' />
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="" className='input-lable'>Content</label>
                <textarea
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                    placeholder='Enter Description'
                    className='w-full p-4 text-lg text-slate-700 bg-slate-100 border border-slate-200 rounded-md outline-none focus:border-blue-500' />
            </div>
            <div className='mt-3'>
                <label htmlFor="" className='input-lable'>Tags</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>
            {error && <p className="text-red-500 text-base pt-5 ">
                {error}
            </p>}
            <button 
            type='submit' 
            className='w-full  text-white font-medium bg-blue-500 mt-5 p-3'
             onClick={handleSubmitAdd}> 
             {type === "edit" ? "Update Note" : "Add Note"}
             </button>
        </form>
    )
}

export default AddEditNotes