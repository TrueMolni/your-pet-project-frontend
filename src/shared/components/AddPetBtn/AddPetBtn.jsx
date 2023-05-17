import { Link } from 'react-router-dom';

import css from './add-pet-btn.module.css';
import sprite from '../../../images/icons/sprite.svg';

const AddPetBtn = () => {
  return (
    <Link className={css.Btn} href="/add-pet">
      Add Pet
      <svg width="24px" height="24px" className={css.icon}>
        <use href={sprite + '#plus'}></use>
      </svg>
    </Link>
  );
};

export default AddPetBtn;
