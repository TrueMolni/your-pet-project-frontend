import React, {  } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import Button from '../../shared/components/Button/Button';

import PawIcon from '../../modules/Navigation/AuthNavigation/PawIcon';

import css from './modalCongrats.module.css';

// const handlePositiveRegistration = () => {
//   setIsOpen(true);
// };

const ModalCongrats = ({ isOpen, onClose }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className={css.backdrop}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <h1 className={css.title}>Congrats!</h1>
        <h2 className={css.text}>Youre registration is success</h2>
        <Button
          customStyle={css.succesBtn}
          buttonName={'go to profile'}
          buttonIcon={<PawIcon />}
          type="button"
          onClick={onClose}
        />
      </Modal>
    </div>
  );
};

export default ModalCongrats;