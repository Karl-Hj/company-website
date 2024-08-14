import { createBrowserRouter, Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { Employees, loader as employeesLoader } from "./pages/Employees";
import { About } from "./pages/About";
import { Employee, loader as employeeLoader } from "./pages/Employee";
import { EditComment } from "./pages/EditComment";
import {
  AddComment,
  loader as addLoader,
  action as addAction,
} from "./pages/AddComment";

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
              {
                path: "edit",
                element: <EditComment />,
              },
              {
                path: "add",
                loader: addLoader,
                action: addAction,
                element: <AddComment />,
              },
            ],
          },
        ],
      },
      { path: "about", element: <About /> },
    ],
  },
]);
