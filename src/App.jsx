import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Components/Layout";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import { refreshUser } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
