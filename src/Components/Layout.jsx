import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useAuth } from "../hooks/useAuth";
import { Container } from "@mui/system";
import { AppBar, Grid, Button } from "@mui/material";

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <AppBar sx={{ p: "5px" }}>
        <Grid
          component="nav"
          container
          justifyContent="space-around"
          alignItems="center"
        >
          <Button component={NavLink} to="/" color="white">
            Home
          </Button>
          {isLoggedIn && (
            <>
              <Button component={NavLink} to="/contacts" color="white">
                Contacts
              </Button>
              <UserMenu />
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink to="/logIn">Log In</NavLink>
              <NavLink to="/register">Sign In</NavLink>
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
