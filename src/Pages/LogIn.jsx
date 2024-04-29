import { useDispatch } from "react-redux";
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
    form.reset()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="text" name="email" />
      </label>
      <br />
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogIn;
