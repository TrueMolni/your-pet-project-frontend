import sprite from '../../../images/icons/sprite.svg';
import css from './auth-navigation.module.css';

const PawIcon = () => {
  return (
    <svg width={24} height={24} className={css.iconPaw}>
      <use href={sprite + '#paw-white'}></use>
    </svg>
  );
};

export default PawIcon;
