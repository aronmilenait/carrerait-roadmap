"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkClasses = [
    "hover:text-teal-400",
    "transition-colors",
    "duration-300",
    "transform",
    "text-center",
    "text-lg sm:text-xl",
    "font-bold",
  ];

  return (
    <nav className="bg-teal-900 text-teal-200 p-4 flex flex-col sm:flex-row items-center shadow-lg">
      <div className="flex justify-between items-center w-full sm:w-auto relative">
        <a
          href="/"
          className="text-4xl md:text-3xl font-extrabold text-teal-100 relative z-10"
        >
          <span className="text-teal-300">Carrera</span>
          <span className="text-teal-500">IT</span>
        </a>
        <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-300 blur-sm opacity-30 -z-10"></span>
        <button
          className="sm:hidden text-2xl focus:outline-none ml-4"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>
      <div
        className={`w-full ${
          menuOpen ? "block" : "hidden"
        } sm:flex sm:flex-grow sm:justify-center mt-4 sm:mt-0`}
      >
        <ul className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
          <li>
            <a href="/cuestionario" className={linkClasses.join(" ")}>
              Cuestionario
            </a>
          </li>
          <li>
            <a href="/orientacion" className={linkClasses.join(" ")}>
              Orientación
            </a>
          </li>
          <li>
            <a href="/info" className={linkClasses.join(" ")}>
              Información
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
