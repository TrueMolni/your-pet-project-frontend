import css from './btnDeletePet.module.css';
import sprite from '../../../images/icons/sprite.svg';

export const BtnDeletePet = ({ onClick, name }) => {
  const handleDelete = e => {
    onClick(e);
  };
  return (
    <button
      className={css.deleteBtn}
      name={name}
      type="button"
      onClick={handleDelete}
    >
      <svg width={24} height={24} className={css.iconTrash}>
        <use href={sprite + '#trash'}></use>
      </svg>
    </button>
  );
};
