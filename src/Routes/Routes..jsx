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
import Profile from "./../pages/DashBoard/Profile/Profile";
import AdminRoute from "./../private/AdminRoute";
import AddClass from "../pages/DashBoard/Teachers-Dashboard/AddClass";
import MyClass from "../pages/DashBoard/Teachers-Dashboard/MyClass";
import AllClasses from "../pages/DashBoard/AllClasses/AllClasses";
import TeacherRoute from "./../private/TeacherRoute";

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
        element: (
          <AdminRoute>
            <TeacherRequest />
          </AdminRoute>
        ),
      },
      {
        path: "user",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      {
        path: "adminAllClass",
        element: (
          <AdminRoute>
            <AllClasses />
          </AdminRoute>
        ),
      },
      // global routes
      {
        path: "profile",
        element: <Profile />,
      },

      // teacher routes
      {
        path: "addClass",
        element: (
          <TeacherRoute>
            <AddClass></AddClass>
          </TeacherRoute>
        ),
      },
      {
        path: "myClass-teacher",
        element: (
          <TeacherRoute>
            <MyClass />
          </TeacherRoute>
        ),
      },
    ],
  },
]);
