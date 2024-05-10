import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";
import { TextField, Grid, Button } from "@mui/material";

const LoginForm = () => {
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
      <Button type="submit" variant="contained" sx={{margin: 2}}>
        Log In
      </Button>
    </Grid>
  );
};

export default LoginForm;
