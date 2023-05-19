import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ErrorMessage, Form, Formik } from 'formik';
import { InputForm } from 'shared/components/Input';
import css from './AuthForm.module.css';
import Button from 'shared/components/Button';
import { user } from 'services';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux'
import { signup } from 'redux/auth/auth-operations';
import { isUserLogin, isLoading } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom'
import Loader from 'shared/components/Loader/Loader';


export const RegisterForm = props => {
  
  const ifLoading = useSelector(isLoading)
  const isLogin = useSelector(isUserLogin)
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const dispatch = useDispatch()
  const handleSignUp = (values, { resetForm }) => {
    
    dispatch(signup(values));
    // console.log('REGISTER FORM', values);
    resetForm();
  };

  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const togglePasswordConfirm = () =>
    setPasswordConfirm(prevState => !prevState);

  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();
  const confirmPasswordInputId = shortid.generate();
  //   const { email, password, confirmPassword } = state;
  if (isLogin) {
    
    return <Navigate to="/main" />;
  }
  if (ifLoading) {
    return <Loader/>
  }
  return (
    <div className={css.container}>
      <Formik
        onSubmit={handleSignUp}
        validationSchema={user.stepOneValidationSchema}
        initialValues={{ email: '', password: '', confirmPassword: '' }}
      >
        <Form className={css.form}>
          <h2 className={css.title}>{props.title}</h2>
          <div className={css.input__wrapper}>
            <InputForm
              //   htmlFor={emailInputId}

              autofocus="autofocus"
              name="email"
              type="email"
              id={emailInputId}
              placeholder="Email"
            />
            <ErrorMessage name="email" component="p" className={css.error} />
          </div>
          <div className={css.input__wrapper}>
            <InputForm
              //   htmlFor={passwordInputId}
              name="password"
              type={passwordShow ? 'text' : 'password'}
              id={passwordInputId}
              placeholder="Password"
            />
            <span
              id="visibilityBtn"
              className={css.IconPassword}
              onClick={togglePassword}
            >
              {passwordShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
            <ErrorMessage
              name="password"
              component="p"
              className={css.error__password}
            />
          </div>
          <div className={css.input__wrapper_last}>
            <InputForm
              name="confirmPassword"
              type={passwordConfirm ? 'text' : 'password'}
              placeholder="Confirm Password"
              id={confirmPasswordInputId}
            />
            <span
              id="visibilityBtn"
              className={css.IconPassword}
              onClick={togglePasswordConfirm}
            >
              {passwordConfirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
            <ErrorMessage
              name="confirmPassword"
              component="p"
              className={css.error__password}
            />
          </div>
          <div className={css.button__container}>
            <Button
              type="submit"
              className={css.button__auth}
              buttonName={'Register'}
            ></Button>
          </div>
          <p className={css.redirect__auth}>
            {'Already have an account?'}
            <Link to="/login" className={css.redirect_link__auth}>
              {'Login'}
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
