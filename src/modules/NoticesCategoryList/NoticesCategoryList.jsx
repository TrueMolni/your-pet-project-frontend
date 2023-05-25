import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import NoticeCategoryItem from 'modules/NoticeCategoryItem/NoticeCategoryItem';
import styles from './notices-category-list.module.css';

import operations from '../../redux/notices/notices-operations';
import {
  selectFavoriteAds,
  selectFavorites,
  selectNoticesByCategory,
  selectUserNotices,
} from 'redux/notices/notices-selectors';
import { getUserID } from 'redux/auth/auth-selectors';
import Pagination from '../../modules/Pagination/Pagination';

// import { noticies } from './notices';

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const favoriteAds = useSelector(selectFavoriteAds);
  const favorites = useSelector(selectFavorites);
  const userNotices = useSelector(selectUserNotices);

  const notices = useSelector(selectNoticesByCategory);
  const category = location.pathname.split('/')[2];

  const userID = useSelector(getUserID);

  let list;
  switch (location.pathname) {
    case '/notices/favorites':
      list = favoriteAds;
      break;
    case '/notices/own':
      list = userNotices;
      break;
    default:
      list = notices;
  }

  const request = () => {
    switch (location.pathname) {
      case '/notices/favorites':
        if (userID && favorites) {
          dispatch(operations.getNoticeByFavorite());
        }
        break;
      case '/notices/own':
        if (userID) {
          dispatch(operations.getUserNotices());
        }
        break;
      default:
        dispatch(operations.getNoticesByCategory({ category: category }));
    }
  };
  useEffect(request, [
    dispatch,
    category,
    favorites,
    userID,
    location.pathname,
  ]);

  return (
    <div className={styles.section}>
      <ul className={styles.petsListWrapper}>
        {list.map(
          ({ _id, avatarURL, title, location, date, category, sex, owner }) => (
            <NoticeCategoryItem
              key={_id}
              id={_id}
              avatarURL={avatarURL}
              title={title}
              place={location}
              date={date}
              location={location}
              category={category}
              sex={sex}
              owner={owner}
            />
          )
        )}
      </ul>

      <Pagination />
    </div>
  );
};
export default NoticesCategoryList;
