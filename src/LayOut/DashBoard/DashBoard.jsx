import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex container mx-auto">
      <div className="w-64 bg-red-400 min-h-full">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/teacher">Teacher Request</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user">Users</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
