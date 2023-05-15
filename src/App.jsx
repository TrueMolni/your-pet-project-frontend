import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';

import SharedLayout from 'modules/SharedLayout';

export const App = () => {
  return (
    // <Provider store={store}>
    <BrowserRouter basename="/your-pet-project-frontend">
      <SharedLayout />
      <Routes>
        {/* <Route path="/" element={<SharedLayout />}></Route> */}
      </Routes>
    </BrowserRouter>
    // </Provider >
  );
};
