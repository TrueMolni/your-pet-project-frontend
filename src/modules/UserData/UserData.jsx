import React, { useState } from 'react';
import UserDataItem from '../UserDataItem/UserDataItem.jsx';
import css from './UserData.module.css';
// import { useDispatch } from "react-redux";
// import { addUserInfo } from '../../redux/userInfo/user-operations';

const UserData = ({ data }) => {
  const [userPhoto, setUserPhoto] = useState('');
  //   const initState = {
  //     photo: '',
  //     name: '',
  //     email: '',
  //     phone: '',
  //     birthday: '',
  //     city: '',
  //   };
  //   const [userData, setUserData] = useState(initState);
  //   if (data) {
  //     const { name, phone, photo, city, email, birthday } = data;
  //     setUserData(name, phone, photo, city, email, birthday);
  //     console.log(userData);
  //   }

  const [editingField, setEditingField] = useState('');

  //   const handleInputChange = event => {
  //     const { name, value } = event.target;
  //     setUserData(prevUserData => ({
  //       ...prevUserData,
  //       [name]: value,
  //     }));
  //   };
  // const changedValueInput = e => {

  //   const value = e.currentTarget.value;
  //   const nameValue = e.currentTarget.name;
  //   setUserData((p)=>{return {...p,[nameValue]:value}});
  // console.log(userData)
  // };

  const handleEditClick = field => {
    setEditingField(field);
  };

  const handleSaveClick = () => {
    setEditingField('');
  };
  const handlePhotoUpload = () => {
    // fn sent file to back
  };

  const addUserPhoto = () => {
    let url;
    setUserPhoto({ photo: url });
  };
  //   const dispatch = useDispatch();
  // const [userData, setUserData] = useState(initState);

  //   const reset = () => {
  //     setUserData(initState);
  //   };
  //   const onSubmitForm = async e => {
  //     e.preventDefault();
  //     console.log(userData);
  //     dispatch(addUserInfo(userData));
  //      };

  // document.getElementById('uploadButton').addEventListener('click', function() {
  //   document.getElementById('fileInput').click();
  // });

  // document.getElementById('fileInput').addEventListener('change', function(event) {
  //   const selectedFile = event.target.files[0];
  //   // req add file
  //   console.log('Selected file:', selectedFile);
  // });
  return (
    <>
      <h1>My Information:</h1>

      <div className={css.divreverse}>
        <div className={css.avatarDiv}>
          <img
            className={css.imgUser}
            src={userPhoto}
            alt=""
            onClick={addUserPhoto}
          />
          <button id="uploadButton" className={css.btnEditPhoto}>
            <span className="css.camera-icon"></span>
            Edit photo
          </button>
          <input
            className={css.inputImg}
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </div>
        <form
          className={css.formStyle}
          //   onSubmit={onSubmitForm}
          autoComplete="off"
        >
          {' '}
          <UserDataItem
            label="Name:"
            // value={userData.name}
            isEditing={editingField === 'name'}
            // onInputChange={changedValueInput}
            onEditClick={() => handleEditClick('name')}
            onSaveClick={handleSaveClick}
          />
          <UserDataItem
            label="Email:"
            // value={userData.email}
            isEditing={editingField === 'email'}
            // onInputChange={changedValueInput}
            onEditClick={() => handleEditClick('email')}
            onSaveClick={handleSaveClick}
          />
          <UserDataItem
            label="Phone:"
            // value={userData.phone}
            isEditing={editingField === 'phone'}
            // onInputChange={changedValueInput}
            onEditClick={() => handleEditClick('phone')}
            onSaveClick={handleSaveClick}
          />
          <UserDataItem
            label="Birthday:"
            // value={userData.birthday}
            isEditing={editingField === 'birthday'}
            // onInputChange={changedValueInput}
            onEditClick={() => handleEditClick('birthday')}
            onSaveClick={handleSaveClick}
          />
          <UserDataItem
            label="City"
            // value={userData.city}
            isEditing={editingField === 'city'}
            // onInputChange={changedValueInput}
            onEditClick={() => handleEditClick('city')}
            onSaveClick={handleSaveClick}
          />
        </form>
      </div>
    </>
  );
};
export default UserData;
