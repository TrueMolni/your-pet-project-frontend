import css from './Logout.module.css';
import { logout, openModal } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    // Логіка для виходу користувача з облікового запису
  };

  return (
    <button className={css.logoutBtn} onClick={handleLogout}>
      <span className="css.logout-icon"></span>
      Logout
    </button>
  );
};
export default Logout;
