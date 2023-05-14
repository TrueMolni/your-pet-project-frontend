import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';

import SharedLayout from 'modules/SharedLayout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';


export const App = () => {
  return (
    // <Provider store={store}>
    <BrowserRouter basename="/your-pet-project-frontend">
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
        <Route path= '/login' element ={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </BrowserRouter>
    // </Provider >
  );
};
