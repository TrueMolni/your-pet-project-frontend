import AddPetFormControl from 'modules/AddPetForm/elements/AddPetFormControl';
import ButtonNext from '../../elements/buttons/ButtonNext';
import ButtonBack from '../../elements/buttons/ButtonBack';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './Sell.module.css';
import ProgressBar from 'modules/AddPetForm/elements/progressBar/ProgressBar';

import sprite from '../../../../images/icons/sprite.svg';

const validationStepOneSchema = Yup.object({
  name: Yup.string()
    .required('The "Name" field is required')
    .min(2, 'Please enter a value between 2 and 16 characters in length')
    .max(16, 'Please enter a value between 2 and 16 characters in length')
    .matches(
      /^[A-Za-z]+$/,
      'Please enter only letters (no numbers or special characters) in this field'
    ),
  date: Yup.string()
    .required('The "Date of birth" field is required')
    .matches(
      /^(\d{2})\.(\d{2})\.(\d{4})$/,
      'Please enter the date in the format DD.MM.YYYY (for example, 22.10.2022)'
    )
    .test('valid-date', 'The entered date is invalid', value => {
      if (!value) return true; // Якщо значення пусте, не виконуємо перевірку
      const [day, month, year] = value.split('.');
      const isValidDate = !isNaN(Date.parse(`${year}-${month}-${day}`));
      return isValidDate;
    }),
  breed: Yup.string()
    .required('The "Breed" field is required')
    .min(2, 'Please enter a value between 2 and 16 characters in length')
    .max(16, 'Please enter a value between 2 and 16 characters in length')
    .matches(
      /^[A-Za-z]+$/,
      'Please enter only letters (no numbers or special characters) in this field'
    ),
});

const validationStepTwoSchema = Yup.object({
  sex: Yup.string()
    .required('The "Sex" field is required')
    .oneOf(
      ['male', 'female'],
      'Please choose one of the valid types: male or female'
    ),
  file: Yup.mixed()
    .required('The "Photo" field is required')
    .test('file-size', 'Maximum file size: 3 MB', value => {
      if (!value) return true; // Якщо значення пусте, не виконуємо перевірку
      const maxSizeInBytes = 3 * 1024 * 1024; // 3 МБ в байтах
      return value.size <= maxSizeInBytes;
    }),
  location: Yup.string()
    .required('The "Location" field is required')
    .matches(
      /^[A-Za-z\s]+$/,
      'Please enter a string in the format "City". For example: Brovary, Kyiv, Akhtyrka, Sumy'
    ),
  price: Yup.number()
    .typeError('Please enter a numerical value')
    .required('The "Price" field is required')
    .positive('Please enter a number greater than 0'),

  comments: Yup.string()
    .notRequired()
    .min(8, 'Please enter a value between 8 and 120 characters in length')
    .max(120, 'Please enter a value between 8 and 120 characters in length'),
});

const sex = [
  { value: 'female', key: 'female', icon: sprite + '#female' },
  { value: 'male', key: 'male', icon: sprite + '#male' },
];

export const Sell = props => {
  const handleSubmit = values => {
    props.next(values);
  };

  return (
    <div className={styles.bgForm}>
      <h1 className={styles.header}>Add pet for sale</h1>
      <ProgressBar step={2} />
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={validationStepOneSchema}
      >
        {({ values }) => (
          <Form>
            <AddPetFormControl
              control="input"
              label="Title of add"
              name="title"
              placeholder="Title of add"
            />
            <AddPetFormControl
              control="input"
              label="Pet's name"
              name="name"
              placeholder="Type name pet"
            />

            <AddPetFormControl
              control="input"
              label="Date of birth"
              name="date"
              placeholder="Type date of birth"
            />

            <AddPetFormControl
              control="input"
              label="Breed"
              name="breed"
              placeholder="Type breed"
            />

            <div className={styles.buttonContainer}>
              <ButtonNext
                type="submit"
                name="Next"
                icon={sprite + '#paw-white'}
              ></ButtonNext>

              <ButtonBack
                type="button"
                name="Back"
                icon={sprite + '#arrow-left'}
                onClick={() => props.prev(values)}
              ></ButtonBack>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const Sell2 = props => {
  const handleSubmit = values => {
    props.next(values, true);
  };
  return (
    <div className={styles.bgForm + ' ' + styles.bgFormMidle}>
      <h1 className={styles.header}>Add pet for sale</h1>
      <ProgressBar step={3} />
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={validationStepTwoSchema}
      >
        {({ values }) => (
          <Form>
            <div className={styles.formContainer}>
              <div className={styles.firstChild}>
                <AddPetFormControl
                  control="sex"
                  label="The sex"
                  name="sex"
                  options={sex}
                />
                <AddPetFormControl
                  style={styles.addPhoto}
                  control="file"
                  label="Load the pet`s image"
                  name="file"
                  type="file"
                />
              </div>

              <div className={styles.secondChild}>
                <AddPetFormControl
                  control="input"
                  label="Location"
                  name="location"
                  placeholder="Type location"
                />
                <AddPetFormControl
                  control="input"
                  label="Price"
                  name="price"
                  placeholder="Type price"
                />
                <AddPetFormControl
                  style={styles.comments}
                  control="textarea"
                  label="Comments"
                  name="comments"
                  placeholder="Type comments"
                />
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <ButtonNext
                type="submit"
                name="Done"
                icon={sprite + '#paw-white'}
              ></ButtonNext>
              <ButtonBack
                type="button"
                name="Back"
                icon={sprite + '#arrow-left'}
                onClick={() => props.prev(values)}
              ></ButtonBack>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
