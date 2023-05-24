import { Field, ErrorMessage } from 'formik';
import styles from './Textarea.module.css';

const Textarea = ({ label, name, style, ...props }) => {
  return (
    <div className={styles.textAreaWrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field
        className={styles.input + ' ' + style}
        as="textarea"
        id={name}
        name={name}
        {...props}
      />
      <ErrorMessage name={name} component="p" />
    </div>
  );
};

export default Textarea;
