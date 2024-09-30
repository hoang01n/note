import React, { useContext, useEffect, useState } from 'react';

import NoteCard from '~/components/card/NoteCard';
import { MdAdd, MdClose } from 'react-icons/md'
import Modal from 'react-modal'
import AddEditNotes from './AddEditNotes';
// import { Button, Modal } from 'antd';
import { AppContext } from "~/context/AppContext"
import noteApi from '@api/noteApi';
import EmtyCard from '~/components/EmtyCard';
import ImgSrc from "~/assets/AddNote.svg"

import { useSearch } from '~/Hook/UseSearch';

const Home = () => {
  const [notes, setNotes] = useState([]);
  // const [newTitle, setNewTitle] = useState('');
  // const [newContent, setNewContent] = useState('');
  // const [editingId, setEditingId] = useState(null);
  // const [search, setSearch] = useState('');  
  const { search } = useSearch()
  const { ShowModal } = useContext(AppContext);
  const isMobile = window.innerWidth < 768;
  const [isOpen, setIsOpen] = useState({
    isOpen: false,
    type: "add",
    data: null
  });

  const fetchNotes = async () => {
    try {
      const res = await noteApi.getNotes();

      setNotes(res.data || []);

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchNotes();
    Modal.setAppElement('body');
    return () => { };
  }

    , [])


  const HandleDeleteNote = async (data) => {
    try {
      const res = await noteApi.deleteNote(data._id);
      //   console.log("delete cuccess ", res.data )
      // console.log("delete ", res.data.note)
      if (res.data) {
        fetchNotes();
        ShowModal("success", "bạn đã xóa thành cong", ['welcome to back!'], () => { })
      }

    }
    catch (err) {
      ShowModal("error", "bạn đã xóa không thành cong", ['welcome to back!'], () => { })

    }
  }
  const handleIsPinned = async (noteData) => {
    const noteId = noteData._id;
    // console.log("noteData:", noteData); 
    // console.log("noteData id:", noteData._id); 
    try {
      const res = await noteApi.updateIsPinnedNote(noteId, { isPinned: !noteData.isPinned });


      // console.log("datanote", res.data.note)
      if (res.data && res.data.note) {

        ShowModal("success", "Ghi chú đã được cập nhật thành công", ["welcome to back!"], () => { });
        fetchNotes(); // Gọi fetchNotes để cập nhật danh sách ghi chú
        // Đóng modal
      }
    } catch (error) {
      console.error("Error:", error);

    }
  }

  const ModalAdd = () => {
    setIsOpen({
      isOpen: true,
      type: "add",
      data: null
    })
  }
  const handleEdit = (note) => {
    setIsOpen({
      isOpen: true,
      type: "edit",
      data: note
    })
  }

  const sortedNotes = [...notes].sort((a, b) => b.isPinned - a.isPinned); // Sắp xếp ghi chú theo isPinned
  const filteredNotes = sortedNotes.filter(note => {
    return note.title && note.title.toLowerCase().includes((search || '').toLowerCase());
  });
  // const filteredNotes = notes.filter(note => {

  //   console.log('Note Title:', note.title) // Kiểm tra giá trị title
  //   console.log('Search:', search); // Kiểm tra giá trị search
  //   return note.title && note.title.toLowerCase().includes((search || '').toLowerCase()); // Kiểm tra note.title có tồn tại không
  // }
  // );
  return (
    <>

      <div className='container mx-auto relative'>
     
        {filteredNotes.length > 0 ? (

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>

            {filteredNotes.map((note, index) => (
              <NoteCard
                // key={note._id}
                key={index}
                title={note.title}
                date={note.creatOn}
                content={note.content}
                tags={note.tags}
                isPinned={note.isPinned}
                onEdit={() => handleEdit(note)}
                onDelete={() => { HandleDeleteNote(note) }}
                onPinNote={() => { handleIsPinned(note) }}
              // Thêm các thuộc tính khác nếu cần
              />
            ))
            }

         
          </div>
        ) : (
          <EmtyCard imgSrc={ImgSrc} message={`Start creating your first note! Click the 'Add' button to jot down your thoughts, ideas, and reminders. Let's get started!`} />
        )}
      </div>
      <button className='w-16 h-16 mb-10 flex items-center justify-center rounded-2xl text-white text-2xl bg-blue-400 hover:bg-blue-600 absolute bottom-16 right-10 sm:realtive' onClick={ModalAdd}>
        <MdAdd className='text-[32px] text-white' />
      </button>

      <Modal isOpen={isOpen.isOpen} onRequestClose={() => {
        setIsOpen({
          isOpen: false,
          type: "add",
          data: null
        })
      }}
        style={{
          
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)"
          },
          content: {
            margin: "6% auto",
            width: "90%", // Default width for mobile
            maxWidth: "600px", // Max width for larger screens
            maxHeight: "90%",
            overflow: "auto"

          }
        }}
        contentLabel="Add Note" className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-16  p-5 relative">
        < MdClose className='text-2xl  absolute top-3 right-3 text-slate-500 hover:text-slate-950 cursor-pointer' onClick={() => {
          setIsOpen({
            isOpen: false,
            type: "add",
            data: null
          })
        }} />
        <AddEditNotes
          type={isOpen.type}
          noteData={isOpen.data}
          fetchNotes={fetchNotes}
          onClose={() => setIsOpen({
            isOpen: false, type: "add", data: null
          })} />
      </Modal>
    </>
 
  );
};

export default Home;

