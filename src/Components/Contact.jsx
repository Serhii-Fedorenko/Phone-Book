import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import { TableRow, TableCell, Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {contact.name}
      </TableCell>
      <TableCell align="right">{contact.number}</TableCell>
      <TableCell align="right">
        <Button variant="text" onClick={() => handleDelete(contact.id)}>
          <DeleteForeverIcon color="secondary" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Contact;
