import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './RadioButtonsSex.module.css';

const RadioButtonsSex = ({ label, name, options, ...props }) => {
  return (
    <div className={styles.radioWrapper}>
      <label className={styles.commonLabel} htmlFor={name} name={name}>
        {label}
      </label>
      <div className={styles.optionsWrapper}>
        <Field name={name} {...props}>
          {({ field }) => {
            return options.map(option => {
              return (
                <React.Fragment key={option.key}>
                  <div>
                    <input
                      className={styles.input}
                      type="radio"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={
                        field.value === option.value ||
                        (!field.value && option === options[0])
                      }
                    />

                    <label
                      className={styles.buttonLabel}
                      htmlFor={option.value}
                    >
                      <svg
                        className={
                          option.key === 'female'
                            ? styles.icon
                            : styles.icon + ' ' + styles.male
                        }
                      >
                        <use href={option.icon}></use>
                      </svg>
                      {option.value}
                    </label>
                  </div>
                </React.Fragment>
              );
            });
          }}
        </Field>
      </div>
      <div className={styles.inputWrapper}>
        <ErrorMessage name={name} component="p" />
      </div>
    </div>
  );
};

export default RadioButtonsSex;
