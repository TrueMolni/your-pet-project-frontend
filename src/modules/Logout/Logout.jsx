import css from './Logout.module.css';

const Logout = () => {
    const handleLogout = () => {
      // Логіка для виходу користувача з облікового запису
    };
  
    return (
      <button className={css.logoutBtn} onClick={handleLogout}> 
         <span className="css.logout-icon"></span>
      Logout</button>
    );
  };
  export default Logout;