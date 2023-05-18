import sprite from '../../../images/icons/sprite.svg';
import css from './modal.module.css';

const Close = () => {
  return (
    <svg width={24} height={24} className={css.closeButtonIcon}>
      <use href={sprite + '#cross'}></use>
    </svg>
  );
};

export default Close;
