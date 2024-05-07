import { useDispatch } from "react-redux";
import { setFilter } from "../redux/contacts/slice";
import { Input } from "@mui/material";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Input
      placeholder="Find contact"
      sx={{marginLeft: '10px'}}
      type="text"
      name="filter"
      onChange={handleFilterChange}
    />
  );
};

export default SearchForm;
