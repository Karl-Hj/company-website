import { createBrowserRouter, Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { Employees, loader as employeesLoader } from "./pages/Employees";
import { About } from "./pages/About";
import { Employee, loader as employeeLoader } from "./pages/Employee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
      {
        path: "employees",
        children: [
          {
            index: true,
            loader: employeesLoader,
            element: <Employees />,
          },
          {
            path: ":employeeId",
            children: [
              {
                index: true,
                loader: employeeLoader,
                element: <Employee />,
              },
            ],
          },
        ],
      },
      { path: "about", element: <About /> },
    ],
  },
]);
