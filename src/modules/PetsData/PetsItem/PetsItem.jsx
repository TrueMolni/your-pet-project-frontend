import defImage from '../../../images/defaultImg/defaultImg.png';
import BtnDeletePet from '../BtnDeletePet/BtnDeletePet';
import css from './petsItem.module.css';

const PetsItem = ({ pet }) => {
  const { name, date, breed, avatarURL, comments } = pet;

  return (
    <div className={css.box}>
      <div className={css.wrapperPicDiv}>
        <img src={avatarURL ? avatarURL : defImage} alt={name} />
      </div>
      <div className={css.description}>
        <BtnDeletePet
          style={{
            position: 'absolute',
            right: '0',
          }}
          // onClick={handleDelete} //розкоментувати після
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
