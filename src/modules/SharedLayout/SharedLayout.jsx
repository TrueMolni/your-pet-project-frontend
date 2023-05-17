import { Outlet } from 'react-router-dom';

import css from './shared-layout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
