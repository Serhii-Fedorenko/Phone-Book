import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { logOut } from "../redux/auth/operations";
import { Grid, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
      <Typography fontSize={'3vmin'} mr={1}>Welcome, {user.name}</Typography>
      <AccountCircleIcon fontSize="large"/>
      <Button
        variant="contained"
        color="secondary"
        sx={{ml: 1}}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Grid>
  );
};

export default UserMenu;
