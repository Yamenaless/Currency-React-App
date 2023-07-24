import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto h-full flex justify-between items-center px-4">
        <div>
          <Link to={"/"} className="text-cyan-500 cursor-pointer text-lg">
            <h1>LOGO !</h1>
          </Link>
        </div>
        <div>
          <ul className=" hidden text-white sm:flex space-x-8 cursor-pointer items-center px-5">
            <Link smooth to={"#platform"}>
              <li>Platform</li>
            </Link>
            <Link smooth to={"#developers"}>
              <li>Developers</li>
            </Link>
            <Link smooth to={"#community"}>
              <li>Community</li>
            </Link>
            <Link smooth to={"#about"}>
              <li>About</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
