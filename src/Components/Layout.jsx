import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useAuth } from "../hooks/useAuth";
import { Container } from "@mui/system";
import { AppBar, Grid, Button, Typography } from "@mui/material";

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <AppBar sx={{ p: "10px" }}>
        <Grid
          component="nav"
          container
          justifyContent="space-around"
          alignItems="center"
        >
          <Button component={NavLink} to="/" color="white">
            <Typography fontSize={'3vmin'}>Home</Typography>
          </Button>
          {isLoggedIn && (
            <>
              <Button component={NavLink} to="/contacts" color="white">
                <Typography fontSize={'3vmin'}>Contacts</Typography>
              </Button>
              <UserMenu />
            </>
          )}
          {!isLoggedIn && (
            <>
              <Button component={NavLink} to="/logIn" color="white">
                <Typography fontSize={'3vmin'}>Log In</Typography>
              </Button>
              <Button component={NavLink} to="/register" color="white">
                <Typography fontSize={'3vmin'}>Sign In</Typography>
              </Button>
            </>
          )}
        </Grid>
      </AppBar>
      <Container sx={{ mt: "80px" }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </Container>
  );
};

export default Layout;
