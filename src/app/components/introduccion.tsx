import React from "react";
import Image from "next/image";

// CSS import

import "../css/graficos.css";

const ComicStory: React.FC = () => {
  // Array de iconos
  const topIcons = [
    "/DiseñoWeb/iconos/adaptabilidad/negocioLocal.svg",
    "/DiseñoWeb/iconos/adaptabilidad/perfil.svg",
    "/DiseñoWeb/iconos/adaptabilidad/filosofiaVida.svg",
    "/DiseñoWeb/iconos/adaptabilidad/producto.svg",
    "/DiseñoWeb/iconos/adaptabilidad/reconocimientoLocal.svg",
  ];

  const bottomIcons = [
    "/DiseñoWeb/iconos/adaptabilidad/negocioVirtual.svg",
    "/DiseñoWeb/iconos/adaptabilidad/simbolismo.svg",
    "/DiseñoWeb/iconos/adaptabilidad/filosofiaIdentidad.svg",
    "/DiseñoWeb/iconos/adaptabilidad/diseñoProducto.svg",
    "/DiseñoWeb/iconos/adaptabilidad/reconocimientoGlobal.svg",
  ];

  return (
    <div className=" w-full  flex flex-col md:flex-row bg-base p-5 ">
      {/* Comics */}
      <div className=" flex p-5  justify-center items-center gap-1 border  ">
        {/* ladoA */}
        <section className=" space-y-1   ">
          <div className=" relative">
            <div className="absolute font-BebasNeue w- 1/2 p-5 text-base xl:text-2xl  ">
              - Necesitamos algo que de verdad destaque, algo que rompa con todo
              lo que hace la competencia
            </div>

            <Image
              src="/DiseñoWeb/comic/comic1.jpg"
              alt="comic 1"
              width={500}
              height={500}
            />
          </div>

          <div className=" relative">
            <div className="absolute font-BebasNeue w- 1/2 p-5 text-base xl:text-2xl  ">
              -¡Los gatos son la clave del éxito!
            </div>

            <Image
              src="/DiseñoWeb/comic/comic3.jpg"
              alt="comic 3"
              width={500}
              height={500}
            />
          </div>

          <div className=" relative">
            <div className="absolute font-BebasNeue w- 1/2 p-5 text-base xl:text-2xl  ">
              -Con herramientas 3D, la única limitación es nuestra imaginación.
              ¡Conquistemos el mercado!
            </div>

            <Image
              src="/DiseñoWeb/comic/comic5.jpg"
              alt="comic 6"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* ladoB */}
        <section className="relative space-y-1 ">
          <div className="absolute font-BebasNeue w- 1/2 p-5 text-base xl:text-2xl  ">
            -Esto no está funcionando, tenemos que replantear todo
          </div>

          <div>
            <Image
              src="/DiseñoWeb/comic/comic2.jpg"
              alt="comic 2"
              width={500}
              height={500}
            />
          </div>

          <div className="relative">
            <div className="absolute font-BebasNeue w- 1/2 p-5 text-base xl:text-2xl  ">
              -¿Y si en vez de lo de siempre, usamos diseño de entornos 3D?
              ¡Imaginen las posibilidades!
            </div>

            <Image
              src="/DiseñoWeb/comic/comic4.jpg"
              alt="comic 4"
              width={500}
              height={500}
            />
          </div>

          <div className="relative">
            <div className="absolute font-BebasNeue w- 1/2 p-5 text-base xl:text-2xl  ">
              -Mama,La agencia aprobó mi servicio! ya Voy al centro por tus
              aguacates
            </div>

            <Image
              src="/DiseñoWeb/comic/comic6.jpg"
              alt="comic 1"
              width={500}
              height={500}
            />
          </div>
        </section>
      </div>

      {/* Diagramas */}



      <div className="h-[1000px] bg-gradient-to-b from-white to-blue-200 w-full p-5 bg-base">
  {/* Aquí puedes agregar tus diagramas */}

  {/* Título principal del contenido */}
  <h2 className="text-2xl font-BebasNeue text-center mb-4 text-title">
    Un estilo de vida diferente...
  </h2>

  {/* Contenedor para los iconos y el título central */}
  <div className="relative flex justify-center items-center bg-slate-300 bg-opacity-30 backdrop-blur-md p-4 rounded-md h-2/3 shadow-lg z-10">
    
    {/* Sección de iconos superiores */}
    <div className="absolute top-10 flex justify-center items-center gap-2 p-2 xl:p-5 md:p-2">
      {topIcons.map((src, index) => (
        <div
          key={index}
          className="panel h-16 w-16 xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 flex justify-center items-center"
        >
          <Image
            src={src}
            alt={`Icono superior ${index + 1}`} // Texto alternativo para accesibilidad
            width={60}
            height={60}
          />
        </div>
      ))}
    </div>

    {/* Sección de iconos inferiores */}
    <div className="absolute bottom-10 flex justify-center items-center gap-2 p-2 xl:p-5 md:p-2">
      {bottomIcons.map((src, index) => (
        <div
          key={index}
          className="panel h-16 w-16 xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 flex justify-center items-center"
        >
          <Image
            src={src}
            alt={`Icono inferior ${index + 1}`} // Texto alternativo para accesibilidad
            width={60}
            height={60}
          />
        </div>
      ))}
    </div>

    {/* Título central que se superpone en el contenedor */}
    <div className="flex justify-center items-center rounded-full w-60 h-60 panel">
      <div className="absolute bg-trend h-1 w-60"></div> {/* Línea horizontal de estilo */}
      <div className="absolute font-BebasNeue text-4xl text-trend">
        Real <br /> Virtual {/* Texto que se muestra en el centro */}
      </div>
    </div>
  </div>
</div>



   
    </div>
  );
};

export default ComicStory;
