import { Outlet } from 'react-router-dom';

import css from './shared-layout.module.css';

import AddPetBtn from '../../shared/components/AddPetBtn';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <p>SharedLayout</p>
      <AddPetBtn />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
