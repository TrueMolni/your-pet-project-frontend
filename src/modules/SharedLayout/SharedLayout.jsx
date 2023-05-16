import { Outlet } from 'react-router-dom';
import NavContainer from 'modules/Navigation/NavContainer';

import css from './shared-layout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <NavContainer />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
