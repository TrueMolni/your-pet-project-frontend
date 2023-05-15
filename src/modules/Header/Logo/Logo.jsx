import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.svg';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/main" className={styles.logo}>
      <img src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
