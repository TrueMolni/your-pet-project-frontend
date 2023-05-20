import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';

import Loader from 'shared/components/Loader/Loader.jsx';

import SharedLayout from 'modules/SharedLayout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import FindPetPage from 'pages/FindPetPage/FindPetPage';
import MainPage from 'pages/MainPage/MainPage';
import PrivateRoute from 'modules/PrivatRoutes/PrivatRoutes';
import PublicRoute from 'modules/PublicRoutes/PublicRoutes';
import { getAuth } from 'redux/auth/auth-selectors';
import { current } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isLogin, token, isLoading } = useSelector(getAuth);
  console.log(token, isLogin)

  useEffect(() => {
    dispatch(current());
    console.log('useeffect')
  }, [dispatch, isLogin ]);

 if (isLoading) {
   return <Loader />;
 }

  return (
    <BrowserRouter basename="/your-pet-project-frontend">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<PublicRoute />}>
            <Route path="/notices" element={<FindPetPage />}></Route>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/main" element={<MainPage />}></Route>
          </Route>

          {/* <Route
                path="/notices/:categoryName"
                element={<NoticesPage />}
              ></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
