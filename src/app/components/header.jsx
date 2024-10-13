"use client";

import Link from "next/link";
import React from "react";

//css

import "../css/header.css";

const Header = () => {
  return (
    <header className="  bg-neutral-800 h-16    header">
      <nav>
        <ul className="header_contenido font-sans ">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="pages/mantenimiento/">Soy Artista $$$</Link>
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
