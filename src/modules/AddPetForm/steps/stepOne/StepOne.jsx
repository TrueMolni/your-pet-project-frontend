import AddPetFormControl from '../../elements/AddPetFormControl';
import ButtonNext from '../../elements/buttons/ButtonNext';
import ButtonBack from '../../elements/buttons/ButtonBack';
import ProgressBar from 'modules/AddPetForm/elements/progressBar/ProgressBar';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import sprite from '../../../../images/icons/sprite.svg';
import styles from './StepOne.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const category = [
  { value: 'your-pet', key: 'yourPet', show: 'your pet' },
  { value: 'sell', key: 'sell', show: 'sell' },
  { value: 'lost-found', key: 'lostFound', show: 'lost/found' },
  { value: 'for-free', key: 'inGoodHands', show: 'in good hands' },
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

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  return (
    <div className={styles.bgForm}>
      <h1 className={styles.header}>Add pet</h1>
      <ProgressBar step={1} />
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
                onClick={() => navigate(from)}
              ></ButtonBack>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
