import { Outlet } from 'react-router-dom';
import NavContainer from 'modules/Navigation/NavContainer';
import { getAuth } from 'redux/auth/auth-selectors';
import css from './shared-layout.module.css';
import { useSelector } from 'react-redux';
import Loader from 'shared/components/Loader/Loader';

const SharedLayout = () => {

  const { isLoading,  } = useSelector(getAuth)
  // console.log('isLogin', isLogin);


  return (
    <div className={css.container}>
      <header>
        <NavContainer />
      </header>
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
    </div>
  );
};

export default SharedLayout;
