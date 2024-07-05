'use client'

import React from 'react';

//css

import '../css/header.css';


const Header = () => {
  return (
    <header className='bg-neutral-500 bg-opacity-20 backdrop-blur-md  header'>
      <nav>
        <ul className='header_contenido font-Quicksand'>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Descargar Diseño entornos</a></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;

