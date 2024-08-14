import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from "./Appwriter/auth";
import { login, logout } from "./STORE/authSlice";
import { Footer, Header } from './Component';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Header />
      <main className='flex-grow bg-gray-50 p-6 md:p-12'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className='flex justify-center items-center min-h-screen bg-gray-200'>
      <div className='text-gray-700 text-lg'>Loading...</div>
    </div>
  );
}

export default App;
