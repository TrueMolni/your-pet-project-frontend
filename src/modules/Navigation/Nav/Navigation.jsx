import { NavLink } from 'react-router-dom';
import navItems from './navItems';

const Navigation = ({ navListStyle, navLinkStyle }) => {
  const elements = navItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={navLinkStyle} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <ul className={navListStyle}>{elements}</ul>
    </nav>
  );
};
export default Navigation;
