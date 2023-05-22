import AddPetForm from 'modules/AddPetForm/AddPetForm';
import styles from './AddPetPage.module.css';

const AddPetPage = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <AddPetForm />
      </div>
    </div>
  );
};
export default AddPetPage;
