import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex container mx-auto ">
      <div className="lg:w-64 bg-red-400 min-h-screen">
        <ul className="menu text-white">
          <li>
            <NavLink to="/dashboard/teacher">Teacher Request</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user"> All Users</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile">All Classes</NavLink>
          </li>
          <div className="divider">OR</div>
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
