import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "./../pages/Register/Register";
import TeachOnMicro from "./../pages/TeachOnMicro/TeachOnMicro";
import Private from "./../private/Private";
import DashBoard from "./../LayOut/DashBoard/DashBoard";
import TeacherRequest from "../pages/DashBoard/Teacher/TeacherRequest";
import Users from "./../pages/DashBoard/User/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "teach",
        element: (
          <Private>
            <TeachOnMicro />
          </Private>
        ),
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
  {
    path: "dashboard",
    element: (
      <Private>
        <DashBoard />
      </Private>
    ),
    children: [
      {
        path: "teacher",
        element: <TeacherRequest />,
      },
      {
        path: "user",
        element: <Users />,
      },
    ],
  },
]);
