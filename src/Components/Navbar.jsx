import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/landingLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="p-4 flex justify-between items-center w-full">
        {/* Logo - responsive width */}
        <img src={logo} alt="Campus Hive Logo" className="w-40 md:w-60" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-amber-100 hover:text-amber-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex w-2/3 justify-around items-center text-amber-100 text-xl lg:text-2xl font-bold">
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-amber-400 transition-all duration-150 ease-in-out ${
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
                `hover:text-amber-400 transition-all duration-150 ease-in-out ${
                  isActive ? "text-rose-950" : ""
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

        {/* Login Button - Hidden on mobile, shown on sm and up */}
        <NavLink
          to="/login"
          className="hidden md:flex justify-center items-center bg-amber-400 rounded-2xl w-20 h-10 font-medium hover:bg-white hover:text-amber-400 transition-all duration-150 ease-in-out"
        >
          Login
        </NavLink>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-blue-900 py-4 px-6 shadow-lg">
          <ul className="flex flex-col space-y-4 text-amber-100 text-xl">
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `block hover:text-amber-400 transition-all duration-150 ease-in-out ${
                    isActive ? "text-rose-950" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/forums"
                className={({ isActive }) =>
                  `block hover:text-amber-400 transition-all duration-150 ease-in-out ${
                    isActive ? "text-rose-950" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Forums
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block hover:text-amber-400 transition-all duration-150 ease-in-out ${
                    isActive ? "text-rose-950" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/showcase"
                className={({ isActive }) =>
                  `block hover:text-amber-400 transition-all duration-150 ease-in-out ${
                    isActive ? "text-rose-950" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Showcase
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block text-amber-400 hover:text-white transition-all duration-150 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
