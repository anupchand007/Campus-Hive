import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/landingLogo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 max-w-7xl mx-auto">
        <img src={logo} alt="Logo" width={200} className="mb-4 md:mb-0" />

        <ul className="flex flex-col md:flex-row gap-4  font-semibold text-amber-300 text-2xl">
          <li>
            <Link to="/about" className="hover:text-white transition">About</Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-white transition">Terms</Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-white transition">Contact Us</Link>
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
