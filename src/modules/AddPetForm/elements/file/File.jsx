import { Field, ErrorMessage } from 'formik';
import styles from './File.module.css';
// import addIcon from '../../../../images/icons/add-icon.svg';

const Input = ({ label, name, ...props }) => {
  return (
    <div className={styles.fileWrapper}>
      <div className={styles.fileContainer}>
        <p className={styles.capture}>Add photo</p>
        <label className={styles.labelFile} htmlFor={name} name={name}></label>
      </div>
      <div className={styles.inputWrapper}>
        <Field className={styles.input} id={name} name={name} {...props} />
        <ErrorMessage name={name} component="p" />
      </div>
    </div>
  );
};

export default Input;
