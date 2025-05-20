import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/landingLogo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-950">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo section */}
          <figure className="w-full sm:w-auto flex justify-center">
            <img 
              src={logo} 
              alt="Campus Hive Logo" 
              className="w-48 sm:w-60 md:w-72 h-auto"
            />
          </figure>

          {/* Navigation Links */}
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-amber-300 text-lg sm:text-xl font-semibold">
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact-us" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-gray-200 py-3 px-4 text-center">
        <p className="text-gray-700 text-sm sm:text-base">
          © {new Date().getFullYear()} CampusHive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
