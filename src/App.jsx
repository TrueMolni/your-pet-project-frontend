import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

import SharedLayout from 'modules/SharedLayout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import FindPetPage from 'pages/FindPetPage/FindPetPage';
import MainPage from 'pages/MainPage/MainPage';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/your-pet-project-frontend">
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route path="/main" element={<MainPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route path="/notices" element={<FindPetPage />}></Route>
              {/* <Route
                path="/notices/:categoryName"
                element={<NoticesPage />}
              ></Route> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
