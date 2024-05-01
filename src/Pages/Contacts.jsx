import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Components/Contact";
import ContactForm from "../Components/ContactForm";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../redux/contacts/operations";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

  const handleDelete = (id) => dispatch(deleteContact(id));

  return (
    <div>
      <h2>Contacts Page</h2>
      <ContactForm handleSubmit={handleSubmit} />
      <ul>
        {contacts &&
          contacts.map((contact) => (
            <Contact contact={contact} handleDelete={handleDelete} />
          ))}
      </ul>
    </div>
  );
};

export default Contacts;
