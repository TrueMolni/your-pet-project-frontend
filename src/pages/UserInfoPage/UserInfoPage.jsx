import React, {  useState,} from 'react';
import { useDispatch } from "react-redux";
import { addUserInfo } from '../../redux/userInfo/user-operations';
import { Button } from '@chakra-ui/react';
import css from './UserInfoPage.module.css';
const initState = {photo:'',name:'',email:'',phone:'',birthday:'',city:''}
const UserInfoPage = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(initState);

  const reset = () => {
    setUserData(initState);
  };
  const onSubmitForm = async e => {
    e.preventDefault();
    console.log(userData)
dispatch(addUserInfo(userData))
    reset();
  };



  const onLogoutBtnClick = async () => {};

  const changedValueInput = e => {
    
      const value = e.currentTarget.value;
      const nameValue = e.currentTarget.name;
      setUserData((p)=>{return {...p,[nameValue]:value}});
    console.log(userData)
  };

  return (
    <section className={css.container}>
      <h1>My Information:</h1>
      <div>
        <img className={css.img} src="" alt="User" />
        <form className={css.formStyle} onSubmit={onSubmitForm} autoComplete="off">
            <input
            className={css.inputImg}
              accept="image/png, image/jpeg,image/jpg"
              onChange={changedValueInput}
              value={userData.photo}
              type="file"
              name="photo"
            />
          <label>
            Name:
            <input
            className={css.input}
              variant="filled"
              onChange={changedValueInput}
              value={userData.name}
              placeholder="Name"
              type="name"
              name="name"
            />
          </label>
          <label>
            Email:
            <input
            className={css.input}
              variant="filled"
              onChange={changedValueInput}
              value={userData.email}
              placeholder="Email addres"
              type="email"
              name="email"
            />
          </label>
          <label>
            Birthday:
            <input
            className={css.input}
              variant="filled"
              onChange={changedValueInput}
              value={userData.birthday}
              placeholder="Your birthday"
              name="birthday"
            />
          </label>
          <label>
            Phone:
            <input
            className={css.input}
              variant="filled"
              onChange={changedValueInput}
              value={userData.phone}
              placeholder="Your phone"
              type="phone"
              name="phone"
            />
          </label>
          <label>
            City:
            <input 
            className={css.input}
              variant="filled"
              onChange={changedValueInput}
              value={userData.city}
              placeholder="Your city"
              name="city"
            />
          </label>
          <Button type="submit" onSubmit={onSubmitForm}>
          Submit
        </Button>
          <Button type="button" onClick={onLogoutBtnClick}>
            Logout
          </Button>
        </form >
      </div>
    </section>
  );
};
export default UserInfoPage;

