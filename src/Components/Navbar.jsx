import React from "react";
import {NavLink } from "react-router-dom";
import logo from "../assets/landingLogo.png";

const Navbar = () => {
  return (
    <>
      <div className=" p-5 flex h-25  justify-around items-center w-full gap-2 ">
        <img src={logo} alt="" className="w-60 md:40 " />

        <ul className="links hidden md:flex w-2/3 justify-around items-center text-amber-100 text-2xl font-bold">
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-amber-400  transition-all duration-150 ease-in-out ${
                  isActive ? "text-rose-950" : ""
                }`
              }
              to="/features"
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forums"
              className={({ isActive }) =>
                `hover:text-amber-400 transition-color duration-200 ease-in
                ${isActive ? "text-rose-950" : "text-"
                }`
              }
            >
              Forums
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-amber-400 transition-all duration-150 ease-in-out ${
                  isActive ? "text-rose-950" : ""
                }`
              }
              to="/events"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-amber-400 transition-all duration-150 ease-in-out ${
                  isActive ? "text-rose-950" : ""
                }`
              }
              to="/showcase"
            >
              Showcase
            </NavLink>
          </li>
        </ul>

        <NavLink
          to="/login"
          className="
          links hidden sm:flex justify-center items-center bg-amber-400 rounded-2xl w-20  cursor-pointer h-10 hover:scale-120 hover:bg-white hover:font-bold hover:text-amber-400 transition-all duration-150 ease-in-out "
        >
          Login
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
