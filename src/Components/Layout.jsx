import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
        <NavLink to='/logIn'>Log In</NavLink>
        <NavLink to='/register'>Sign In</NavLink>
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </header>
  );
};

export default Layout;
