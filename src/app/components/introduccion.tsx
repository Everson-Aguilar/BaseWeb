import React from "react";
import Image from "next/image";

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
    <div className="w-full flex flex-col md:flex-row bg-base p-5 justify-center items-center">



{/* Comics */}
<div className="flex p-5  justify-center items-center gap-1 border text-xs md:text-1xlt xl:text-1xl ">
  {/* ladoA */}
  <section className="space-y-20 mt-16">
    <div className="relative">
      <div className="absolute -translate-y-16   w-full p-3 border-2 bg-base border-trend text-trend">
        - Necesitamos algo que de verdad destaque, algo que rompa con todo lo que hace la competencia
      </div>
      

      <Image
        src="/DiseñoWeb/comic/comic1.jpg"
        alt="comic 1"
        width={300}
        height={300}
      />


    </div>

    <div className="relative">
      <div className="absolute -translate-y-16  w-full p-3 border-2 bg-base border-trend text-trend">
        -¡Los gatos son la clave del éxito!
      </div>
      <Image
        src="/DiseñoWeb/comic/comic3.jpg"
        alt="comic 3"
        width={300}
        height={300}
      />
    </div>

    <div className="relative">
      <div className="absolute -translate-y-16  w-full p-3 border-2 bg-base border-trend text-trend">
        -Con herramientas 3D, la única limitación es nuestra imaginación. ¡Conquistemos el mercado!
      </div>
      <Image
        src="/DiseñoWeb/comic/comic5.jpg"
        alt="comic 5"
        width={300}
        height={300}
      />
    </div>
  </section>

  {/* ladoB */}
  <section className="space-y-20 mt-16">
    <div className="relative">
      <div className="absolute -translate-y-16  w-full p-3 border-2 bg-base border-trend text-trend">
        -Esto no está funcionando, tenemos que replantear todo
      </div>
      <Image
        src="/DiseñoWeb/comic/comic2.jpg"
        alt="comic 2"
        width={300}
        height={300}
      />
    </div>

    <div className="relative">
      <div className="absolute -translate-y-16  w-full p-3 border-2 bg-base border-trend text-trend">
        -¿Y si en vez de lo de siempre, usamos diseño de entornos 3D? ¡Imaginen las posibilidades!
      </div>
      <Image
        src="/DiseñoWeb/comic/comic4.jpg"
        alt="comic 4"
        width={300}
        height={300}
      />
    </div>

    <div className="relative">
      <div className="absolute -translate-y-16 w-full p-3 border-2 bg-base border-trend text-trend">
        -Mamá, la agencia aprobó mi servicio! Ya voy al centro por tus aguacates.
      </div>
      <Image
        src="/DiseñoWeb/comic/comic6.jpg"
        alt="comic 6"
        width={300}
        height={300}
      />
    </div>
  </section>
</div>



      {/* Diagramas */}
      <div className="h-[1000px]  bg-gradient-to-b from-white to-blue-200 w-full p-2 bg-base">
        <h2 className="text-2xl font-BebasNeue text-center mb-4 text-title">
          Un estilo de vida diferente...
        </h2>
        <div className="relative flex justify-center items-center bg-slate-300 bg-opacity-30 backdrop-blur-md p-4 rounded-md h-2/3 shadow-lg z-10">
          <div className="absolute top-10 flex justify-center items-center gap-2 p-2 xl:p-5">
            {topIcons.map((src, index) => (
              <div key={index} className=" bg-base transition-all duration-300 ease-in-out h-12 w-12 xl:h-28 md:h-14 md:w-14 xl:w-28 flex justify-center items-center">
                <Image
                  src={src}
                  alt={`Icono superior ${index + 1}`}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </div>

          <div className="absolute  bottom-10 flex justify-center items-center gap-2 p-2 xl:p-5">
            {bottomIcons.map((src, index) => (
              <div key={index} className=" bg-base transition-all duration-300 ease-in-out   h-12 w-12 md:h-14 md:w-14  xl:h-28 xl:w-28 flex justify-center items-center">
                <Image
                  src={src}
                  alt={`Icono inferior ${index + 1}`}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center rounded-full w-60 h-60 panel">
            <div className="absolute bg-trend h-1 w-60"></div>
            <div className="absolute font-BebasNeue text-4xl text-trend">
              Real <br /> Virtual
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicStory;
