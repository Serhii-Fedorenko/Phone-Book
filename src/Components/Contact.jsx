import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import { TableRow, TableCell, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Contact = ({ contact, openEditModal }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
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
        <Button variant="text" onClick={() => openEditModal(contact.id)}>
          <ModeEditIcon color="secondary" />
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button variant="text" onClick={() => handleDelete(contact.id)}>
          <DeleteForeverIcon color="secondary" />
        </Button>
      </TableCell>
    </StyledTableRow>
  );
};

export default Contact;
