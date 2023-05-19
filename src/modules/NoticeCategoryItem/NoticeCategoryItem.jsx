import { countFullYears, selectIconGender } from 'helpers/noticesHelpers';
import sprite from '../../images/icons/sprite.svg';
import styles from './notice-category-item.module.css';
import { noticies } from "../NoticesCategoryList/notices";

noticies.map((petInformation) => petInformation)
const NoticeCategoryItem = ( petInformation ) => {
  const { _id, date, comments, avatarURL, category, location, sex, title } =
    petInformation;

  return (
    <li key={_id}>
      <div className={styles.mainWrapper}>
        <div className={styles.positionWrapper}>
          <img src={avatarURL} alt={comments} className={styles.petImage} />
          <div className={styles.wrapperGategoryInform}>
            <p className={styles.category}>
              {category.replace(/(\.|-|\/|\\| )/g, ' ')}{' '}
            </p>
            <button className={styles.btnAddFavorite}>
              <svg width="24" height="24">
                <use xlinkHref={`${sprite}#heart`}></use>
              </svg>
            </button>
            {/* { && (
              <button className={styles.btnDelete}>
                <svg width="24" height="24">
                  <use xlinkHref={`${sprite}#trash`}></use>
                </svg>
              </button>
            )} */}
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
          <p className={styles.text}>{title}</p>
          <button className={styles.btnLearnMore}>Learn more</button>
        </div>
      </div>
    </li>
  );
};

export default NoticeCategoryItem;