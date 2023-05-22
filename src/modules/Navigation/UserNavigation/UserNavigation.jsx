import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserEmail, } from 'redux/auth/auth-selectors';
import sprite from '../../../images/icons/sprite.svg';

const UserNavigation = ({ userNameStyle, userIconContainer }) => {
  const userEmail = useSelector(getUserEmail);

  const [name, setName] = useState(userEmail || 'user');

  useEffect(() => {
    setName(userEmail || 'user');
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
