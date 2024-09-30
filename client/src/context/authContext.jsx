
import React, { createContext, useState, useEffect } from 'react';
import authApi from '../api/authApi';
import { Modal } from 'antd';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, user: null });

  // Function to show modal (for success or error messages)
  const showModal = (type, title, content, onClose) => {
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authApi.getCurrentUser(token)
        .then(res => setAuth({ token, user: res.data }))
        .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await authApi.login(email, password);
      const { token } = res.data;
      localStorage.setItem('token', token);
      setAuth({ token, user: res.data });

      // Show success modal
      showModal('success', 'Login Successful', ['Welcome back!'], () => {
        window.location.href = '/';
      });
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      showModal('error', 'Login Error', [message], null);
      throw new Error(message);
    }
  };

  const registerUser = async (fullname, age, email, password) => {
    try {
      const res = await authApi.registerUser(fullname, age, email, password);

      // Show success modal
      showModal('success', 'Registration Successful', ['You have registered successfully.'], () => {
        window.location.href = '/login';
      });
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed';
      showModal('error', 'Registration Error', [message], null);
      throw new Error(message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ token: null, user: null });
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ auth, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
