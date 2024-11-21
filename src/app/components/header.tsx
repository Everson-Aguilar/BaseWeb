"use client";

import Link from "next/link";
import React, { useState } from "react";

// Definir el tipo de las propiedades si se aplican
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className=  "bg-trend h-fill w-full z-30 h-fill top-0 fixed">
      <nav className="flex text-colorBase   items-center justify-between px-4">
        {/* Logo o título */}
        <div className="  font-LibreBarcode128 text-3xl">TuDigitalNegocio.com</div>

        {/* Menú de navegación para pantallas grandes */}
        <ul className="hidden md:flex space-x-4 font-sans">
          <li>
            <Link className="hover:text-orange-400" href="/">Inicio</Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" href="/pages/soyArtista/">Soy Artista $$$</Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" href="/pages/mantenimiento">Productos Visuales</Link>
          </li>
        </ul>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <button
          className="md:hidden  "
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
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

      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <ul className=" relative md:hidden bg-trend z-20  text-colorBase space-y-2 p-4">
          <li className="hover:text-orange-400 ">
            <Link href="/">Inicio</Link>
          </li>
          <li className="hover:text-orange-400 ">
            <Link href="/pages/soyArtista/">Soy Artista $$$</Link>
          </li >
          <li className="hover:text-orange-400  ">
            <Link href="/pages/mantenimiento">Productos Visuales</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
