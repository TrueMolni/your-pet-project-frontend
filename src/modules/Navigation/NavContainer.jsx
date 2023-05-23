import { useState } from 'react';
import { useSelector } from 'react-redux';
import css from './nav-container.module.css';
import sprite from '../../images/icons/sprite.svg';
import Logo from './Logo/index';
import BurgerMenuBtn from './BurgerMenuBtn/BurgerMenuBtn';
import Navigation from './Nav/Navigation';
import UserNavigation from './UserNavigation/UserNavigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import MenuPage from 'pages/MenuPage/MenuPage';
import { isUserLogin } from 'redux/auth/auth-selectors';

const NavContainer = () => {
  const [isShow, setIsShow] = useState(false);
  const isLogin = useSelector(isUserLogin);

  const openMenu = event => {
    if (!event) return;
    setIsShow(true);
  };
  const close = e => {
    if (
      e.target.nodeName === 'BUTTON' ||
      e.target.nodeName === 'A' ||
      e.currentTarget.nodeName === 'BUTTON'
    ) {
      setIsShow(false);
    }
  };
  return (
    <>
      <div className={css.headerContainer}>
        <Logo />
        <div className={css.navContainer}>
          <Navigation navListStyle={css.navList} navLinkStyle={css.navLink} />
          {isLogin ? (
            <UserNavigation
              userIconContainer={css.userIconContainer}
              userNameStyle={css.userName}
            />
          ) : (
            <AuthNavigation listStyle={css.authNavList} />
          )}
          <BurgerMenuBtn
            btnStyle={css.burgerMenu}
            btnIcon={sprite + '#menu-hamburger'}
            handleClick={openMenu}
          />
        </div>
      </div>
      {isShow && <MenuPage close={close} />}
    </>
  );
};
export default NavContainer;
