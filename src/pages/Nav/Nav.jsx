import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Shop2Icon from "@mui/icons-material/Shop2";
import useAuth from "../../hooks/useAuth";
const Nav = () => {
  const { user, LogOut } = useAuth();
  console.log(user?.photoURL);

  const handleLogOut = () => {
    LogOut();
  };
  return (
    <div className="navbar bg-base-100">
      {/* responsive */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <Link to="/user-class">
              <li>
                <a>All Classes</a>
              </li>
            </Link>
            <Link to="/teach">
              <li>
                <a>Teach On Micro</a>
              </li>
            </Link>
          </ul>
        </div>
        <Logo />
      </div>
      {/* large */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/user-class">
            <li>
              <a>All Classes</a>
            </li>
          </Link>
          <Link to="/teach">
            <li>
              <a>Teach On Micro</a>
            </li>
          </Link>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="navbar-end">
          <div className="dropdown dropdown-end md:mr-10 xl:mr-0 lg:mr-0 mr-5  ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {user ? (
                <div className="w-10 rounded-full ">
                  <img src={user?.photoURL} alt="" />
                </div>
              ) : (
                <div className="w-10 rounded-full border-none">
                  <img src="https://i.ibb.co/HDJMNSK/user.png" alt="" />
                </div>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content mt-3 z-[1]"
            >
              <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-opacity-20 bg-white backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2">
                <a href="#" className="flex items-center p-3 -mt-2">
                  {user ? (
                    <div className="mx-1">
                      <h1 className="text-sm font-semibold text-black">
                        {user.displayName}
                      </h1>
                      <p className="text-sm text-black/70">{user.email}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </a>

                <hr className="border-gray-200 " />

                <Link to="/dashboard">
                  <button className="flex px-4 py-3 text-[15px] text-black  hover:bg-blue-300/70 rounded-xl mt-1">
                    <span className="mr-2">
                      <Shop2Icon />
                    </span>
                    <span className="-mt-[3px] ">DashBoard</span>
                  </button>
                </Link>
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="block px-4 py-3 text-[15px] text-black  hover:bg-blue-300/70 rounded-xl mt-1"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="block px-4 py-3 text-[15px] text-black  hover:bg-blue-300/70 rounded-xl mt-1">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
