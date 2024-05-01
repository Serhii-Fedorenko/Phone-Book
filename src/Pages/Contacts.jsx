import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <ul>
        {contacts &&
          contacts.map((item) => (
            <li key={item.id}>
              <span style={{ marginRight: "10px" }}>{item.name}</span>
              <span>{item.number}</span>
              <span>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Contacts;
