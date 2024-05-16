import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "./Components/Layout";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks/useAuth";
import RestrictedRoute from "./Components/RestrictedRoute";
import PrivateRoute from "./Components/PrivateRoute";
import { lazy } from "react";
const Register = lazy(()=>import("./Pages/Register"))
const LogIn = lazy(()=>import('./Pages/LogIn'))
const Home = lazy(()=>import('./Pages/Home'))
const Contacts = lazy(()=>import('./Pages/Contacts'))



function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/logIn" />
          }
        />
        <Route
          path="logIn"
          element={
            <RestrictedRoute component={<LogIn />} redirectTo="/contacts" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
