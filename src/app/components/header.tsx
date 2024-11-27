"use client";

import Link from "next/link";
import React, { useState } from "react";

// Define the component with appropriate types if necessary
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-trend h-fill w-full z-30 top-0 fixed">
      <nav className="flex text-colorBase items-center justify-between px-4">
        {/* Logo or title */}
        <div className="font-LibreBarcode128 text-3xl">TuDigitalNegocio.com</div>

        {/* Navigation menu for large screens */}
        <ul className="hidden md:flex space-x-4 font-sans">
          <li>
            <Link className="hover:text-orange-400" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" href="/pages/contenido/">
            How to create a 3D environment
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" href="/pages/mantenimiento">
              Visual Products
            </Link>
          </li>
        </ul>

        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <ul className="relative md:hidden bg-trend z-20 text-colorBase space-y-2 p-4">
          <li className="hover:text-orange-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-orange-400">
            <Link href="/pages/soyArtista/">I’m an Artist $$$</Link>
          </li>
          <li className="hover:text-orange-400">
            <Link href="/pages/mantenimiento">Visual Products</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
