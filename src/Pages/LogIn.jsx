import { lazy } from "react";
const LoginForm = lazy(()=>import('../Components/LoginForm'))

const LogIn = () => {
  return <LoginForm />;
};

export default LogIn;
