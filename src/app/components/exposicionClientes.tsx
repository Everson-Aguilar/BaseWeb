import React from "react";
import Image from "next/image";

const exposicionClientes: React.FC = () => {
  return (
    <div className="h-screen mt-20 mb-4 flex flex-col md:flex-row bg-base relative overflow-y-auto   ">
      <div className="   grid bg-base gap-6 p-5 w-full md:w-1/2">

        <h2 className=" font-BebasNeue text-5xl text-trend">
          {" "}
          Creación de Réplica 3D de Muebles Reales para Contenido de Redes
          Sociales{" "}
        </h2>

        <div>
          <Image
            src="/DiseñoWeb/exposicionCliente/e6.png"
            alt="Logo"
            width={600} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
            height={600} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
            objectFit="fill"
          />
        </div>




      </div>

      <div className="mt-5">

      <div className=" text-title  font-bold  text-3xl"> producto hogar </div>
      <div className="  text-title    text-2xl">  mobilarios </div>


      {/* COMIENZO imagenes exposicion-------------------------------*/}

      <div className=" flex gap-5"> 


      <div className="  bg-slate-500  ">
          <Image
            src="/DiseñoWeb/exposicionCliente/miniE1.jpg"
            alt="Logo"
            width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
            height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
          />
        </div>

        <div className="  bg-slate-500 ">
          <Image
            src="/DiseñoWeb/exposicionCliente/miniE2.jpg"
            alt="Logo"
            width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
            height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
          />
        </div>

        <div className="  bg-slate-500 ">
          <Image
            src="/DiseñoWeb/exposicionCliente/miniE3.jpg"
            alt="Logo"
            width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
            height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
          />
        </div>

        {/* FIN imagenes exposicion-------------------------------*/}
        



        </div>

        <div className="bg-message p-6 shadow-md">
      <h2 className="text-2xl font-BebasNeue text-trend mb-4">Muebles 3D Realistas para Hacer Brillar tus Proyectos y tu Marca</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="p-4 bg-base rounded-lg shadow">
          <h3 className="font-semibold text-trend">Visuales que impactan:</h3>
          <p>Atrae todas las miradas con renderizados de alta calidad que suben el nivel de tus presentaciones.</p>
        </li>
        <li className="p-4 bg-base rounded-lg shadow">
          <h3 className="font-semibold text-trend">Flexibilidad total:</h3>
          <p>Ajusta colores, materiales y tamaños, o incluso rediseña el producto para que encaje perfecto con tu estilo.</p>
        </li>
        <li className="p-4 bg-base rounded-lg shadow">
          <h3 className="font-semibold text-trend">Rendimiento eficiente:</h3>
          <p>Modelos ligeros que mantienen tus proyectos fluidos y rápidos.</p>
        </li>
        <li className="p-4 bg-base rounded-lg shadow">
          <h3 className="font-semibold text-trend">Contenido para redes que engancha:</h3>
          <p>Crea imágenes y animaciones que sorprendan a tu audiencia y mejoren la visibilidad de tu marca.</p>
        </li>
        <li className="p-4 bg-base rounded-lg shadow">
          <h3 className="font-semibold text-trend">Identidad sólida:</h3>
          <p>Diseños que encajan fácil y mantienen la coherencia en todos tus proyectos, dándole más fuerza a tu marca.</p>
        </li>
      </ul>
    </div>

        


      </div>

    </div>
  );
};

export default exposicionClientes;
