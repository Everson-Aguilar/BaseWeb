// src/components/EmptyComponent.tsx
import React from "react";
import Image from "next/image";

const EmptyComponent: React.FC = () => {
  return (
    <div className=" relative flex-row  md:flex  w-screen bg-trend">
      <div className=" w-full md:w-1/3  ">
        <div className=" md:h-4/6 text-center ">
          <div className="text-colorBase  translate-y-5 justify-center text-3xl font-Staatliches">
            servicios disponibles
            <section>
              <div className=" mb-10 relative pt-5 flex-wrap flex justify-center items-center text-center gap-20">
                {/* Repite este bloque para cada servicio */}
                {[
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB-  DESAROLLO WEB.svg",
                    alt: "Desarrollo Web",
                    label: "Desarrollo Web",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO GRAFICO.svg",
                    alt: "Diseño Gráfico",
                    label: "Diseño Gráfico",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO DE PRODUCTOS.svg",
                    alt: "Diseño Productos",
                    label: "Diseño  Productos",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO DE INTERIORISMO.svg",
                    alt: "Diseño Interiorismo",
                    label: "Diseño Interiorismo",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- MARKETING DIGITAL.svg",
                    alt: "Marketing Digital",
                    label: "Marketing Digital",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- PUBLICIDAD.svg",
                    alt: "Publicidad",
                    label: "Publicidad",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO REDES SOCIALES.svg",
                    alt: "Contenido brRedes Sociales",
                    label: " Redes Sociales",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO ENTORNO 3D.svg",
                    alt: "Diseño Entorno 3D",
                    label: "Diseño Entorno 3D",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO ASSETS.svg",
                    alt: "Diseño Videojuego",
                    label: "Diseño Videojuego",
                  },
                ].map((service, index) => (
                  <div key={index}>
                    <Image
                      src={service.src}
                      alt={service.alt}
                      width={80}
                      height={80}
                    />
                    <div className=" absolute w-5 font-Acme text-sm text-neutral-300 flex ">
                      {service.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* 01 */}
        <div className=" relative  md:h-1/3 flex text-center justify-center items-center p-5  ">
          <div className="  font-BebasNeue border-4 border-colorBase text-4xl text-colorBase items-center justify-center">
            {" "}
            La digitalización es el futuro. Lleva tu negocio al siguiente nivel
            ahora.
          </div>

          <div className=" w-4/6 text-xs text-colorBase p-1">
            <span className=" text-5xl">!</span>Pasar al mundo digital es un desafío, pero vale la pena. Estamos aquí para apoyarte y ayudarte a crecer. ¡Juntos lo lograremos!
          </div>
        </div>
      </div>

      {/* 02 */}

      <div className="  relative  overflow-hidden md:w-1/3   ">

      
        
      <Image
          src="/DiseñoWeb/panel_04.jpg"
          alt="Diseño Ambiental"
          layout="fill"
          objectFit="cover"
        />
      
      </div>

      {/* 03 */}

      <div className=" relative w-full md:w-1/3  bg-opacity-10 backdrop-blur-md flex ">
        <Image
          src="/DiseñoWeb/panel_01.jpg"
          alt="Diseño Ambiental"
          layout="fill"
          objectFit="cover"
        />

        <div className=" overflow-scroll relative  w-3/5 p-5">
          <div className=" h-full  md:h-1/2 flex justify-center items-center ">
            <Image
              src="/DiseñoWeb/logogris.svg"
              alt="Logo"
              width={500}
              height={500}
            />
          </div>

          <h1 className="  font-Staatliches text-4xl md:text-7xl text-trend mt-4">
            CREA TU IDENTIDAD DIGITAL
          </h1>
          <div>
            <ul className=" text-3xl md:text-5xl pb-4 font-BebasNeue text-trend">
              <li> Herramientas</li>
              <li> Recursos</li>
              <li> Servicios</li>
            </ul>
          </div>
        </div>

        <div className=" relative w-1/3 text-xs p-5 bg-opacity-10 backdrop-blur-md ">
          {" "}
          <p>
            <strong>Impulsa tu Presencia Digital con un ID &Uacute;nico</strong>
          </p>
          <p>
            Con nuestro <strong>ID exclusivo</strong>, facilitar&aacute;s que
            otros accedan a tu negocio y recursos digitales. Tu ID
            conectar&aacute; a clientes y colaboradores con tu marca, mejorando
            tu visibilidad y presencia online.
          </p>
          <p>
            <strong>
              Consigue tu ID y abre las puertas a nuevas oportunidades digitales
              para tu negocio!
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyComponent;
