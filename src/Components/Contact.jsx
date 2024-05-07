import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

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
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </TableCell>
    </TableRow>
  );
};

export default Contact;
