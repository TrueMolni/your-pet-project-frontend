import { NavLink } from 'react-router-dom';
import sprite from '../../images/icons/sprite.svg';
import css from './navigation.module.css';

const AuthNavigation = () => {
  return (
    <ul className={css.authNavList}>
      <li>
        <NavLink className={css.authNavLink} to={'/login'}>
          Log IN
          <svg width={24} height={24} className={css.iconPaw}>
            <use href={sprite + '#pawprint'}></use>
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={css.authNavLink}
          style={{ backgroundColor: '#FEF9F9', color: '#FFC107' }}
          to={'/register'}
        >
          Registration
        </NavLink>
      </li>
    </ul>
  );
};
export default AuthNavigation;
