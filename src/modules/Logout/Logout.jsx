import css from './Logout.module.css';

const Logout = ({ onClick }) => {
  return (
    <button className={css.logoutBtn} onClick={onClick}>
      <span className="css.logout-icon"></span>
      Logout
    </button>
  );
};
export default Logout;
