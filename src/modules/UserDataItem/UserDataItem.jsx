import React, { useState } from 'react';
// import axios from 'axios';
import css from './UserDataItem.module.css';
import { addUserInfo } from '../../redux/userInfo/user-operations.js';
import { useSelector } from 'react-redux';
import { getAuth } from '../../redux/auth/auth-selectors';

const UserDataItem = ({
  label,
  //   value,
  // isEditing,
  //   onInputChange,
  // onEditClick,
  // onSaveClick,
}) => {
  const { token } = useSelector(getAuth);

  const initState = {
    photo: '',
    name: '',
    email: '',
    phone: '',
    birthday: '',
    city: '',
  };

  const [userData, setUserData] = useState(initState);
  const [isEditing, setIsEditing] = useState('edit');
  // edit,editing,edited
  const handleEditClick = () => {
    console.log("edit click")
    setIsEditing('editing');
  };

  const handleSaveClick = () => {
    console.log("editing click")
    setIsEditing("edited");
    addUserInfo(userData, token);
    setIsEditing("edit");

  };
  //   const { name, phone, photo, city, email, birthday } = userData;
  //   useEffect(() => {
  //     // fn for request info user
  //     axios.get().then(data => {
  //       if (data) {
  //         const { name, phone, photo, city, email, birthday } = data;
  //             setUserData(name, phone, photo, city, email, birthday);
  //          return   console.log(userData);

  //       }
  //       return;
  //     });
  //   }, [setUserData, userData]);

  const onInputChange = e => {
    const value = e.currentTarget.value;
    const nameValue = e.currentTarget.name;
    setUserData({ [nameValue]: value });
  };

  return (
    <>
      {isEditing === "edit" && 
        <div>
          <label className={css.inputLable}>
            {label}
            <input
              className={css.input}
              variant="filled"
              value={userData.label}
              placeholder={label}
              type={label}
              name={label}
              readOnly="readonly"
              // disabled="disabled"
            />{' '}
            <button className={css.btnEdit} onClick={handleEditClick}>
              <span className="css.pencle-icon"></span>
              Edit
            </button>
          </label>
        </div>
      }
      {isEditing === 'editing'&&
        <div>
          <label className={css.inputLable}>
            {label}
            <input
              className={css.input}
              variant="filled"
              onChange={onInputChange}
              value={userData.label}
              placeholder={label}
              type={label}
              name={label}
            />
             <button className={css.btnSaved}>
              <span className="css.confirm-icon"></span>
              Save
            </button>
          </label>
        </div>
      }
      { isEditing === 'edited'&&
        <div>
          <label className={css.inputLable}>
            {label}
            <input
              className={css.input}
              variant="filled"
              onChange={onInputChange}
              value={userData.label}
              placeholder={label}
              type={label}
              name={label}
            />
             <button className={css.btnSave} onClick={handleSaveClick}>
                <span className="css.confirm-icon"></span>
                Save
              </button>
                        </label>
        </div>}
    </>
  );
};
export default UserDataItem;
