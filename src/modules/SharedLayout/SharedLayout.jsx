import { Outlet } from 'react-router-dom';

import css from './shared-layout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <p>SharedLayout</p>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
