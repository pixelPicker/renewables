import React, { useState } from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { IoCloseCircle, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";
function Header() {
  const [sideBarPosition, setSideBarPosition] = useState("bottom-full");

  const openSideBar = () => {
    setSideBarPosition("top-0");
  };
  const closeSideBar = () => {
    setSideBarPosition("bottom-full");
  };

  return (
    <header className="sticky top-0 left-0 z-50 backdrop-blur-xl flex justify-between sm:py-4 md:px-16 items-center font-Montserrat">
      <img src="./assets/images/reflux_logo.png" alt="Reflux logo" className="aspect-16/9 w-32" />
      <nav className="hidden sm:block">
        <ul className="flex gap-6">
          <NavLink
            className="hover:border-black transition-all duration-300 p-2 border-transparent border-b-2"
            to=""
          >
            Home
          </NavLink>
          <NavLink
            className="hover:border-black transition-all duration-300 p-2 border-transparent border-b-2"
            to="blog"
          >
            Blog
          </NavLink>
          <NavLink
            className="hover:border-black transition-all duration-300 p-2 border-transparent border-b-2"
            to="projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="hover:border-black transition-all duration-300 p-2 border-transparent border-b-2"
            to="casestudy"
          >
            Case studies
          </NavLink>
          <NavLink
            className="hover:border-black transition-all duration-300 p-2 border-transparent border-b-2"
            to="about"
          >
            About
          </NavLink>
        </ul>
      </nav>
      <IoMenu
        className="!mr-4 sm:!mr-0 sm:hidden text-xl"
        onClick={openSideBar}
      />
      <div
        className={`absolute grid transition-all ${sideBarPosition} duration-300 gap-4 w-screen !py-4 sm:hidden z-50 bg-black/60 backdrop-blur-[2px]`}
      >
        <NavLink
          to={""}
          className={({ isActive }) =>
            isActive ? "bg-gray-300 text-black" : "bg-transparent text-white"
          }
        >
          <div className="flex justify-between text-xl items-center !px-4 !py-2">
            <h3>Home</h3>
            <HiMiniArrowTopRightOnSquare />
          </div>
        </NavLink>
        <NavLink
          to={"/blog"}
          className={({ isActive }) =>
            isActive ? "bg-gray-300 text-black" : "bg-transparent text-white"
          }
        >
          <div className="flex justify-between text-xl items-center !px-4 !py-2">
            <h3>Blog</h3>
            <HiMiniArrowTopRightOnSquare />
          </div>
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive ? "bg-gray-300 text-black" : "bg-transparent text-white"
          }
        >
          <div className="flex justify-between text-xl items-center !px-4 !py-2">
            <h3>Projects</h3>
            <HiMiniArrowTopRightOnSquare />
          </div>
        </NavLink>
        <NavLink
          to={"/casestudy"}
          className={({ isActive }) =>
            isActive ? "bg-gray-300 text-black" : "bg-transparent text-white"
          }
        >
          <div className="flex justify-between text-xl items-center !px-4 !py-2">
            <h3>Case Studies</h3>
            <HiMiniArrowTopRightOnSquare />
          </div>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-300 !mb-4 text-black"
              : "bg-transparent !mb-4 text-white"
          }
        >
          <div className="flex justify-between text-xl items-center !px-4 !py-2">
            <h3>About</h3>
            <HiMiniArrowTopRightOnSquare />
          </div>
        </NavLink>
        <div className="flex justify-center items-center text-gray-100 hover:text-gray-200 active:text-gray-300 text-5xl">
          <IoCloseCircle onClick={closeSideBar} />
        </div>
      </div>
    </header>
  );
}

export default Header;
