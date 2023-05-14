import { RegisterForm } from "components/AuthForm/RegisterForm";
const RegisterPage = () => {
  return (
    <div>
      <h1>This is Register page</h1>
      <p>Let`s create your accaunt</p>
      <RegisterForm title={("Register")} />
    </div>
  );
};
export default RegisterPage;
