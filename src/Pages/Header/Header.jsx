import { Link, NavLink, useLocation } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Header = ({ local, wishLocal }) => {
  let { pathname } = useLocation();
  let loc = local.length;
  let wishLoc = wishLocal.length;

  const pathsToHighlight = [
    "/device/Laptops",
    "/device/Airpods",
    "/device/Home%20Appliances",
    "/device/Televisions",
    "/device/Smartphones",
  ];

  return (
    <div>
      <div
        className={`navbar ${
          pathname === "/" || pathsToHighlight.includes(pathname)
            ? "bg-purple-600 text-white"
            : "bg-base-100"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/statistics"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tranding"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Review
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <p className="btn btn-ghost font-bold text-2xl">GadgetHeaven✨</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/statistics"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tranding"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Review
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link to={"/dashboard"}>
          <button
            className={`btn btn-ghost ${
              pathname === "/" ? "bg-white text-black" : ""
            } btn-circle`}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{loc}</span>
              </div>
            </div>
          </button>
          </Link>
          <Link to={"/dashboard"}>
          <button
            className={`btn btn-ghost ${
              pathname === "/" ? "bg-white text-black" : ""
            } btn-circle`}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                > 
                   <CiHeart size={25}/> 
                </svg>
                <span className="badge badge-sm indicator-item">{wishLoc}</span>
              </div>
            </div>
          </button>
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
