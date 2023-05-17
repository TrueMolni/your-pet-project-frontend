import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import css from './modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(
    () => {
      const handleKeyPress = event => {
        if (event.key === 'Escape') {
          handleClose();
        }
      };

      const handleClickOutside = event => {
        if (event.target.className === 'backdrop') {
          handleClose();
        }
      };

      if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleClickOutside);
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyPress);
        document.removeEventListener('click', handleClickOutside);
      };
    }
    //   [isOpen]
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className={css.backdrop} onClick={handleClose}></div>
      <div className={css.modal}>
        <div className={css.modalContent}>
          <span className={css.closeButton} onClick={handleClose}>
            <IoClose className={css.closeButtonIcon} />
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
