import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  isUserLogin,
  getUserFavoriteNotices,
  getUserID,
} from 'redux/auth/auth-selectors';
import operations from 'redux/notices/notices-operations';
import { selectFavorites } from 'redux/notices/notices-selectors';
import ModalDeleteNotice from 'modules/ModalDeleteNotice/ModalDeleteNotice';
import {
  countFullYears,
  notification,
  selectIconGender,
} from 'helpers/helpersNoticeCategoryItem';
import sprite from '../../images/icons/sprite.svg';
import styles from './notice-category-item.module.css';

const NoticeCategoryItem = props => {
  const { id, avatarURL, title, place, date, category, sex, owner } = props;
  const userID = useSelector(getUserID);
  const favoriteNotice = useSelector(selectFavorites);
  const favoriteUserNotice = useSelector(getUserFavoriteNotices);
  const markAddedFavorites = () => {
    if (!userID) {
      return '';
    } else if (!favoriteNotice.length) {
      const favorite = favoriteUserNotice.includes(id) ? styles.inFavorite : '';
      return favorite;
    } else {
      const favorite = favoriteNotice.includes(id) ? styles.inFavorite : '';
      return favorite;
    }
  };
  const [isModalDeleteNoticeOpen, setModalDeleteNoticeOpen] = useState(false);
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (!isLogin) {
      notification();
      return;
    }
    dispatch(operations.updateFavorite(id));
  };

  const openModalDeleteNotice = () => {
    setModalDeleteNoticeOpen(true);
  };
  const closeModalDeleteNotice = () => {
    setModalDeleteNoticeOpen(false);
  };
  useEffect(() => {}, []);
  return (
    <li className={styles.li}>
      <div className={styles.mainWrapper}>
        <div className={styles.positionWrapper}>
          <img src={avatarURL} alt="" className={styles.petImage} />
          <div className={styles.wrapperGategoryInform}>
            <p className={styles.category}>
              {category === 'lost-found'
                ? 'lost/found'
                : category.replace(/(\.|-|\/|\\| )/g, ' ')}{' '}
            </p>
            <button
              className={styles.btnAddFavorite}
              type="button"
              onClick={toggleFavorite}
            >
              <svg width="24" height="24" className={markAddedFavorites()}>
                <use xlinkHref={`${sprite}#heart`}></use>
              </svg>
            </button>
            {owner === userID && (
              <button
                className={styles.btnDelete}
                onClick={() => openModalDeleteNotice(title, id)}
              >
                <svg width="24" height="24">
                  <use xlinkHref={`${sprite}#trash`}></use>
                </svg>
              </button>
            )}
          </div>

          <div className={styles.description}>
            <p className={styles.itemDescription}>
              <svg width="24" height="24">
                <use xlinkHref={`${sprite}#location`}></use>
              </svg>
              <span>
                {place.length > 10 ? `${place.slice(0, 6)}...` : place}
              </span>
            </p>
            <p className={styles.itemDescription}>
              <svg width="24" height="24">
                <use xlinkHref={`${sprite}#clock`}></use>
              </svg>
              <span>{countFullYears(date)}</span>
            </p>
            <p className={styles.itemDescription}>
              <svg width="24" height="24">
                <use xlinkHref={selectIconGender(sex)}></use>
              </svg>
              <span>{sex}</span>
            </p>
          </div>
        </div>
        <div className={styles.wrapperLearnMore}>
          <p className={styles.text}>
            {title.length > 28 ? `${title.slice(0, 28)}...` : title}
          </p>
          <button className={styles.btnLearnMore}>Learn more</button>
        </div>
      </div>
      <ModalDeleteNotice
        isOpen={isModalDeleteNoticeOpen}
        onClose={closeModalDeleteNotice}
        title={title}
        id={id}
      />
    </li>
  );
};

export default NoticeCategoryItem;
