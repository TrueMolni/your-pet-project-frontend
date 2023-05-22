// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { getUserEmail, } from 'redux/auth/auth-selectors';
// import sprite from '../../../images/icons/sprite.svg';

// const UserNavigation = ({ userNameStyle, userIconContainer }) => {
//   const userEmail = useSelector(getUserEmail);

//   const [name, setName] = useState(userEmail || 'user');

//   useEffect(() => {
//     setName(userEmail || 'user');
//   }, [userEmail]);

//   return (
//     <NavLink to={'/user'} className={userIconContainer}>
//       <svg width={28} height={28}>
//         <use href={sprite + '#user'}></use>
//       </svg>
//       <p className={userNameStyle}>{name}</p>
//     </NavLink>
//   );
// };
// export default UserNavigation;
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { getUser } from 'redux/auth/auth-selectors';
import { getUserEmail } from 'redux/auth/auth-selectors';
import sprite from '../../../images/icons/sprite.svg';

const UserNavigation = ({ userNameStyle, userIconContainer }) => {
  const [name, setName] = useState('user');
  const userEmail = useSelector(getUserEmail);

  // const user = useSelector(getUser);
  useEffect(() => {
    // const infoUser = () => {
    //   if (!!user) return setName(user);
    //   return setName('user');
    // };
    // infoUser();
    const infoUser = () => {
      if (userEmail) return setName(userEmail);
      return;
    };
    infoUser();
  }, [userEmail]);

  return (
    <NavLink to={'/user'} className={userIconContainer}>
      <svg width={28} height={28}>
        <use href={sprite + '#user'}></use>
      </svg>
      <p className={userNameStyle}>{name}</p>
    </NavLink>
  );
};
export default UserNavigation;