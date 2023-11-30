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
import Update from "../pages/DashBoard/Teachers-Dashboard/Update";
import UserClasses from "../pages/Home/Class/UserClasses";
import Payment from "../pages/payment/Payment";
import MyClasses from "./../pages/DashBoard/MyClasses/MyClasses";

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
      {
        path: "user-class",
        element: (
          <Private>
            <UserClasses />
          </Private>
        ),
        loader: () => fetch("https://micro-server.vercel.app/users-class"),
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
      {
        path: "myClass",
        element: <MyClasses />,
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
      {
        path: "update/:id",
        element: (
          <TeacherRoute>
            <Update />
          </TeacherRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://micro-server.vercel.app/update/${params?.id}`),
      },
    ],
  },
  {
    path: "/payment/:id",
    element: <Payment></Payment>,
    loader: ({ params }) =>
      fetch(`https://micro-server.vercel.app/payment/${params?.id}`),
  },
]);
