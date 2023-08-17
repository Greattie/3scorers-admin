import Overview from "../pages/Overview";
import Users from "../pages/Users";
import Logout from "../pages/Logout";
import Admin from "../pages/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/overview" element={<Overview />} />
      <Route path="/users" element={<Users />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/admin" element={<Admin />} />
      {/* <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};

export default AppRoutes;
