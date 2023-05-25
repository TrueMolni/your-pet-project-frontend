// import ButtonNav from "shared/components/Button/ButtonNav";
// import { useDispatch } from "react-redux";
// import { logout } from "redux/auth/auth-operations";
import React from 'react';
// import { addUserInfo } from '../../redux/userInfo/user-operations';
// import Button from 'shared/components/Button';
import styles from './UserPage.module.css';
import UserData from '../../modules/UserData/UserData.jsx';
import Logout from '../../modules/Logout/Logout.jsx';
// import axios from 'axios';
import ButtonNav from 'shared/components/Button/ButtonNav';
import PetsData from 'modules/PetsData/PetsData';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import css from '../../modules/Navigation/AuthNavigation/auth-navigation.module.css';

const UserPage = () => {
  const dispatch = useDispatch();
  return (
    <section className={styles.container}>
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
        <UserData />
        <Logout />

        <ButtonNav
          customStyle={css.loginBtn}
          buttonName={'Logout'}
          type="button"
          onClick={() => dispatch(logout())}
        />
        <PetsData />
      </div>
    </section>
  );
};
export default UserPage;

// const UserPages = () => {

// // const initState = {photo:'',name:'',email:'',phone:'',birthday:'',city:''}
// const dispatch = useDispatch();
// // const [userData, setUserData] = useState(initState);

// const reset = () => {
// setUserData(initState);
// };
// const onSubmitForm = async e => {
// e.preventDefault();
// console.log(userData)
// dispatch(addUserInfo(userData))
// reset();
// };

// const changedValueInput = e => {

//   const value = e.currentTarget.value;
//   const nameValue = e.currentTarget.name;
//   setUserData((p)=>{return {...p,[nameValue]:value}});
// console.log(userData)
// };

// return (
// <section className={css.container}>
//   <h1>My Information:</h1>
//   <div>
//     <img className={css.img} src="" alt="User" />
//     <form className={css.formStyle} onSubmit={onSubmitForm} autoComplete="off">
//         <input
//         className={css.inputImg}
//           accept="image/png, image/jpeg,image/jpg"
//           onChange={changedValueInput}
//           value={userData.photo}
//           type="file"
//           name="photo"
//         />
//       <label>
//         Name:
//         <input
//         className={css.input}
//           variant="filled"
//           onChange={changedValueInput}
//           value={userData.name}
//           placeholder="Name"
//           type="name"
//           name="name"
//         />
//       </label>
//       <label>
//         Email:
//         <input
//         className={css.input}
//           variant="filled"
//           onChange={changedValueInput}
//           value={userData.email}
//           placeholder="Email addres"
//           type="email"
//           name="email"
//         />
//       </label>
//       <label>
//         Birthday:
//         <input
//         className={css.input}
//           variant="filled"
//           onChange={changedValueInput}
//           value={userData.birthday}
//           placeholder="Your birthday"
//           name="birthday"
//         />
//       </label>
//       <label>
//         Phone:
//         <input
//         className={css.input}
//           variant="filled"
//           onChange={changedValueInput}
//           value={userData.phone}
//           placeholder="Your phone"
//           type="phone"
//           name="phone"
//         />
//       </label>
//       <label>
//         City:
//         <input
//         className={css.input}
//           variant="filled"
//           onChange={changedValueInput}
//           value={userData.city}
//           placeholder="Your city"
//           name="city"
//         />
//       </label>
//       <Button type="submit" onSubmit={onSubmitForm}>
//       Submit
//     </Button>
//     <ButtonNav
//       customStyle={css.loginBtn}
//       buttonName={'Logout'}
//       type="button"
//       onClick={() => dispatch(logout())}
//     />
//     </form >
//   </div>
// </section>
// );
// };

// // export default UserPage;
