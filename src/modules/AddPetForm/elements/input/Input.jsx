import { Field, ErrorMessage } from 'formik';
import styles from './Input.module.css';

const Input = ({ label, name, ...props }) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name} name={name}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <Field className={styles.input} id={name} name={name} {...props} />
        <ErrorMessage name={name} component="p" />
      </div>
    </div>
  );
};

export default Input;
