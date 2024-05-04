import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Components/Contact";
import ContactForm from "../Components/ContactForm";
import Modal from "../Components/Modal/Modal";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../redux/contacts/operations";
import { selectContacts, selectFilter } from "../redux/contacts/selectors";
import { setFilter } from "../redux/contacts/slice";
import { toggleModal } from "../redux/modal/slice";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const filter = useSelector(selectFilter);

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

  const openModal = () => {
    dispatch(toggleModal());
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = () => {
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };

  const visibleContacts = filteredContacts();

  return (
    <div>
      <h2>Contacts Page</h2>
      <button type="button" onClick={() => openModal()}>
        Add contact
      </button>
      <label>
        Find contact
        <input type="text" name="filter" onChange={handleFilterChange} />
      </label>
      {isModalOpen && (
        <Modal>
          <ContactForm handleSubmit={handleSubmit} />
        </Modal>
      )}
      <ul>
        {contacts &&
          visibleContacts.map((contact) => (
            <Contact contact={contact} handleDelete={handleDelete} />
          ))}
      </ul>
    </div>
  );
};

export default Contacts;
