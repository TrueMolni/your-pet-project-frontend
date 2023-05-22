import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from 'redux/auth/auth-selectors';
import sprite from '../../../images/icons/sprite.svg';

const UserNavigation = ({ userNameStyle, userIconContainer }) => {
  const [name, setName] = useState('');
  const user = useSelector(getUser);
  useEffect(() => {
    const infoUser = () => {
      if (!!user) return setName(user);
      return setName('user');
    };
    infoUser();
  }, [name, user]);

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
