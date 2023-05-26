import { InputForm } from 'shared/components/Input';
import Button from 'shared/components/Button/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import css from './AuthForm.module.css';
import { ErrorMessage, Formik, Form } from 'formik';
import { user } from 'services';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
const initialValues = {
  email: '',
  password: '',
};

const LoginForm = props => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(null);
  const [passwordShow, setPasswordShow] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    dispatch(login(values));
    const { error } = await login(values);
    if (error) {
      setIsError({
        message: error.data.message,
        additionalInfo: error.data.additionalInfo,
      });
      resetForm();
    } else {
      navigate('/notices');
    }
  };

  const togglePassword = () => setPasswordShow(prevState => !prevState);

  return (
    <>
      <div className={css.container}>
        <Formik
          validationSchema={user.loginValidationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <h2 className={css.title}>{props.title}</h2>
            <div className={css.input__wrapper}>
              <InputForm
                autofocus="autofocus"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
              />
              <ErrorMessage name="email" component="p" className={css.error} />
            </div>
            <div className={css.input__wrapper_last}>
              <InputForm
                name="password"
                type={passwordShow ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="off"
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

            <Button
              type="submit"
              className={css.button__auth}
              buttonName={'Login'}
            ></Button>

            {isError && <p className={css.error__login}>{isError.message}</p>}
            {isError && (
              <p className={css.error__login}>{isError.additionalInfo}</p>
            )}

            <p className={css.redirect__auth}>
              {'Don`t have an account?'}
              <Link to="/register" className={css.redirect_link__auth}>
                {'Register'}
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default LoginForm;
