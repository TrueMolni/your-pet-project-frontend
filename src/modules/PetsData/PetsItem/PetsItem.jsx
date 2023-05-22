// import { removePet } from 'redux/auth/operations';
// import { useDispatch } from 'react-redux';

import defImage from '../../../images/defaultImg/defaultImg.jpeg';
import BtnDeletePet from '../BtnDeletePet/BtnDeletePet';
import css from './petsItem.module.css';

const PostItem = ({ pet }) => {
  const {
    // _id,
    name,
    date,
    breed,
    avatarURL,
    comments,
  } = pet;

  // const dispatch = useDispatch();

  // const handleDelete = () => {
  //   dispatch(removePet(_id));
  // };

  return (
    <div className={css.box}>
      <div className={css.wrapperPicDiv}>
        <img src={avatarURL ? avatarURL : defImage} alt={name} />
      </div>
      <div className={css.description}>
        <BtnDeletePet
        // onClick={handleDelete}
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
export default PostItem;
