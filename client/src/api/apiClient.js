import React from 'react'
import axios from 'axios'
import { BASE_ROOT_URL } from './constant'

const axiosClient= axios.create({
    baseURL:BASE_ROOT_URL,
    headers:{
            Accept:"aplication/json",
            "Content-Type": "application/json",
    },
    withCredentials: true
})
axiosClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // Lấy token từ localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Gửi token trong header
    }
    return config;
});


export default axiosClient;