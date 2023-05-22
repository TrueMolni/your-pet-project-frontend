import { useState } from 'react';

import PetsList from './PetsList/PetsList';
import css from './petsData.module.css';
import AddPetButton from './AddPetButton/AddPetButton';

import ModalApprooveActions from '../ModalApprooveActions/ModalApprooveActions';

// import Loader from '../../shared/components/Loader/Loader';

const PetsData = ({ pets, onRemove, isLoadingPets }) => {
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [postId, setPostId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(!isModalOpen);

  const removeHandler = e => {
    setIsModalOpen(!isModalOpen);
    setPostId(e.currentTarget.name);
  };

  const editHandler = e => {
    setIsModalEdit(!isModalEdit);
    setPostId(e.currentTarget.name);
  };

  return (
    <div className={css.containerPetsDate}>
      <div className={css.boxMessage}>
        <h3 className={css.message}>My pets:</h3>
        <AddPetButton onPostHandler={editHandler} />
      </div>

      {/* {isLoadingPets ? (
        <Loader />
      ) : pets.length ? ( */}
      <PetsList
        removeHandler={removeHandler}
        pets={pets}
        onRemove={id => onRemove(id)}
      />
      {/* ) : (
        <div className={css.box404}>
          <h2 className={css.notFound}>You haven't added any pets yet</h2>
        </div>
      )} */}

      {isModalOpen && (
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
