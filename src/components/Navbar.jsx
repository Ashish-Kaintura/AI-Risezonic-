import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                <ul className="hidden md:flex space-x-6">
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
                    <li>
                        <Link to="/contact" className={linkClass("/contact")}>
                            Contact
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
                        <Link to="/contact" className={`block ${linkClass("/contact")}`}>
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
