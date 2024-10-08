
import axiosClient from './apiClient';

const noteApi = {
  addNote: async (data) => {
    return await axiosClient.post('api/note/add-note', data,
  );
  },

  getNoteById: async (id) => {
    return await axiosClient.get(`api/note/note/${id}`,
  );
  },

  editNote: async (id, data) => {
    return await axiosClient.put(`api/note/edit-note/${id}`, data,
  );
  },
  updateIsPinnedNote: async (id, data) => {
    return await axiosClient.put(`api/note/update-note/${id}`, data,
);
  },

  deleteNote: async (id) => {
    return await axiosClient.delete(`api/note/delete/${id}`,
  );
  },

  getNotes: async () => {
  
    return await axiosClient.get('api/note/notes',
   
  );
  },
  SearchNote: async (query) => {
  
    return await axiosClient.get(`api/note/search?query=${query}`
   
  );
  },
};

export default noteApi;