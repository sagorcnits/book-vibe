import { NavLink } from "react-router-dom";
import Button from "../../components/button/Button";
import './navbar.css';
const Navbar = () => {
  return (
    <div className="navbar  my-6 ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="font-bold text-3xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1 *:text-[17px] ">
          <NavLink to="/">
            <li >
              <a>Home</a>
            </li>
          </NavLink>
          <NavLink to="/listed_Books">
            <li>
              <a>Listed Books</a>
            </li>
          </NavLink>
          <NavLink to="/pages_Read">
            <li>
              <a>Pages to Read</a>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <Button title={"Sign In"} bgColor={"#23BE0A"}></Button>
        <Button title={"Sign Up"} bgColor={"#59C6D2"}></Button>
      </div>
    </div>
  );
};

export default Navbar;
