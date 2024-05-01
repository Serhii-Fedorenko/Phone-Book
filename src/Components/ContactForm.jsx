const ContactForm = ({handleSubmit}) => {
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
