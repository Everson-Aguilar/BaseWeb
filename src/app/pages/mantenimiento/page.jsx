import React from "react";
import Link from "next/link";

const MiComponente = () => {
  return (
    <div>
      <div className=" flex justify-center items-center  text-center  h-screen bg-neutral-600">
        <div className=" flex-row p-5">
          <h1 className=" text-7xl font-BebasNeue">PAGINA EN MANTENIMIENTO</h1>
          <p className=" font-Quicksand text-3xl">
            Actualmente estamos realizando mejoras en nuestro sitio web para
            ofrecerte una mejor experiencia. Lamentamos cualquier inconveniente
            causado. Estaremos de vuelta pronto.
          </p>
          <button className="mt-10 rounded-xl font-Staatliches bg-neutral-400 h-10 w-40 hover:bg-neutral-500 transform transition duration-300 hover:scale-105">
      <Link href="/">Inicio</Link>
    </button>
        </div>
      </div>
    </div>
  );
};

export default MiComponente;
