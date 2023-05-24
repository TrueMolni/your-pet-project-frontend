import React, { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import Button from '../../shared/components/Button/Button';

import PawIcon from '../../modules/Navigation/AuthNavigation/PawIcon';

import css from './modalCongrats.module.css';

// const handlePositiveRegistration = () => {
//   setIsOpen(true);
// };

const ModalCongrats = (onClose) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
    console.log('closed')

  };

  return (
    <div className={css.backdrop}>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h1 className={css.title}>Congrats!</h1>
        <h2 className={css.text}>Youre registration is success</h2>
        <Button
          customStyle={css.succesBtn}
          buttonName={'go to profile'}
          buttonIcon={<PawIcon />}
          type="button"
          onClick={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default ModalCongrats;
