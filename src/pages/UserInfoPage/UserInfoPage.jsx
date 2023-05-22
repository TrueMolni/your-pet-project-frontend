import React, {  useState,} from 'react';
import { useDispatch } from "react-redux";
import { addUserInfo } from '../../redux/userInfo/user-operations';
import { Button } from '@chakra-ui/react';
import { Formstyle ,InputStyle,ImgStyle,InputStyleImg,UserContainer} from './UserInfoPage.styled';

const UserInfoPage = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({photo:'',name:'',email:'',phone:'',birthday:'',city:''});

  const reset = () => {
    setUserData({});
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
    <UserContainer>
      <h1>My Information:</h1>
      <div>
        <ImgStyle src="" alt="User" />
        <Formstyle onSubmit={onSubmitForm} autoComplete="off">
            <InputStyleImg
              accept="image/png, image/jpeg,image/jpg"
              onChange={changedValueInput}
              value={userData.photo}
              type="file"
              name="photo"
            />
          <label>
            Name:
            <InputStyle
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
            <InputStyle
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
            <InputStyle
              variant="filled"
              onChange={changedValueInput}
              value={userData.birthday}
              placeholder="Your birthday"
              name="birthday"
            />
          </label>
          <label>
            Phone:
            <InputStyle
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
            <InputStyle
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
        </Formstyle>
      </div>
    </UserContainer>
  );
};
export default UserInfoPage;
//      <form>

//     <label for="photo">Add or Edit Photo:</label>
//     <input type="file" id="photo" accept="image/*">
//     <span class="edit-icon"></span>
//     <span class="confirm-icon"></span>
//     <br><br>

//     <label for="name">Name:</label>
//     <input type="text" id="name">
//     <span class="edit-icon"></span>
//     <span class="confirm-icon"></span>
//     <br><br>

//     <label for="email">Email:</label>
//     <input type="email" id="email">
//     <span class="edit-icon"></span>
//     <span class="confirm-icon"></span>
//     <br><br>

//     <label for="birthday">Birthday:</label>
//     <input type="date" id="birthday">
//     <span class="edit-icon"></span>
//     <span class="confirm-icon"></span>
//     <br><br>

//     <label for="phone">Phone:</label>
//     <input type="tel" id="phone">
//     <span class="edit-icon"></span>
//     <span class="confirm-icon"></span>
//     <br><br>

//     <label for="city">City:</label>
//     <input type="text" id="city">
//     <span class="edit-icon"></span>
//     <span class="confirm-icon"></span>
//     <br><br>

//     <input type="submit" value="Submit">
//     <button type="button" id="logout">Logout</button>
//   </form>
