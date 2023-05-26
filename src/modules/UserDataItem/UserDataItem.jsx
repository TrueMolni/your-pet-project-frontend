import React, { useState } from 'react';
import css from './UserDataItem.module.css';
import { useSelector } from 'react-redux';
import { getAuth } from '../../redux/auth/auth-selectors';
import {addUserInfoString} from '../../redux/userInfo/user-operations.js'
const UserDataItem = ({
  label,
  //   value,
  // isEditing,
  //   onInputChange,
  // onEditClick,
  // onSaveClick,
}) => {
  const { token } = useSelector(getAuth);

  const [userData, setUserData] = useState({
    photo: '',
    name: '',
    email: '',
    phone: '',
    birthday: '',
    city: '',
  });
  const [isEditing, setIsEditing] = useState('edit');
  const [curentChangingName, setCurentChangingName] = useState("");
  const [curentChangingValue, setCurentChangingValue] = useState("");
  
  const handleEditClick = () => {
    setIsEditing('editing');
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setIsEditing("edited");
    addUserInfoString(curentChangingName,curentChangingValue, token).then(res=>setUserData(p=>({...p,res})));
    setIsEditing("edit");

  };
  const onInputChange = e => {
    const value = e.currentTarget.value;
    const nameValue = e.currentTarget.name;
    setUserData(prev=> ({...prev,nameValue: value }));
    setCurentChangingName(nameValue);
    setCurentChangingValue(value) ;
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
              name={label.toLowerCase()}
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
              name={label.toLowerCase()}
            />
             <button className={css.btnSaved} onClick={handleSaveClick}>
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
             <button className={css.btnSave} >
                <span className="css.confirm-icon"></span>
                Save
              </button>
                        </label>
        </div>}
    </>
  );
};
export default UserDataItem;