import { lazy } from "react";
const RegisterForm = lazy(()=>import('../Components/RegisterForm'))

const Register = () => {
  return <RegisterForm />;
};

export default Register;
