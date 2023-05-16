import React, { useState, useEffect } from 'react';

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
            <h2 className='modal-title'> cute dog looking for a home</h2>
                      <ul className='modal-pet-info'>
                          <li>Name:</li>
                          <li>Birthday:</li>
                          <li>Breed:</li>
                          <li>Place:</li>
                          <li>The sex:</li>
                          <li>Email:</li>
                          <li>Phone:</li>
                      </ul>
                      <p className='modal-pet-comments'>Comments: </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWindow;
