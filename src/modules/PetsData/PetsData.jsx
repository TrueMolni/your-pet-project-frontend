import { useState } from 'react';

import PetsList from './PetsList/PetsList';
import css from './petsData.module.css';
import AddPetBtn from '../../shared/components/AddPetBtn/AddPetBtn';

import ModalApprooveActions from '../ModalApprooveActions/ModalApprooveActions';

const PetsData = ({ pets, onRemove, onAdd, isLoadingPets }) => {
  const [postId, setPostId] = useState(null);
  const [isModalApprooveOpen, setModalApprooveOpen] = useState(false);

  const closeModal = () => setModalApprooveOpen(!isModalApprooveOpen);

  const removeHandler = e => {
    isModalApprooveOpen(!isModalApprooveOpen);
    setPostId(e.currentTarget.name);
  };

  return (
    <div className={css.containerPetsDate}>
      <div className={css.boxMessage}>
        <h3 className={css.message}>My pets:</h3>
        <AddPetBtn />
      </div>

      <PetsList
        removeHandler={removeHandler}
        pets={pets}
        onRemove={id => onRemove(id)}
      />

      {isModalApprooveOpen && (
        <ModalApprooveActions
          onRemove={postId => onRemove(postId)}
          id={postId}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default PetsData;
