import styles from './notFound.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.box}>
      <p className={styles.text}>Ooops!This page not found :(</p>
      <div className={styles.boxImages}>
        <p className={styles.numberLeft}>4</p>
        <div className={styles.image}></div>
        <p className={styles.numberRight}>4</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
