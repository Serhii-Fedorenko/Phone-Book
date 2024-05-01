const RegisterForm = ({ handleSubmit }) => {
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

export default RegisterForm;
