import { createBrowserRouter, Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { Employees, loader as employeesLoader } from "./pages/Employees";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
      { path: "employees", loader: employeesLoader, element: <Employees /> },
      { path: "about", element: <About /> },
    ],
  },
]);
