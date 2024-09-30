
import axiosClient from './apiClient';

const noteApi = {
  addNote: async (data) => {
    // const token = localStorage.getItem('token'); 
    return await axiosClient.post('api/note/add-note', data,
    //    {
    //   headers: {
    //     Authorization: `Bearer ${token}`, // Gửi token trong header
    //   },
    // }
  );
  },

  getNoteById: async (id) => {
    // const token = localStorage.getItem('token'); 
    return await axiosClient.get(`api/note/note/${id}`,
    //   {
    //   headers: {
    //     Authorization: `Bearer ${token}`, // Gửi token trong header
    //   },
    // }
  );
  },

  editNote: async (id, data) => {
    // const token = localStorage.getItem('token'); 
    return await axiosClient.put(`api/note/edit-note/${id}`, data,
    //   {
    //   headers: {
    //     Authorization: `Bearer ${token}`, // Gửi token trong header
    //   },
    // }
  
  );
  },

  updateIsPinnedNote: async (id, data) => {
    // const token = localStorage.getItem('token'); 
    return await axiosClient.put(`api/note/update-note/${id}`, data,
  //     {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // Gửi token trong header
  //     },
  // }
);
  },

  deleteNote: async (id) => {
    // const token = localStorage.getItem('token'); 
    return await axiosClient.delete(`api/note/delete/${id}`,
    //    {
    //   headers: {
    //     Authorization: `Bearer ${token}`, // Gửi token trong header
    //   },
    // }
  );
  },

  getNotes: async () => {
    // const token = localStorage.getItem('token'); // Lấy token từ localStorage
    return await axiosClient.get('api/note/notes',
    //    {
    //   headers: {
    //     Authorization: `Bearer ${token}`, // Gửi token trong header
    //   },
    // }
  );
  },
};

export default noteApi;