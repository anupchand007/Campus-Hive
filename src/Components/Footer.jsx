import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/landingLogo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-950  ">
      <div className="p-3 flex-row items-center sm:flex sm:justify-evenly sm:items-center ">
        <figure className="flex justify-center sm:w-96 ">
          <img src={logo} alt="Logo" className="w-80 mb-4 sm:w-100 " />
        </figure>
        <ul className="flex md:justify-end gap-4  font-semibold text-amber-300 text-2xl  sm:w-1/2 flex-wrap justify-center items-center">
          <li>
            <Link to="/about" className="hover:text-white transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-white transition">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 text-center py-2 text-gray-700 text-lg">
        © {new Date().getFullYear()} CampusHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
