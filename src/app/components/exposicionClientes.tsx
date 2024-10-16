import React from "react";
import Image from "next/image";

const exposicionClientes: React.FC = () => {
  return (
    <div className="h-screen mt-20 mb-20 flex flex-col md:flex-row bg-base ">
      <div className="   grid bg-base gap-6 p-5 w-full md:w-1/2">

        <h2 className=" font-BebasNeue text-5xl text-trend">
          {" "}
          Creación de Réplica 3D de Muebles Reales para Contenido de Redes
          Sociales{" "}
        </h2>

        <div className="  bg-slate-500 ">
          <Image
            src="/DiseñoWeb/exposicionCliente/e6.png"
            alt="Logo"
            width={1000} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
            height={1000} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
          />
        </div>




      </div>

      <div>

      <div className="w-full md:w-1/2 p-5  text-title  font-bold  text-3xl"> producto </div>

      <div className=" flex gap-5"> 


      <div className="  bg-slate-500 ">
          <Image
            src="/DiseñoWeb/logogris.svg"
            alt="Logo"
            width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
            height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
          />
        </div>

        <div className="  bg-slate-500 ">
          <Image
            src="/DiseñoWeb/logogris.svg"
            alt="Logo"
            width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
            height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
          />
        </div>

        <div className="  bg-slate-500 ">
          <Image
            src="/DiseñoWeb/logogris.svg"
            alt="Logo"
            width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
            height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
          />
        </div>







        </div>


      </div>

    </div>
  );
};

export default exposicionClientes;
