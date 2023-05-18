import moment from 'moment/moment';
import sprite from '../../images/icons/sprite.svg';
import styles from './notice-category-item.module.css';
import { noticies } from "../NoticesCategoryList/notices";

noticies.map((petInformation) => petInformation)
const NoticeCategoryItem = ( petInformation ) => {
  const { _id, date, comments, avatarURL, category, location, sex, title } =
    petInformation;

  const countFullYears = () => {
    const recordСreationDate = moment(date);
    const currentDate = moment();
    const fullYears = currentDate.diff(recordСreationDate, 'years');
    if (!fullYears) {
      const fullMonths = currentDate.diff(recordСreationDate, 'months');
      return `${fullMonths} ${
        fullMonths === 1 || fullMonths === 1 ? 'month' : 'months'
      }`;
    }
    return `${fullYears} ${
      fullYears === 1 || fullYears === 1 ? 'year' : 'years'
    }`;
  };

  const selectIconGender = () => {
    if (sex === 'male') {
      return `${sprite}#male`;
    }
    return `${sprite}#female`;
  };
  return (
    <li key={_id}>
      <div className={styles.mainWrapper}>
        <div className={styles.positionWrapper}>
          <img src={avatarURL} alt={comments} width="" height="" />
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
              <span>{countFullYears()}</span>
            </p>
            <p className={styles.itemDescription}>
              <svg width="24" height="24">
                <use xlinkHref={selectIconGender()}></use>
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
