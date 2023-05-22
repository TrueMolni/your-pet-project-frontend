import AddPetFormControl from '../../elements/AddPetFormControl';
import ButtonNext from '../../elements/buttons/ButtonNext';
import ButtonBack from '../../elements/buttons/ButtonBack';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import sprite from '../../../../images/icons/sprite.svg';
import styles from './StepOne.module.css';

const category = [
  { value: 'your pet', key: 'yourPet' },
  { value: 'sell', key: 'sell' },
  { value: 'lost/found', key: 'lostFound' },
  { value: 'in good hands', key: 'inGoodHands' },
];

const validationSchema = Yup.object({
  category: Yup.string().required(
    'Choose a category in which you want to add an advertisement'
  ),
});

export const StepOne = props => {
  const handleSubmit = values => {
    props.next(values);
  };

  return (
    <>
      <h1 className={styles.header}>Add pet</h1>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <AddPetFormControl
              control="radio"
              label=""
              name="category"
              options={category}
            />

            <div className={styles.buttonContainer}>
              <ButtonNext
                type="submit"
                name="Next"
                icon={sprite + '#paw-white'}
              ></ButtonNext>
              <ButtonBack
                type="button"
                name="Cancel"
                icon={sprite + '#arrow-left'}
              ></ButtonBack>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
