import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn
//     // , isRefreshing 
// } = useAuth();
const isLoggedIn = true;
  const shouldRedirect = !isLoggedIn
//    && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
