import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ErrorMessage, Form, Formik } from 'formik';
import { InputForm } from 'modules/Input';
import scss from './AuthForm.module.scss';
import Button from 'shared/components/Button';
import { user } from 'services';
import shortid from 'shortid';
export const RegisterForm = props => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);

  const handleSignUp = (values, { resetForm }) => {
    console.log('REGISTER FORM', values);
    // dispatch(signup(values));
    resetForm();
  };

  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const togglePasswordConfirm = () =>
    setPasswordConfirm(prevState => !prevState);

  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();
  const confirmPasswordInputId = shortid.generate();
  //   const { email, password, confirmPassword } = state;

  return (
    <div className={scss.container}>
      <Formik
        onSubmit={handleSignUp}
        validationSchema={user.stepOneValidationSchema}
        initialValues={{ email: '', password: '', confirmPassword: '' }}
      >
        <Form className={scss.form}>
          <h2 className={scss.title}>{props.title}</h2>
          <div className={scss.input__wrapper}>
            <InputForm
              //   htmlFor={emailInputId}

              autofocus="autofocus"
              name="email"
              type="email"
              id={emailInputId}
              placeholder="Email"
            />
            <ErrorMessage name="email" component="p" className={scss.error} />
          </div>
          <div className={scss.input__wrapper}>
            <InputForm
              //   htmlFor={passwordInputId}
              name="password"
              type={passwordShow ? 'text' : 'password'}
              id={passwordInputId}
              placeholder="Password"
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
          <div className={scss.input__wrapper_last}>
            <InputForm
              name="confirmPassword"
              type={passwordConfirm ? 'text' : 'password'}
              placeholder="Confirm Password"
              id={confirmPasswordInputId}
            />
            <span
              id="visibilityBtn"
              className={scss.IconPassword}
              onClick={togglePasswordConfirm}
            >
              {passwordConfirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
            <ErrorMessage
              name="confirmPassword"
              component="p"
              className={scss.error__password}
            />
          </div>
          <div className={scss.button__container}>
            <Button
              type="submit"
              className={scss.button__auth}
              buttonName={'Register'}
            ></Button>
          </div>
          <p className={scss.redirect__auth}>
            {'Already have an account?'}
            <Link to="/login" className={scss.redirect_link__auth}>
              {'Login'}
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
