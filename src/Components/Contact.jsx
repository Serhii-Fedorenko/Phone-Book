import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));
  return (
    <li>
      <span style={{ marginRight: "10px" }}>{contact.name}</span>
      <span>{contact.number}</span>
      <span>
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </span>
    </li>
  );
};

export default Contact;
