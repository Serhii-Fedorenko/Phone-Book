import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import { toggleEditModal } from "../redux/modal/slice";
import { TableRow, TableCell, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ContactEditForm from "./ContactEditForm";
import Modal from "./Modal/Modal";
import { selectIsEditModalOpen } from "../redux/modal/selectors";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const isEditModalOpen = useSelector(selectIsEditModalOpen);

  const handleDelete = (id) => dispatch(deleteContact(id));

  const openEditModal = () => {
    dispatch(toggleEditModal());
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <StyledTableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {contact.name}
      </TableCell>
      <TableCell align="right">{contact.number}</TableCell>
      <TableCell align="right">
        <Button variant="text" onClick={() => openEditModal()}>
          <ModeEditIcon color="secondary" />
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button variant="text" onClick={() => handleDelete(contact.id)}>
          <DeleteForeverIcon color="secondary" />
        </Button>
      </TableCell>
      {isEditModalOpen && (
        <Modal>
          <ContactEditForm contactId={contact.id}/>
        </Modal>
      )}
    </StyledTableRow>
  );
};

export default Contact;
