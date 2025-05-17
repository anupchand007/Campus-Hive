import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/landingLogo.png";
import art from "../assets/Art.svg";

const Navbar = () => {
  return (
    <div className="flex w-screen h-160 bg-blue-900 pt-12 pr-12 pl-12 ">
      <div className=" w-screen bg-sky-600 rounded-t-2xl ">
        <div className="p-5 flex h-25  justify-around items-center w-full gap-2 ">
          <img src={logo} alt="" width={230} />
          <ul className="links flex w-2/3 justify-around items-center text-amber-100 text-2xl">
            <li>
              <NavLink>Features</NavLink>
            </li>
            <li>
              <NavLink>Forums</NavLink>
            </li>
            <li>
              <NavLink>Events</NavLink>
            </li>
            <li>
              <NavLink>Showcase</NavLink>
            </li>
          </ul>
          <button className="links flex justify-center items-center bg-amber-400 rounded-2xl w-20 h-10 cursor-pointer">
            Login
          </button>
        </div>
        <img className="ml-15 mt-8 hover:scale-120 transition duration-200 ease-in-out" src={art} alt="teacher" width={500}/>
        
      </div>
    </div>
  );
};

export default Navbar;
