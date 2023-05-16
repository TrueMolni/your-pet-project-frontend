import sprite from '../../images/icons/sprite.svg';
import css from './navigation.module.css';

const BurgerMenu = () => {
  return (
    <button type="button" className={css.burgerMenu}>
      <svg width={24} height={24}>
        <use href={sprite + '#menu-hamburger'}></use>
      </svg>
    </button>
  );
};
export default BurgerMenu;
