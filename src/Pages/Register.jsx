import { useDispatch } from "react-redux";
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
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Register;
