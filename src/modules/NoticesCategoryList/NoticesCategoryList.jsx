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
} from 'redux/notices/notices-selectors';

// import { noticies } from './notices';

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const favoriteAds = useSelector(selectFavoriteAds);
  const favorites = useSelector(selectFavorites);
  const notices = useSelector(selectNoticesByCategory);
  const category = location.pathname.split('/')[2];

  const list =
    location.pathname === '/notices/favorites' ? favoriteAds : notices;

  useEffect(() => {
    dispatch(operations.getNoticesByCategory({ category: category }));
    dispatch(operations.getNoticeByFavorite());
  }, [dispatch, category, favorites]);

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
    </div>
  );
};
export default NoticesCategoryList;
