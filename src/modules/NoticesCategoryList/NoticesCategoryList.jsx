import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import NoticeCategoryItem from 'modules/NoticeCategoryItem/NoticeCategoryItem';
import styles from './notices-category-list.module.css';

import operations from '../../redux/notices/notices-operations';
import { selectNoticesByCategory } from 'redux/notices/notices-selectors';

// import { noticies } from './notices';

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const notices = useSelector(selectNoticesByCategory);
  const category = location.pathname.split('/')[2];

  useEffect(() => {
    dispatch(operations.getNoticesByCategory({ category: category }));
  }, [dispatch, category]);

  return (
    <div className={styles.section}>
      <ul className={styles.petsListWrapper}>
        {notices.map(
          ({ _id, avatarURL, title, location, date, category, sex }) => (
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
            />
          )
        )}
      </ul>
    </div>
  );
};

export default NoticesCategoryList;
