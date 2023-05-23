import styles from './ButtonNext.module.css';

export const ButtonNext = ({ name, icon, ...props }) => {
  return (
    <button className={styles.button}>
      {name}
      {
        <svg className={styles.icon}>
          <use href={icon}></use>
        </svg>
      }
    </button>
  );
};

export default ButtonNext;
