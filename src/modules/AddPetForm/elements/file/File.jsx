import { Field, ErrorMessage } from 'formik';
import styles from './File.module.css';
import { useState } from 'react';

const File = ({ label, name, style, ...props }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleFileChange = e => {
    const file = e.currentTarget.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setThumbnail(null);
    }
  };

  console.log(selectedFile);
  return (
    <div className={styles.fileWrapper}>
      <div className={styles.fileContainer + ' ' + style}>
        <p className={styles.capture + ' ' + style}>{label}</p>
        <label className={styles.labelFile} htmlFor={name} name={name}>
          {thumbnail ? (
            <img src={thumbnail} alt="Thumbnail" className={styles.thumbnail} />
          ) : null}
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <Field
          onChange={handleFileChange}
          className={styles.input}
          id={name}
          name={name}
          {...props}
        />
        <ErrorMessage name={name} component="p" />
      </div>
    </div>
  );
};

export default File;
