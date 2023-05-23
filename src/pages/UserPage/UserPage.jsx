import ButtonNav from "shared/components/Button/ButtonNav";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import css from '../../modules/Navigation/AuthNavigation/auth-navigation.module.css';
import ModalCongrats from "modules/ModalCongrats/ModalCongrats";

const UserPage = () => {
  const dispatch = useDispatch()
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
      <p>Here Supposed to be User Page</p>

      <ModalCongrats />

      <ButtonNav
        customStyle={css.loginBtn}
        buttonName={'Logout'}
        type="button"
        onClick={() => dispatch(logout())}
      />
    </div>
  );
};
export default UserPage;
