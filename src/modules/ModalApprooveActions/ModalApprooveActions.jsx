import React, { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import Button from '../../shared/components/Button/Button';
import sprite from '../../images/icons/sprite.svg';
import css from './modalApprooveActions.module.css';

const ModalApprooveActions = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.backdrop}>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h1 className={css.title}>Already leaving?</h1>
        <div className={css.btnWrapper}>
          <Button
            customStyle={css.approoveBtn}
            buttonName={'Cancel'}
            type="button"
            onClick={handleCloseModal}
          />
          <Button
            customStyle={css.approoveBtn}
            buttonName={'Yes'}
            type="button"
            // onClick={handleDelete}
            buttonIcon={
              <svg width={24} height={24} className={css.logout}>
                <use href={sprite + '#logout'}></use>
              </svg>
            }
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalApprooveActions;
