import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import { TextField, Grid, Button } from "@mui/material";

const RegisterForm = () => {
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

  return (
    <Grid
      component="form"
      container
      justifyContent="space-around"
      alignItems="center"
      direction="column"
      onSubmit={handleSubmit}
    >
      <TextField
        type="text"
        name="name"
        label="Name"
        variant="outlined"
        margin="normal"
      />
      <TextField
        type="text"
        name="email"
        label="Email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ margin: 2 }}>
        Log In
      </Button>
    </Grid>
  );
};

export default RegisterForm;
