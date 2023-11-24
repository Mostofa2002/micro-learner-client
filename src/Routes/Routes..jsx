import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "./../pages/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
