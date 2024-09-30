// src/apis/authApi.js
import axiosClient from './apiClient';

const authApi = {
  login: (email, password) => {
    return axiosClient.post('api/users/login', { email, password });
  },

  registerUser: (fullname, age, email, password) => {
    return axiosClient.post('api/users/register', { fullname, age, email, password });
  },

  getCurrentUser: (token) => {
    return axiosClient.get('api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default authApi;
