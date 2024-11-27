import React from 'react';

// Importa el archivo CSS
import "./animacion.css";

const Plan: React.FC = () => {
  return (
    <section className=" relative flex overflow-hidden h-40 items-center justify-center w-full bg-trend">
      <text className="animate-marquee whitespace-nowrap text-colorBase font-BebasNeue text-9xl">
        CREATE WORLDS
        
      </text>
    </section>
  );
};

export default Plan;
