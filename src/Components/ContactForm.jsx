import { useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/operations";
import { TextField, Grid, Button } from "@mui/material";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.tel.value,
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
        type="number"
        name="tel"
        label="Phone number"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ margin: 2 }}>
        Add contact
      </Button>
    </Grid>
  );
};

export default ContactForm;
