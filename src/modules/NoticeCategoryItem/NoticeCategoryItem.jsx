import sprite from '../../images/icons/sprite.svg';
import styles from './pet-item.module.css';

const NoticeCategoryItem = () => {
  return (
    <li>
      <div className={styles.mainWrapper}>
        <div className={styles.positionWrapper}>
          <img src="" alt="" width="" height="" />
          <div className={styles.wrapperGategoryInform}>
            <p className={styles.category}>In good hands</p>
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
              <span>Lviv</span>
            </p>
            <p className={styles.itemDescription}>
              <svg width="24" height="24">
                <use xlinkHref={`${sprite}#clock`}></use>
              </svg>
              <span>1 year</span>
            </p>
            <p className={styles.itemDescription}>
              <svg width="24" height="24">
                <use xlinkHref={`${sprite}#male`}></use>
              </svg>
              <span>male</span>
            </p>
          </div>
        </div>
        <div className={styles.wrapperLearnMore}>
          <p className={styles.text}>Сute dog looking for a home</p>
          <button className={styles.btnLearnMore}>Learn more</button>
        </div>
      </div>
    </li>
  );
};

export default NoticeCategoryItem;
