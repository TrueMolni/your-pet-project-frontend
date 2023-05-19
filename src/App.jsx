import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  useSelector } from 'react-redux';

import Loader from 'shared/components/Loader/Loader.jsx';
import { isLoading, isToken } from 'redux/auth/auth-selectors.js';
import SharedLayout from 'modules/SharedLayout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import MainPage from 'pages/MainPage/MainPage';
// import { current } from 'redux/auth/auth-operations.js';

export const App = () => {

  const token = useSelector(isToken);
  console.log(token)

 const ifLoading = useSelector(isLoading);
 if (ifLoading) {
   return (
     <Loader/>
   );
 }

  return (
        <BrowserRouter basename="/your-pet-project-frontend">
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route path="/main" element={<MainPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route
                path="/notices/:categoryName"
                element={<NoticesPage />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
  );
};
