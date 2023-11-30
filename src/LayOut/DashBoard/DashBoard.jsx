import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useTeacher from "./../../hooks/useTeacher";

const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          {/* Page content here */}
          <Outlet></Outlet>
          <div className="flex items-center justify-center mt-5">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open DashBoard
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-red-300 text-base-content">
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
      </div>
    </>
  );
};

export default DashBoard;
