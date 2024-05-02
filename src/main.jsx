import ReactDOM from "react-dom/client";
import React from "react";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login.jsx";
import DataPegawai from "./pages/Dashboard/DataPegawai.jsx";
import DataOwner from "./pages/Dashboard/DataOwner.jsx";
import Employee from "./pages/Dashboard/Employee.jsx";
import LayoutPeg from "./components/LayoutPeg.jsx";
import LayoutOwn from "./components/LayoutOwn.jsx";
import LayoutEmp from "./components/LayoutEmp.jsx";
import Verify from "./pages/verify.jsx";
import DashboardPegawai from "./pages/Dashboard/DashboardPegawai.jsx";
import Struk from "./pages/Dashboard/FormOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/dashboard",
    element: <LayoutPeg/>,
    children: [
      {
        index: true,
        element: <DataPegawai/>,
      },
      {
        path: "pegawai",
        element: <DashboardPegawai/>,
      },
      {
        path: "struk",
        element: <Struk/>,
      },
    ],
  },
  {
    path: "/dashboardowner",
    element: <LayoutOwn />,
    children: [
      {
        index: true,
        element: <DataOwner />,
      },
    ],
  },
  {
    path: "/employee",
    element: <LayoutEmp />,
    children: [
      {
        index: true,
        element: <Employee />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
