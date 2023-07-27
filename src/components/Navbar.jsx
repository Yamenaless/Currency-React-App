import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const openBurgerMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="w-full h-[90px]  bg-black">
      <div className="max-w-[1240px] mx-auto h-full flex justify-between items-center px-4">
        <div>
          <Link to={"/"} className="text-cyan-500 cursor-pointer text-2xl">
            <h1>LOGO !</h1>
          </Link>
        </div>
        {/* ============ Navbar ============= */}
        <div className="hidden md:flex">
          <ul className="text-white flex  cursor-pointer items-center ">
            <Link smooth to={"/"}>
              <li>Home</li>
            </Link>
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

        {/* {"=========== hamburger menu =============="} */}

        <div className="block md:hidden">
          {!openMenu ? (
            <AiOutlineMenu
              size={30}
              onClick={openBurgerMenu}
              className="text-white"
            />
          ) : (
            <AiOutlineClose
              size={30}
              onClick={openBurgerMenu}
              className="text-white"
            />
          )}
        </div>

        {/* "{"=========== mobile menu ===============}" */}
        <div
          className={
            openMenu
              ? "bg-black text-white w-full absolute left-0 top-[90px] flex justify-center text-center md:hidden"
              : "absolute left-[-100%]"
          }
        >
          <ul className="">
            <Link smooth to={"/"}>
              <li>Home</li>
            </Link>
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
