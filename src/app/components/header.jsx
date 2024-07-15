"use client";

import Link from "next/link";
import React from "react";

//css

import "../css/header.css";

const Header = () => {
  return (
    <header className="  bg-neutral-500 bg-opacity-20 backdrop-blur-md  header">
      <nav>
        <ul className="header_contenido font-Quicksand">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/pages/mantenimiento">Soy Artista $$$</Link>
          </li>
          <li>
            <Link href="/pages/mantenimiento">Productos Visuales</Link>
          </li>
        </ul>
      
      </nav>
    </header>
  );
};

export default Header;
