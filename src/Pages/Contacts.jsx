import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Components/Contact";
import ContactForm from "../Components/ContactForm";
import Modal from "../Components/Modal/Modal";
import SearchForm from "../Components/SearchForm";
import { fetchContacts } from "../redux/contacts/operations";
import { selectContacts, selectFilter } from "../redux/contacts/selectors";
import { selectIsModalOpen } from "../redux/modal/selectors";
import { toggleModal } from "../redux/modal/slice";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isModalOpen = useSelector(selectIsModalOpen);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const openModal = () => {
    dispatch(toggleModal());
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
      <SearchForm />
      {isModalOpen && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
      <ul>
        {contacts &&
          visibleContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
      </ul>
    </div>
  );
};

export default Contacts;
