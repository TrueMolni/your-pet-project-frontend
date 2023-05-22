import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthNavigation from 'modules/Navigation/AuthNavigation/AuthNavigation';
import UserNavigation from 'modules/Navigation/UserNavigation/UserNavigation';
import Navigation from 'modules/Navigation/Nav/Navigation';
import Logo from 'modules/Navigation/Logo/Logo';
import BurgerMenuBtn from 'modules/Navigation/BurgerMenuBtn/BurgerMenuBtn';
import { isUserLogin } from 'redux/auth/auth-selectors';
import sprite from '../../images/icons/sprite.svg';
import css from './menu-page.module.css';

const MenuPage = ({ close }) => {
  const isLogin = useSelector(isUserLogin);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
  return (
    <div className={css.backdrop} onClick={close}>
      <div className={css.menuWrapper}>
        <div className={css.menuHeader}>
          <Logo />
          <BurgerMenuBtn btnIcon={sprite + '#close'} handleClick={close} />
        </div>
        <div className={css.navContainer}>
          {isLogin ? (
            <UserNavigation
              userIconContainer={css.userIconContainer}
              userNameStyle={css.userName}
            />
          ) : (
            <AuthNavigation listStyle={css.btnListStyle} />
          )}
          <Navigation navListStyle={css.navList} navLinkStyle={css.navLink} />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
