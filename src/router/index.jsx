import { createBrowserRouter } from "react-router-dom";
import Admin from "../admin/Admin";
import path from "./path";
import Layout from "../layout/Layout";
import Login from "../login/Login";
import Register from "../login/Register";
import Dienthoai from "../components/Dienthoai";

const router = createBrowserRouter([
  {
    path: path.home,
    element: <Layout />,
  },
  {
    path: path.admin,
    element: <Admin />,
  },
  {
    path: path.edit,
    element: <Admin />,
  },
  {
    path: path.login,
    element: <Login />,
  },
  {
    path: path.register,
    element: <Register />,
  },
  {
    path: path.smartPhone,
    element: <Dienthoai/>
  },
]);
export default router;
