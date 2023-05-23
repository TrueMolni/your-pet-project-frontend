import css from './btnDeletePet.module.css';
import sprite from '../../../images/icons/sprite.svg';

const BtnDeletePet = ({ onClick, name }) => {
  const clickHandler = e => {
    onClick(e);
  };
  return (
    <button
      className={css.deleteBtn}
      name={name}
      type="button"
      onClick={clickHandler}
    >
      <svg width={24} height={24} className={css.iconTrash}>
        <use href={sprite + '#trash'}></use>
      </svg>
    </button>
  );
};
export default BtnDeletePet;
