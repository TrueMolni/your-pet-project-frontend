import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  isUserLogin,
  // getAuth,
  // getUser,
  // getUserId,
} from 'redux/auth/auth-selectors';
import { selectFavorites } from 'redux/notices/notices-selectors';
import operations from 'redux/notices/notices-operations';

import {
  countFullYears,
  notification,
  selectIconGender,
} from 'helpers/helpersNoticeCategoryItem';
import sprite from '../../images/icons/sprite.svg';
import styles from './notice-category-item.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalDeleteNotice from 'modules/ModalDeleteNotice/ModalDeleteNotice';

const NoticeCategoryItem = ({
  id,
  avatarURL,
  title,
  place,
  date,
  location,
  category,
  sex,
  favorite,
  // owner,
}) => {
  const favoriteNotices = useSelector(selectFavorites);
  const [isModalDeleteNoticeOpen, setModalDeleteNoticeOpen] = useState(false);
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const owner = true;

  const toggleFavorite = () => {
    if (!isLogin) {
      notification();
      return;
    }
    console.log(id);
    dispatch(operations.updateFavorite(id));
  };

  const openModalDeleteNotice = () => {
    setModalDeleteNoticeOpen(true);
  };
  const closeModalDeleteNotice = () => {
    setModalDeleteNoticeOpen(false);
  };
  useEffect(() => {}, [favoriteNotices]);
  return (
    <li>
      <div className={styles.mainWrapper}>
        <div className={styles.positionWrapper}>
          <img src={avatarURL} alt="" className={styles.petImage} />
          <div className={styles.wrapperGategoryInform}>
            <p className={styles.category}>
              {category.replace(/(\.|-|\/|\\| )/g, ' ')}{' '}
            </p>
            <button
              className={styles.btnAddFavorite}
              type="button"
              onClick={toggleFavorite}
            >
              <svg
                width="24"
                height="24"
                className={favorite ? styles.inFavorite : ''}
              >
                <use xlinkHref={`${sprite}#heart`}></use>
              </svg>
            </button>
            {/* === userId */}
            {owner && (
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
      <ToastContainer />
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
