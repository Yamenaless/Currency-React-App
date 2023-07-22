import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-bold">
              Your Logo
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                to={"/home"}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to={"/About"}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to={"/Services"}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                to={"/Contact"}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 rounded-md"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to={"/Home"}
            className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to={"/About"}
            className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to={"/Services"}
            className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            to={"/Contact"}
            className="text-white block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;