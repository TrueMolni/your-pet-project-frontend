import React, { useState, useEffect } from 'react';
import './modal-adv.css'; 


const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.className === 'modal') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={openModal}>Відкрити модальне вікно</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            
             
                  
            <div className='modal-content'>
             
              <div className='modal-main-info'>
                
              <h2 className='modal-title'> cute dog looking for a home</h2>
                      <ul className='modal-pet-info-list'>
                          <li>Name:<span></span></li>
                          <li>Birthday:<span></span></li>
                          <li>Breed:<span></span></li>
                          <li>Place:<span></span></li>
                          <li>The sex:<span></span></li>
                          <li>Email:<span></span></li>
                          <li>Phone:<span></span></li>
                </ul>
                </div>
              
            </div>
            <div className='modal-comment-section'>
              <p className='modal-pet-comments'>Comments: <span></span></p>
            </div>
            
            <div className='modal-buttons'>
              <button type='button' className='modal-add-favs'></button>
              <button type='button' className='modal-contact'></button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWindow;
