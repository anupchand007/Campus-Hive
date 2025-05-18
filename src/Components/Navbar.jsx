import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/landingLogo.png";

const Navbar = () => {
  return (
    <>
      <div className="p-5 flex h-25  justify-around items-center w-full gap-2 ">
        <img src={logo} alt="" width={230} />
        <ul className="links flex w-2/3 justify-around items-center text-amber-100 text-2xl font-bold">
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:scale-110 transition-all duration-150 ease-in-out ${
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
              className={({ isActive }) =>
                `hover:scale-110 transition-all duration-150 ease-in-out ${
                  isActive ? "text-rose-950" : ""
                }`
              }
              to="/forums"
            >
              Forums
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:scale-110 transition-all duration-150 ease-in-out ${
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
                `hover:scale-110 transition-all duration-150 ease-in-out ${
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
          className="links flex justify-center items-center bg-amber-400 rounded-2xl w-20 h-10 cursor-pointer"
        >
          Login
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
