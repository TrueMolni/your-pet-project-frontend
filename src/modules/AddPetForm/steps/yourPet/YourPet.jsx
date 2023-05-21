import AddPetFormControl from 'modules/AddPetForm/elements/AddPetFormControl';
import ButtonNext from '../../elements/buttons/ButtonNext';
import ButtonBack from '../../elements/buttons/ButtonBack';
import sprite from '../../../../images/icons/sprite.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './YourPet.module.css';

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
  file: Yup.mixed()
    .required('The "File" field is required')
    .test('file-size', 'Maximum file size: 3 MB', value => {
      if (!value) return true; // Якщо значення пусте, не виконуємо перевірку
      const maxSizeInBytes = 3 * 1024 * 1024; // 3 МБ в байтах
      return value.size <= maxSizeInBytes;
    }),
  comments: Yup.string()
    .notRequired()
    .min(8, 'Please enter a value between 8 and 120 characters in length')
    .max(120, 'Please enter a value between 8 and 120 characters in length'),
});

export const YourPet = props => {
  const handleSubmit = values => {
    props.next(values);
  };

  return (
    <>
      <h1 className={styles.header}>Add pet</h1>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={validationStepOneSchema}
      >
        {({ values }) => (
          <Form>
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
    </>
  );
};

export const YourPet2 = props => {
  const handleSubmit = values => {
    props.next(values, true);
  };
  return (
    <>
      <h1 className={styles.header}>Add pet</h1>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={validationStepTwoSchema}
      >
        {({ values }) => (
          <Form>
            <AddPetFormControl
              control="file"
              label="Add photo"
              name="file"
              type="file"
            />
            <AddPetFormControl
              control="textarea"
              label="Comments"
              name="comments"
              placeholder="Type comments"
            />
            <div className={styles.buttonContainerSecond}>
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
    </>
  );
};