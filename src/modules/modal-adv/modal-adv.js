import React, { useState, useEffect } from 'react';
import './modal-adv.css';
import myImage from './123.jpg';

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

            <div className="modal-main-content">
              <div className="modal-top-side">
                <div className="modal-image-container">
                  <img src={myImage} alt="My Image" className="modal-image" />
                  <span className="modal-pet-price">Price</span>
                </div>
                <div className="modal-main-info">
                  <h2 className="modal-title">cute dog looking for a home</h2>
                  <ul className="modal-pet-info-list">
                    <li>
                      Name:<span className="modal-list-info">Rich</span>
                    </li>
                    <li>
                      Birthday:<span className="modal-list-info">21.09.2020</span>
                    </li>
                    <li>
                      Breed:<span className="modal-list-info">Pomeranian</span>
                    </li>
                    <li>
                      Place:<span className="modal-list-info">Lviv</span>
                    </li>
                    <li>
                      The sex:<span className="modal-list-info">male</span>
                    </li>
                    <li>
                      Email:<span className="modal-list-info modal-list-info-email">user@mail.com</span>
                    </li>
                    <li>
                      Phone:<span className="modal-list-info modal-list-info-phone">+380971234567</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-bot-side">
                <div className="modal-comment-section">
                  <p className="modal-pet-comments">
                    Comments: <span>Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! </span>
                  </p>
                </div>

                <div className="modal-buttons">
                  <button type="button" className="modal-add-favs">
                    <span>Add to</span>
                  </button>
                  <button type="button" className="modal-contact">
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWindow;
