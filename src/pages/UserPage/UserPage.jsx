import ButtonNav from 'shared/components/Button/ButtonNav';
import PetsData from 'modules/PetsData/PetsData';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import css from '../../modules/Navigation/AuthNavigation/auth-navigation.module.css';

const UserPage = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        fontWeight: 800,
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <ButtonNav
        customStyle={css.loginBtn}
        buttonName={'Logout'}
        type="button"
        onClick={() => dispatch(logout())}
      />
      <PetsData />
    </div>
  );
};
export default UserPage;
