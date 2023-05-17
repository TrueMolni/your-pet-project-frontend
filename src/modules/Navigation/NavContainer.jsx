import css from './navigation.module.css';
import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';
import UserNavigation from './UserNavigation';
import AuthNavigation from './AuthNavigation';
import Logo from './Logo';

const NavContainer = () => {
  return (
    <div className={css.navContainer}>
      <Logo />
      <Navigation />
      {<AuthNavigation /> || <UserNavigation />}
      <BurgerMenu />
    </div>
  );
};
export default NavContainer;
