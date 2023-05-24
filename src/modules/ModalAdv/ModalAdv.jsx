import React, { useState, useEffect } from 'react';
import Modal from 'shared/components/Modal/Modal';
import img from "./123.jpg"
import styles from './modalAdv.module.css';
import sprite from '../../images/icons/sprite.svg';
const ModalAdv = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // useEffect(() => {
  //   const handleKeyPress = (event) => {
  //     if (event.key === 'Escape') {
  //       closeModal();
  //     }
  //   };

  //   const handleClickOutside = (event) => {
  //     if (event.target.className === 'modal') {
  //       closeModal();
  //     }
  //   };

  //   document.addEventListener('keydown', handleKeyPress);
  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyPress);
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);
  const isOpen = true
 
  return (
     <Modal isOpen={true}>

    
      
  
        <div className={styles.modal}>
          <div className="modalContent">
        

            <div className={styles.modalMainContent}>
              <div className={styles.modalTopSide}>
                <div className={styles.modalImageContainer}>
                  <img src={img} alt="My Image" className={styles.modalImage} />
                  <span className={styles.modalPetPrice}>In good hands</span>
                </div>
                <div className={styles.modalMainInfo}>
                  <h2 className={styles.modalTitle}>cute dog looking for a home</h2>
                  <ul className={styles.modalPetInfoList}>
                    <li>
                      Name:<span className={styles.modalListInfo}>Rich</span>
                    </li>
                    <li>
                      Birthday:<span className={styles.modalListInfo}>21.09.2020</span>
                    </li>
                    <li>
                      Breed:<span className={styles.modalListInfo}>Pomeranian</span>
                    </li>
                    <li>
                      Place:<span className={styles.modalListInfo}>Lviv</span>
                    </li>
                    <li>
                      The sex:<span className={styles.modalListInfo}>male</span>
                    </li>
                    <li>
                      Email:<span className={`${styles.modalListInfo} ${styles.modalListInfoEmail}`} >user@mail.com</span>
                    </li>
                    <li>
                      Phone:<span className={`${styles.modalListInfo} ${styles.modalListInfoPhone}`} >+380971234567</span>
                    </li>
                  </ul>
                </div>
              </div>
          <div className={styles.modalBotSide}>
            <div className={styles.modalCommentSection}>
              <p className={styles.modalPetComments}>
                    Comments: <span className={styles.modalPetComent}>Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! </span>
                  </p>
                </div>

            <div className={styles.modalButtons}>
              <button type="button" className={styles.modalAddFavs}>
                  <span>Add to</span>
                  <svg width="24" height="24" className={styles.modalHeartSvg}>
                <use xlinkHref={`${sprite}#heart`}></use></svg>
                  </button>
              <button type="button" className={styles.modalContact}>
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
          </Modal>
  );
};

export default ModalAdv;
