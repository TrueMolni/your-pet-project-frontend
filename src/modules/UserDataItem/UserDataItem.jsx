import React, { useState } from 'react';
// import axios from 'axios';
import css from './UserDataItem.module.css';

const UserDataItem = ({
  label,
//   value,
  isEditing,
  //   onInputChange,
  onEditClick,
  onSaveClick,
}) => {
    
  const initState = {
    photo: '',
    name: '',
    email: '',
    phone: '',
    birthday: '',
    city: '',
  };
  const [userData, setUserData] = useState(initState);
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
    setUserData( {[nameValue]: value} );
    console.table(userData);
  };
 
  if (isEditing) {
    return (
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
          <button className = {css.btnES} onClick={onSaveClick}>Save</button>
        </label>
      </div>
    );
  } else {
    return (
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
          <button className = {css.btnES} onClick={onEditClick}>Edit</button>
        </label>
      </div>
    );
  }
};
export default UserDataItem;
