import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useAuth } from "../hooks/useAuth";
import { Container } from "@mui/system";
import { AppBar, Grid } from "@mui/material";

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <AppBar>
        <Grid
          component="nav"
          container
          justifyContent="space-around"
          alignItems="center"
        >
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
              <UserMenu />
            </>
          )}
          {!isLoggedIn && (
            <div>
              <NavLink to="/logIn">Log In</NavLink>
              <NavLink to="/register">Sign In</NavLink>
            </div>
          )}
        </Grid>
      </AppBar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
