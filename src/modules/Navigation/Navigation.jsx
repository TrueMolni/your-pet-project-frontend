import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink className={css.navLink} to={'/news'}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={css.navLink} to={'/notices'}>
            Find pet
          </NavLink>
        </li>
        <li>
          <NavLink className={css.navLink} to={'/friends'}>
            Our friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
