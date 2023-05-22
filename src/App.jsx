import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SharedLayout from 'modules/SharedLayout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import FindPetPage from 'pages/FindPetPage/FindPetPage';
import MainPage from 'pages/MainPage/MainPage';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage.jsx';

import AddPetPage from 'pages/AddPetPage/AddPetPage.jsx';
import PrivateRoute from 'modules/PrivatRoutes/PrivatRoutes';
import PublicRoute from 'modules/PublicRoutes/PublicRoutes';
import { getAuth } from 'redux/auth/auth-selectors';
import { current } from 'redux/auth/auth-operations';
import UserPage from 'pages/UserPage/UserPage';

import NoticesPage from 'pages/NoticesPage/NoticesPage';


export const App = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(getAuth);
  // console.log(token, isLogin);

  useEffect(() => {
    dispatch(current());
    // console.log('useeffect');
  }, [dispatch, isLogin]);

  return (

    <BrowserRouter basename="/your-pet-project-frontend">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/main"  element={<MainPage />}></Route>
          <Route path="/notices" element={<FindPetPage />}></Route>
          <Route path="/notices/:categoryName" element={<NoticesPage />}></Route>

          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<UserPage />} />
            <Route path="/add-pet" element={<AddPetPage />}></Route>
          </Route>
        </Route>
 <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
