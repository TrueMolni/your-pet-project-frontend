import { InputForm } from 'modules/Input';
import Button from 'shared/components/Button/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import scss from './AuthForm.module.scss';
import { ErrorMessage, Formik, Form } from 'formik';
import { user } from 'services';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const initialValues = {
  email: '',
  password: '',
};

const LoginForm = props => {
  const [isError, setIsError] = useState(null);
  const [passwordShow, setPasswordShow] = useState(false);
  const handleSubmit = async (formData, { resetForm }) => {
    console.log('REGISTER FORM', formData);
    // const { error } = await login(formData);
    // if (error) {
    //   setIsError({
    //     message: error.data.message,
    //     additionalInfo: error.data.additionalInfo
    //   });
    resetForm();
    // } else {
    //   navigate('/user');
    // }
  };

  const togglePassword = () => setPasswordShow(prevState => !prevState);

  return (
    <div className={scss.container}>
      <Formik
        validationSchema={user.loginValidationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={scss.form}>
          <h2 className={scss.title}>{props.title}</h2>
          <div className={scss.input__wrapper}>
            <InputForm
              autofocus="autofocus"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
            <ErrorMessage name="email" component="p" className={scss.error} />
          </div>
          <div className={scss.input__wrapper_last}>
            <InputForm
              name="password"
              type={passwordShow ? 'text' : 'password'}
              placeholder="Password"
              autoComplete="off"
            />
            <span
              id="visibilityBtn"
              className={scss.IconPassword}
              onClick={togglePassword}
            >
              {passwordShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
            <ErrorMessage
              name="password"
              component="p"
              className={scss.error__password}
            />
          </div>

          <Button
            type="submit"
            className={scss.button__auth}
            buttonName={'Login'}
          ></Button>

          {isError && <p className={scss.error__login}>{isError.message}</p>}
          {isError && (
            <p className={scss.error__login}>{isError.additionalInfo}</p>
          )}

          <p className={scss.redirect__auth}>
            {'Don`t have an account?'}
            <Link to="/register" className={scss.redirect_link__auth}>
              {'Register'}
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
