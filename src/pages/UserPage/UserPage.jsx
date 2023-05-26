import React, {

} from 'react';
import css from './UserPage.module.css';
import UserData from '../../modules/UserData/UserData.jsx';
import Logout from '../../modules/Logout/Logout.jsx';
import { useDispatch } from "react-redux";
import { logout } from 'redux/auth/auth-operations';
const UserPage = () => {
  const dispatch = useDispatch();
  return (
<section className={css.container}>
      <UserData />
      <Logout onClick={() => dispatch(logout())} />
      {/* <Logout /> */}
</section>
  );
};
export default UserPage;

