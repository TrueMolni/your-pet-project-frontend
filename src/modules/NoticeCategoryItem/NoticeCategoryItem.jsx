import moment from 'moment/moment';
import sprite from '../../images/icons/sprite.svg';
import styles from './notice-category-item.module.css';

const NoticeCategoryItem = ({ petInformation }) => {
  const { _id, date, comments, avatarURL, category, location, sex, title } =
    petInformation;
  return (
    <li key={_id}>
      <div className={styles.mainWrapper}>
        <div className={styles.positionWrapper}>
          <img src={avatarURL} alt={comments} width="" height="" />
          <div className={styles.wrapperGategoryInform}>
            <p className={styles.category}>{category}</p>
            <button className={styles.btnAddFavorite}>
              <svg width="24" height="24">
                <use xlinkHref={`${sprite}#heart`}></use>
              </svg>
            </button>
          </div>

          <div className={styles.description}>
            <p className={styles.itemDescription}>
              <svg width="24" height="24">
                <use xlinkHref={`${sprite}#location`}></use>
              </svg>
              <span>{location}</span>
            </p>
            <p className={styles.itemDescription}>
              <svg width="24" height="24">
                <use xlinkHref={`${sprite}#clock`}></use>
              </svg>
              <span>{date}</span>
            </p>
            <p className={styles.itemDescription}>
              <svg width="24" height="24">
                <use xlinkHref={`${sprite}#male`}></use>
              </svg>
              <span>{sex}</span>
            </p>
          </div>
        </div>
        <div className={styles.wrapperLearnMore}>
          <p className={styles.text}>{title}</p>
          <button className={styles.btnLearnMore}>Learn more</button>
        </div>
      </div>
    </li>
  );
};

export default NoticeCategoryItem;
