import { useEffect } from 'react';

import AuthNavigation from 'modules/Navigation/AuthNavigation/AuthNavigation';
import UserNavigation from 'modules/Navigation/UserNavigation';
import Navigation from 'modules/Navigation/Nav/Navigation';
import Logo from 'modules/Navigation/Logo/Logo';
import BurgerMenuBtn from 'modules/Navigation/BurgerMenuBtn/BurgerMenuBtn';
import sprite from '../../images/icons/sprite.svg';
import css from './menu-page.module.css';

const MenuPage = ({ close }) => {
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
          {<AuthNavigation listStyle={css.btnListStyle} /> || (
            <UserNavigation />
          )}
          <Navigation navListStyle={css.navList} navLinkStyle={css.navLink} />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
