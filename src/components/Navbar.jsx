import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaRobot, FaChalkboardTeacher, FaLightbulb } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600">
          <img
            className="w-48"
            src="https://i.postimg.cc/jqPQ0qjd/Whats-App-Image-2025-06-27-at-3-38-13-PM-removebg-preview.png"
            alt="Logo"
          />
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
          </li>

          <li className="relative group">
            <Link
              to="/ai-solution-and-product"
              className={linkClass("/ai-solution-and-product")}
            >
              {" "}
              <button
                className="flex items-center gap-1  hover:text-blue-600 focus:outline-none"
                onClick={() => setDropdownOpen((open) => !open)}
                onBlur={() => setDropdownOpen(false)}
              >
                AI Solutions & Products
                {/* <FiChevronDown className="mr-1" /> */}
              </button>
            </Link>
            {/* <div
              className={`absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-50 ${
                dropdownOpen ? "block" : "hidden"
              } group-hover:block`}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/ai-apps"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaLightbulb className="mr-2 text-blue-500" />
                AI Apps We Build
              </Link>
              <Link
                to="/ai-education"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaChalkboardTeacher className="mr-2 text-blue-500" />
                AI in Education
              </Link>
              <Link
                to="/robotics-ai"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaRobot className="mr-2 text-blue-500" />
                Robotics + AI
              </Link>
              <Link
                to="/consulting"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FaLightbulb className="mr-2 text-blue-500" />
                Consulting for Institutions
              </Link>
            </div> */}
          </li>
          <li>
            <Link to="/our-porjects" className={linkClass("/our-porjects")}>
              Our Project
            </Link>
          </li>
          <li>
            <Link to="/resources" className={linkClass("/resources")}>
              Resources
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white">
          <li>
            <Link to="/" className={`block ${linkClass("/")}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`block ${linkClass("/about")}`}>
              About
            </Link>
          </li>

          <li>
            <button
              className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 focus:outline-none "
              onClick={() => setDropdownOpen((open) => !open)}
            >
              <Link to="/ai-solution-and-product">
                {/* <FiChevronDown className="mr-1" /> */}
                AI Solutions & Products
              </Link>
            </button>
            {/* {dropdownOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  to="/ai-apps"
                  className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  <FaLightbulb className="mr-2 text-blue-500" />
                  AI Apps We Build
                </Link>
                <Link
                  to="/ai-education"
                  className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  <FaChalkboardTeacher className="mr-2 text-blue-500" />
                  AI in Education
                </Link>
                <Link
                  to="/robotics-ai"
                  className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  <FaRobot className="mr-2 text-blue-500" />
                  Robotics + AI
                </Link>
                <Link
                  to="/consulting"
                  className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  <FaLightbulb className="mr-2 text-blue-500" />
                  Consulting for Institutions
                </Link>
                <Link
                  to="/ai-apps"
                  className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  <FaLightbulb className="mr-2 text-blue-500" />
                  AI Apps We Build
                </Link>
              </div>
            )} */}
          </li>
          <li>
            <Link
              to="/our-porjects"
              className={`block ${linkClass("/our-porjects")}`}
            >
              Our Project
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`block ${linkClass("/contact")}`}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`block ${linkClass("/about")}`}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/resources" className={linkClass("/resources")}>
              Resources
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
