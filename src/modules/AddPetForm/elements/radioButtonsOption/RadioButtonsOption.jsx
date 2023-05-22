import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './RadioButtonsOption.module.css';

const RadioButtons = ({ label, name, options, ...props }) => {
  return (
    <div className={styles.radioWrapper}>
      <label htmlFor={name} name={name}>
        {label}
      </label>
      <Field name={name} {...props}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
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

                <label className={styles.buttonLabel} htmlFor={option.value}>
                  {option.value}
                </label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component="p" />
    </div>
  );
};

export default RadioButtons;
