import React from 'react';

// Importa el archivo CSS
import "./animacion.css";

const Proyectos: React.FC = () => {
  return (
    <div className=" relative flex overflow-hidden h-40 items-center justify-center w-full  bg-colorBase">
      <div className="animate-marquee whitespace-nowrap text-trend font-BebasNeue text-9xl">
        <span>Proyectos</span>
        
      </div>
    </div>
  );
};

export default Proyectos;
