import React, { createContext, useState, useEffect } from 'react';
import authApi from '@api/authApi';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, user: null });
  const navigate = useNavigate(); // Correctly using useNavigate hook

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
      showModal('success', 'Login Successful', ['Welcome back!'], () => {
        // navigate("/") // Redirect to the root path after successful login
        window.location.href="/";
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
        navigate("/login") // Redirect to the root path after successful registration
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
    // window.location.href = '/login';
    navigate("/login")
  };

  return (
    <AuthContext.Provider value={{ auth, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
