import { useDispatch } from "react-redux";
import RegisterForm from "../Components/RegisterForm";
import { register } from "../redux/auth/operations";

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return <RegisterForm handleSubmit={handleSubmit} />;
};

export default Register;
