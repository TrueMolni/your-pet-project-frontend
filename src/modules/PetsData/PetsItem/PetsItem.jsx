// імпортувати операцію з видалення тваринки та вказати правильну назву операції
// наприклад
// import { removePet } from 'redux/pet/operations';
//

// import { useDispatch } from 'react-redux';             //розкоментувати після

import defImage from '../../../images/defaultImg/defaultImg.png';
import BtnDeletePet from '../BtnDeletePet/BtnDeletePet';
import css from './petsItem.module.css';

const PetsItem = ({ pet }) => {
  const {
    // _id,    // розкоментувати після
    name,
    date,
    breed,
    avatarURL,
    comments,
  } = pet;

  // const dispatch = useDispatch();     //розкоментувати після

  // const handleDelete = () => {        //розкоментувати після
  //   dispatch(removePet(_id));
  // };

  return (
    <div className={css.box}>
      <div className={css.wrapperPicDiv}>
        <img src={avatarURL ? avatarURL : defImage} alt={name} />
      </div>
      <div className={css.description}>
        <BtnDeletePet
        // onClick={handleDelete}      //розкоментувати після
        />
        <div className={css.infoPet}>
          <b> Name:</b> {name ? name : 'No Info'}
        </div>
        <div className={css.infoPet}>
          <b> Date of birth:</b> {date ? date : 'No Info'}
        </div>
        <div className={css.infoPet}>
          <b>Breed:</b> {breed ? breed : 'No Info'}
        </div>
        <div className={css.infoPet}>
          <b> Comments:</b> {comments ? comments : 'No Info'}
        </div>
      </div>
    </div>
  );
};
export default PetsItem;
