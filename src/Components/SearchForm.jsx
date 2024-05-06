import { useDispatch } from "react-redux";
import { setFilter } from "../redux/contacts/slice";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  
  return (
    <label>
      Find contact
      <input type="text" name="filter" onChange={handleFilterChange} />
    </label>
  );
};

export default SearchForm;
