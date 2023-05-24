import styles from './ProgressBar.module.css';

const ProgressBar = ({ step }) => {
  let cn1 = '';
  let cn2 = '';
  let cn3 = '';

  if (step === 1) {
    cn1 = `${styles.barItem} ${styles.current}`;
    cn2 = `${styles.barItem}`;
    cn3 = `${styles.barItem}`;
  } else if (step === 2) {
    cn1 = `${styles.barItem} ${styles.passed}`;
    cn2 = `${styles.barItem} ${styles.current}`;
    cn3 = `${styles.barItem}`;
  } else if (step === 3) {
    cn1 = `${styles.barItem} ${styles.passed}`;
    cn2 = `${styles.barItem} ${styles.passed}`;
    cn3 = `${styles.barItem} ${styles.current}`;
  }

  return (
    <div className={styles.barWrapper}>
      <ul className={styles.barList}>
        <li className={cn1}>
          <span className={styles.barOption}>Choose option</span>
        </li>
        <li className={cn2}>
          <span className={styles.barOption}>Personal details</span>
        </li>
        <li className={cn3}>
          <span className={styles.barOption}>More info</span>
        </li>
      </ul>
    </div>
  );
};

export default ProgressBar;
