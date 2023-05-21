import styles from './ButtonBack.module.css';

const ButtonBack = ({ name, icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {
        <svg className={styles.icon}>
          <use href={icon}></use>
        </svg>
      }
      {name}
    </button>
  );
};

export default ButtonBack;
