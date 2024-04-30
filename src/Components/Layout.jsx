import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useAuth } from "../hooks/useAuth";

const Layout = () => {
  const {isLoggedIn} = useAuth()

  return (
    <header>
      <nav style={{display: 'flex'}}>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && (
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </div>
        )}
        {!isLoggedIn && (
          <>
            <NavLink to="/logIn">Log In</NavLink>
            <NavLink to="/register">Sign In</NavLink>
          </>
        )}
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </header>
  );
};

export default Layout;
