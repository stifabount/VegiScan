import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 w-full mt-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="inline-block px-4 py-2 text-white bg-primary-500 rounded-lg shadow-md hover:bg-primary-600 focus:outline-none transition-all duration-200"
        >
          Logo
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primarry-500 focus:outline-none focus:ring-2 dark:text-gray-400"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-textDark md:p-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/vegetables" className="block py-2 px-3 text-textDark md:p-2">
                Vegetables
              </Link>
            </li>
            <li>
              <Link to="/scanpage"
                className="inline-block px-4 py-2 text-white bg-primary-500 rounded-lg shadow-md hover:bg-primary-600 focus:outline-none transition-all duration-200"
              >
                Scan Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
