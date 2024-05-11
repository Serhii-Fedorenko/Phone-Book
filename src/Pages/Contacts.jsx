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
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Button,
} from "@mui/material";

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
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container justifyContent="center" alignItems="center" p={5}>
        <Button variant="outlined" type="button" onClick={() => openModal()}>
          Add contact
        </Button>
        <SearchForm />
      </Grid>
      {isModalOpen && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
      <TableContainer
        component={Paper}
        sx={{ width: "100%", ml: "auto", mr: "auto" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts &&
              visibleContacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Contacts;
