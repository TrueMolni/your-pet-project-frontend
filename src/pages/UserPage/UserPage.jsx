// import ButtonNav from "shared/components/Button/ButtonNav";
// import { useDispatch } from "react-redux";
// import { logout } from "redux/auth/auth-operations";
import React, { useEffect } from 'react';
// import { addUserInfo } from '../../redux/userInfo/user-operations';
// import Button from 'shared/components/Button';
import styles from './UserPage.module.css';
import UserData from '../../modules/UserData/UserData.jsx';
import Logout from '../../modules/Logout/Logout.jsx';
// import axios from 'axios';

import PetsData from 'modules/PetsData/PetsData';
import { useDispatch, useSelector } from 'react-redux';
import { logout, openModal } from 'redux/auth/auth-operations';

import ModalCongrats from 'modules/ModalCongrats/ModalCongrats';
import { isModalOpen } from 'redux/auth/auth-selectors';

const UserPage = () => {
  const showModal = useSelector(isModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showModal) {
      const timer = setTimeout(() => {
        dispatch(openModal());
      });
      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, showModal]);

  return (
    <>
      {showModal && <ModalCongrats />}
      <section className={styles.container}>
        <div className={styles.userWrap}>
          <div className={styles.userDataBox}>
            <UserData />
            <Logout onClick={() => dispatch(logout())} />
          </div>
          <div className={styles.petsDataBox}>
            <PetsData />
          </div>
        </div>
      </section>
    </>
  );
};
export default UserPage;

