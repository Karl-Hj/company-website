import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Index } from "./pages/Index.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [{ index: true, element: <Index /> }],
  },
]);
