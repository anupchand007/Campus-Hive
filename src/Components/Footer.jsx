import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/landingLogo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div>
        <h3 className="items-center flex justify-center">All Right are Reversed and Protected by CampusHive™️ {year}</h3>
      </div>

      <div className="p-5 flex h-25 bg-blue-950  justify-around items-center w-full gap-2 ">
        <img src={logo} alt="" width={230} />
        <ul className="links flex w-2/3 justify-around items-center text-amber-100 text-2xl font-bold">
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/privacy'>Privacy</NavLink>
          </li>
          <li>
            <NavLink to='/terms'>Terms</NavLink>
          </li>
          <li>
            <NavLink to='/contact-us'>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
