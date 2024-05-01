const Contact = ({ contact, handleDelete }) => {
  return (
    <li key={contact.id}>
      <span style={{ marginRight: "10px" }}>{contact.name}</span>
      <span>{contact.number}</span>
      <span>
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </span>
    </li>
  );
};

export default Contact;
