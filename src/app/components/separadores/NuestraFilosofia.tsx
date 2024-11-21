import React from 'react';

// Importa el archivo CSS
import "./animacion.css";

const Plan: React.FC = () => {
  return (
    <div className=" relative flex overflow-hidden h-40 items-center justify-center w-full bg-trend">
      <div className="animate-marquee whitespace-nowrap text-colorBase font-BebasNeue text-9xl">
        <span>Nuestro flujo de trabajo</span>
        
      </div>
    </div>
  );
};

export default Plan;
