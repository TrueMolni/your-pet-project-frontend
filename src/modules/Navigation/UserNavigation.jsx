import { NavLink } from 'react-router-dom';
import sprite from '../../images/icons/sprite.svg';
// import css from './navigation.module.css';

const UserNavigation = () => {
  return (
    <NavLink to={'/user'}>
      <svg width={28} height={28}>
        <use href={sprite + '#user'}></use>
      </svg>
    </NavLink>
  );
};
export default UserNavigation;
