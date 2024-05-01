import { useDispatch } from "react-redux";
import LoginForm from "../Components/LoginForm";
import { logIn } from "../redux/auth/operations";

const LogIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return <LoginForm handleSubmit={handleSubmit} />;
};

export default LogIn;
