"use client";

import Link from "next/link";
import React from "react";

// css
import "../css/header.css";

// Definir el tipo de las propiedades si se aplican
const Header: React.FC = () => {
  return (
    <header className="bg-trend h-16 header">
      <nav>
        <ul className="header_contenido font-sans">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="pages/soyArtista/">Soy Artista $$$</Link>
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
