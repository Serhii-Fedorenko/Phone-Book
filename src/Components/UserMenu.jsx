import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { logOut } from "../redux/auth/operations";
import { Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      sx={{ width: "fit-content" }}
    >
      <p>Welcome, {user.name}</p>
      <AccountCircleIcon />
      <button type="button" onClick={() => dispatch(logOut())} style={{}}>
        Log Out
      </button>
    </Grid>
  );
};

export default UserMenu;
