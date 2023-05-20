import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from 'shared/components/Loader/Loader';
import { getAuth } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return  <Loader/>
  }

  if (isLogin) {
    return <Navigate to="/main" />;
  }

  return <Outlet />;
};

export default PublicRoute;
