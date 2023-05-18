import React, { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import Button from '../../shared/components/Button/Button';
import sprite from '../../images/icons/sprite.svg';
import css from './modalCongrats.module.css';

// const handlePositiveRegistration = () => {
//   setIsOpen(true);
// };

const ModalCongrats = ({ handlePositiveRegistration }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.backdrop}>
      {/* <button onClick={handleOpenModal}>Відкрити модальне вікно</button> */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h1 className={css.backdrop}>Congrats!</h1>
        <h2 className={css.backdrop}>Youre registration is success</h2>
        <Button
          customStyle={css.succesBtn}
          buttonName={'go to profile'}
          type="button"
          onClick={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default ModalCongrats;
