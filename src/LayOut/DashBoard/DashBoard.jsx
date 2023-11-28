import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useTeacher from "./../../hooks/useTeacher";

const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();
  return (
    <div className="flex container mx-auto ">
      <div className="lg:w-64 bg-red-400 min-h-screen">
        <ul className="menu text-white ">
          {/* for the student */}
          {isAdmin || isTeacher || (
            <>
              <li>
                <NavLink to="/dashboard/profile">Profile</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/myClass">My Classes</NavLink>
              </li>
            </>
          )}

          {isAdmin && (
            <>
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
                <NavLink to="/dashboard/adminAllClass">All Classes</NavLink>
              </li>
            </>
          )}

          {isTeacher && (
            <>
              <li>
                <NavLink to="/dashboard/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClass-teacher">My Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addClass">Add Class</NavLink>
              </li>
            </>
          )}
          {/* shared */}
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
