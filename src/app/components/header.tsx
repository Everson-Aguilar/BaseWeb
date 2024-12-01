"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Lista de rutas
  const routes = [
    { href: "/", label: "Home" },
    { href: "/pages/contenido/", label: "How to create a 3D environment" },
    { href: "/pages/shop/", label: "Visual Products" },
    { href: "/pages/mantenimiento/", label: "I’m an Artist $$$" }, // Opcional para dropdown
  ];

  return (
    <header className="bg-trend h-fill w-full z-30 top-0 fixed">
      <nav className="flex text-colorBase items-center justify-between px-4">
        {/* Logo or title */}
        <div className="font-LibreBarcode128 text-3xl border-b-2 border-orange-400">TuDigitalNegocio.com</div>

        {/* Navigation menu */}
        <ul className={`md:flex ${isMenuOpen ? "block" : "hidden"} space-y-2 md:space-y-0 md:space-x-4 font-sans bg-orange-400`}>
          {routes.map((route, index) => (

            

           
            <li key={index} className="hover:text-orange-400 p-1" >
              <span className=" text-5xl">.</span>
              <Link href={route.href}>{route.label}</Link>
            </li>
            
          ))}
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
    </header>
  );
};

export default Header;
