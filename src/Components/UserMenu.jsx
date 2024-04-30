import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { logOut } from "../redux/auth/operations";

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
