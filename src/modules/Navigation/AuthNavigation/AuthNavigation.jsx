import { useNavigate } from 'react-router-dom';
import css from './auth-navigation.module.css';
import ButtonNav from 'shared/components/Button/ButtonNav';
import PawIcon from './PawIcon';
import { getAuth } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
const AuthNavigation = ({ listStyle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { isLogin, token } = useSelector(getAuth);
  //   return (
  //     <ul className={listStyle}>
  //       <li>
  //         <ButtonNav
  //           customStyle={css.loginBtn}
  //           buttonName={'Log IN'}
  //           buttonIcon={<PawIcon />}
  //           type="button"
  //           onClick={() => navigate('/login')}
  //         />
  //       </li>
  //       <li>
  //         <ButtonNav
  //           customStyle={css.registerBtn}
  //           buttonName={'Registration'}
  //           type="button"
  //           onClick={() => navigate('/register')}
  //         />
  //       </li>
  //     </ul>
  //   );
  // };
  // export default AuthNavigation;
  return (
    <ul className={listStyle}>
      {!isLogin && !token && (
        <>
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
        </>
      )}
      {(isLogin || token) && (
        <li>
          <ButtonNav
            customStyle={css.registerBtn}
            buttonName={'Log out'}
            type="button"
            onClick={() => dispatch(logout())}
          />
        </li>
      )}
    </ul>
  );
};

export default AuthNavigation;