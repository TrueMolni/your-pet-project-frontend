import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.imgContainer}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>
            Take good care of your small pets
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
