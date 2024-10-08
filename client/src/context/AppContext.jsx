import React, { createContext, useState} from 'react'
import { Modal } from 'antd';
import noteApi from '../api/noteApi';


const AppContext= createContext();

 const AppProvider =  ({children}) => {
 // Thêm state cho fetchNotes
 const [notes, setNotes] = useState([]);

 const fetchNotes = async () => {
   try {
     const res = await noteApi.getNotes(); // Gọi API để lấy ghi chú
     setNotes(Array.isArray(res.data) ? res.data : []); // Cập nhật state notes
   } catch (error) {
     console.error('Lỗi khi lấy ghi chú:', error);
   }
 };



  
  const ShowModal = (type, title, content, onClose) => {
    Modal[type]({
      title,
      content: content && (
        <div>
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ),
      onOk() {
        if (onClose) {
          onClose();
        }
      },
    });
  };


    // const modal = {
 
    //     show(data) {
    //       Modal[data.type]({
    //         title: data.title,
    //         content: data.contents && (
    //           <div>
    //             {data.contents.map((content, index) => (
    //               <p key={index}>{content}</p>
    //             ))}
    //           </div>
    //         ),
    //         onOk() {
    //           if (data.onClose) {
    //             data?.onClose()
    //           }
    //         },
    //       });
    //     },
    //   };
  return (
    <AppContext.Provider value={{ShowModal, notes, fetchNotes,setNotes}}>
{children}
    </AppContext.Provider>
  )
}
export {AppContext, AppProvider}
