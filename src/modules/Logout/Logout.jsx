import css from './Logout.module.css';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Логіка для виходу користувача з облікового запису
    dispatch(logout());
  };

  return (
    <button className={css.logoutBtn} onClick={handleLogout}>
      <span className="css.logout-icon"></span>
      Logout
    </button>
  );
};
export default Logout;
