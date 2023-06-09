import React from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selectors';

import AddPetBtn from '../../shared/components/AddPetBtn';

import css from './notices-categories-nav.module.css';

const category = [
  {
    text: 'sell',
    link: 'sell',
  },
  {
    text: 'in good hands',
    link: 'for-free',
  },
  {
    text: 'lost/found',
    link: 'lost-found',
  },
];

const authCategory = [
  {
    text: 'favorite ads',
    link: 'favorites',
  },
  {
    text: 'my ads',
    link: 'own',
  },
];

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(isUserLogin);

  return (
    <div className={css.category_wrapper}>
      <ul className={css.category_list}>
        <div className={css.category_links}>
          {category.map(value => (
            <li className={css.category_item} key={nanoid()}>
              <NavLink
                className={css.category_btn}
                to={'/notices/' + value.link}
                name={value.link}
              >
                {value.text}
              </NavLink>
            </li>
          ))}
        </div>
        <div className={css.category_auth_links}>
          {isLoggedIn &&
            authCategory.map(value => (
              <li className={css.category_item} key={nanoid()}>
                <NavLink
                  className={css.category_btn}
                  to={'/notices/' + value.link}
                  name={value.link}
                >
                  {value.text}
                </NavLink>
              </li>
            ))}
        </div>
      </ul>
      <AddPetBtn />
    </div>
  );
};

export default NoticesCategoriesNav;
