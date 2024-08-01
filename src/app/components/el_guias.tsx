import React from "react";
import Image from "next/image";

// Importar las animaciones CSS si es necesario
import "../css/animaciones.css";


const El_guias = () => {
  return (
    <div className=" z-30 flex items-center justify-center pl-5 fixed h-20 w-full  bottom-8">


      <a
        href="https://wa.me/573052158161" // Reemplaza con el número de WhatsApp deseado
        target="_blank" // Abre el enlace en una nueva pestaña
        rel="noopener noreferrer" // Mejora la seguridad
        className="guias min-h-14 z-10 bg-neutral-300 p-3 rounded-full  flex items-center justify-center"
      >
        <Image
          src="/DiseñoWeb/whatsapp.svg"
          alt="Logo"
          width={65} // Ancho deseado en píxeles
          height={65} // Alto deseado en píxeles
        />
      </a>


      <div className="font-mono bg-neutral-400 p-5 pl-10 h-14 flex items-center shadow-inner-md text-sm rounded-r-full -translate-x-5 z-0">
        ¿Tienes preguntas? Contáctanos por WhatsApp y te responderemos de inmediato.
      </div>


    </div>
  );
};

export default El_guias;
