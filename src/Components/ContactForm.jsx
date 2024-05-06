import { useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch()

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
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Phone
        <input type="tel" name="tel" />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
