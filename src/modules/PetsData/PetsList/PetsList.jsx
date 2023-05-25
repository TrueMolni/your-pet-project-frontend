// import { useDispatch, useSelector } from 'react-redux';
// import React, { useEffect } from 'react';

import PetsItem from '../PetsItem/PetsItem.jsx';
import emptyPets from '../../../images/notfound/cat.png';
import css from './petsList.module.css';
import catalog from './catalog.json';

// import { selectPet } from 'redux/notices/notices-selectors';

// import operations from '../../../redux/notices/notices-operations.js';

const Petslist = () => {
  // const pets = useSelector(selectPet);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(operations.getUserPet());
  // }, [dispatch]);

  const pets = catalog;

  const card = pets?.map(pet => {
    return (
      <li className={css.item} key={pet._id} id={pet._id}>
        <PetsItem pet={pet} />
      </li>
    );
  });

  return (
    <>
      {pets?.length === 0 && (
        <div className={css.imgContainer}>
          <img
            className={css.imgEmpty}
            src={emptyPets}
            alt="No pets were added"
          />
          <h3>No pets were added</h3>
        </div>
      )}
      <ul className={css.list}>{card}</ul>
    </>
  );
};

export default Petslist;
