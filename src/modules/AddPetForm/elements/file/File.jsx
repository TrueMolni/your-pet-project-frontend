import { ErrorMessage, useFormikContext } from 'formik';
import styles from './File.module.css';
import { useState } from 'react';

const File = ({ label, name, type, style, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleFileChange = e => {
    const file = e.currentTarget.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setThumbnail(reader.result);
        setFieldValue(name, file);
      };
      reader.readAsDataURL(file);
    } else {
      setThumbnail(null);
    }
  };
  if (selectedFile) {
    console.log(selectedFile);
  }

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
        <input
          onChange={handleFileChange}
          className={styles.input}
          name={name}
          id={name}
          type={type}
          {...props}
        />
        <ErrorMessage name={name} component="p" />
      </div>
    </div>
  );
};

export default File;
