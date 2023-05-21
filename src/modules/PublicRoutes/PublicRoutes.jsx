import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const { isLogin } = useSelector(getAuth);


  if (isLogin) {
    return <Navigate to="/user" />;
  }

  return <Outlet />;
};

export default PublicRoute;
