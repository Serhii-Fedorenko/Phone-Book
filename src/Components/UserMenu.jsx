import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";

const UserMenu = () => {
    const name = useSelector(state => state.auth.user.name)
    const dispatch = useDispatch()
  return (
    <div>
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};

export default UserMenu;
