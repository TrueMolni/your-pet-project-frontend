import { useNavigate } from 'react-router-dom';
import css from './auth-navigation.module.css';
import ButtonNav from 'shared/components/Button/ButtonNav';
import PawIcon from './PawIcon';

const AuthNavigation = ({ listStyle }) => {
  const navigate = useNavigate();
  return (
    <ul className={listStyle}>
      <li>
        <ButtonNav
          customStyle={css.loginBtn}
          buttonName={'Log IN'}
          buttonIcon={<PawIcon />}
          type="button"
          onClick={() => navigate('/login')}
        />
      </li>
      <li>
        <ButtonNav
          customStyle={css.registerBtn}
          buttonName={'Registration'}
          type="button"
          onClick={() => navigate('/register')}
        />
      </li>
    </ul>
  );
};
export default AuthNavigation;
