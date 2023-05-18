// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import React, { useState } from 'react';
import ModalWindow from './modules/modal-adv/modal-adv';
export const App = () => {
  


  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Відкрити модальне вікно</button>
      {showModal && <ModalWindow onClose={closeModal} />}
    </div>
  );



};
