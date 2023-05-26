import React, { useState } from 'react';
import UserDataItem from '../UserDataItem/UserDataItem.jsx';
import css from './UserData.module.css';
// import axios from 'axios'
// import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { getAuth } from '../../redux/auth/auth-selectors';

import { addUserInfo } from '../../redux/userInfo/user-operations.js';

const UserData = ({ data }) => {
  const [userData, setUserData] = useState('');
  // const [editingField, setEditingField] = useState('');
  const [isUpdate, setIsUpdate] = useState('save');
  const { token } = useSelector(getAuth);
  const [userDataPhoto, setUserDataPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const handleEditClick = field => {
  //   setEditingField(field);
  // };

  // const handleSaveClick = () => {
  //   setEditingField('');
  //   addUserInfo(userData,token);

  // };

  const onClickEditBtn = e => {
    setIsUpdate('confirm');
    document.getElementById('fileInput').click();
    document
      .getElementById('fileInput')
      .addEventListener('change', function (e) {
        setUserData(e.target.files[0]);
      });
  };

  const onClickConfirmBtn = async () => {
    setIsLoading(true);
    setIsUpdate('updated');
    await addUserInfo(userData, token).then(res =>
      setUserDataPhoto(res.avatar)
    );
    setIsLoading(false);
    setIsUpdate('save');
  };
  return (
    <>
      <h1>My Information:</h1>

      <div className={css.divreverse}>
        <div className={css.avatarDiv}>
          <img
            className={css.imgUser}
            src={userDataPhoto}
            alt=""
            // onClick={addUserPhoto}
          />
          {isLoading && <h2 className={css.loading}>...LOADING...</h2>}
          {isUpdate === 'save' && (
            <button onClick={onClickEditBtn} className={css.btnEditPhoto}>
              <span className="css.camera-icon"></span>
              Edit photo
            </button>
          )}
          {isUpdate === 'updated' && (
            <button className={css.btnConfirmPhoto}>
              <span className="css.camera-icon"></span>
              Confirm
            </button>
          )}
          {isUpdate === 'confirm' && (
            <button
              onClick={onClickConfirmBtn}
              className={css.btnIsConfirmPhoto}
            >
              <span className="css.camera-icon"></span>
              Confirm
            </button>
          )}
          <input
            className={css.inputImg}
            id="fileInput"
            type="file"
            accept="image/*"
            // onChange={handlePhotoUpload}
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
            // isEditing={editingField === 'name'}
            // onInputChange={changedValueInput}
            // onEditClick={() => handleEditClick('name')}
            // onSaveClick={handleSaveClick}
          />
          <UserDataItem
            label="Email:"
            // value={userData.email}
            // isEditing={editingField === 'email'}
            // onInputChange={changedValueInput}
            // onEditClick={() => handleEditClick('email')}
            // onSaveClick={handleSaveClick}
          />
          <UserDataItem
            label="Phone:"
            // value={userData.phone}
            // isEditing={editingField === 'phone'}
            // onInputChange={changedValueInput}
            // onEditClick={() => handleEditClick('phone')}
            // onSaveClick={handleSaveClick}
          />
          <UserDataItem
            label="Birthday:"
            // value={userData.birthday}
            // isEditing={editingField === 'birthday'}
            // onInputChange={changedValueInput}
            // onEditClick={() => handleEditClick('birthday')}
            // onSaveClick={handleSaveClick}
          />
          <UserDataItem
            label="City"
            // value={userData.city}
            // isEditing={editingField === 'city'}
            // onInputChange={changedValueInput}
            // onEditClick={() => handleEditClick('city')}
            // onSaveClick={handleSaveClick}
          />
        </form>
      </div>
    </>
  );
};
export default UserData;
