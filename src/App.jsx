import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'shared/components/Loader/Loader';
import { getAuth } from 'redux/auth/auth-selectors';
import { current } from 'redux/auth/auth-operations';

const MainPage = lazy(() => import('pages/MainPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage.jsx'));
const AddPetPage = lazy(() => import('pages/AddPetPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const SharedLayout = lazy(() => import('modules/SharedLayout'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const FindPetPage = lazy(() => import('pages/FindPetPage/FindPetPage'));
const PrivateRoute = lazy(() => import('modules/PrivatRoutes/PrivatRoutes'));
const PublicRoute = lazy(() => import('modules/PublicRoutes/PublicRoutes'));
export const App = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(getAuth);

  useEffect(() => {
    dispatch(current());
    // console.log('useeffect');
  }, [dispatch, isLogin]);

  return (
    <BrowserRouter basename="/your-pet-project-frontend">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/notices" element={<FindPetPage />}></Route>
            <Route
              path="/notices/:categoryName"
              element={<NoticesPage />}
            ></Route>

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
      </Suspense>
    </BrowserRouter>
  );
};
