import React, { useState, useEffect } from 'react';
import UserDataItem from '../UserDataItem/UserDataItem.jsx';
import css from './UserData.module.css';
import { useSelector } from 'react-redux';
import { getAuth } from '../../redux/auth/auth-selectors';

import {
  addUserPhoto,
  getUserInfo,
} from '../../redux/userInfo/user-operations.js';

const UserData = ({ data }) => {
  const [userData, setUserData] = useState('');
  // const [editingField, setEditingField] = useState('');
  const [isUpdate, setIsUpdate] = useState('save');
  const { token } = useSelector(getAuth);
  const [userDataPhoto, setUserDataPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUserInfo(token).then(res => setUserData(res));
    console.log(userData);
  }, [token, userData]);

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
    await addUserPhoto(userData, token).then(res =>
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
          <UserDataItem label="Name" />
          <UserDataItem label="Email" />
          <UserDataItem label="Phone" />
          <UserDataItem label="Birthday" />
          <UserDataItem label="City" />
        </form>
      </div>
    </>
  );
};
export default UserData;
