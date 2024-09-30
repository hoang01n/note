import React, { createContext, useState} from 'react'
import { Modal } from 'antd';

import noteApi from '../api/BaseAPI';
const AppContext= createContext();

 const AppProvider =  ({children}) => {

  
  
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
    <AppContext.Provider value={{ShowModal}}>
{children}
    </AppContext.Provider>
  )
}
export {AppContext, AppProvider}
