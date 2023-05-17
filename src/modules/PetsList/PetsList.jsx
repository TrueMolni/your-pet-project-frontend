
import PetItem from '../PetItem/PetItem'
import styles from './pets-list.module.css'

const PetsList = () => {
  return (
    <ul className={styles.petsListWrapper}>
      <li className={styles.petsItemWrapper}>
        <PetItem />
      </li>
    </ul>
  );
};

export default PetsList;
