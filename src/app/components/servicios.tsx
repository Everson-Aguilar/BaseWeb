import React from 'react';
import Image from 'next/image';


// css

import "../css/estructura.css";
import "../css/animaciones.css";


const DigitalIdentity: React.FC = () => {
  return (
    <section className="base bg-trend ">
      <div className="contenedor1">
        <div className="absolute z-10 p-4 h-2/5 w-2/3">
          <Image
            src="/DiseñoWeb/logogris.svg"
            alt="Logo"
            width={500}
            height={500}
          />
          <h1 className="font-Staatliches text-7xl text-trend mt-4">
            CREA TU IDENTIDAD DIGITAL
          </h1>
          <div>
            <ul className="text-5xl font-BebasNeue text-trend">
              <li> Herramientas</li>
              <li> Recursos</li>
              <li> Servicios</li>
            </ul>
          </div>
        </div>

        <div className="absolute text-title bg-slate-300 bg-opacity-10 backdrop-blur-md box-border p-3 z-20 w-1/3 h-full right-0 text-1xl">
          <p>
            <strong>
              Impulsa tu Presencia Digital con un ID &Uacute;nico
            </strong>
          </p>
          <p>
            Con nuestro <strong>ID exclusivo</strong>, facilitar&aacute;s
            que otros accedan a tu negocio y recursos digitales. Tu ID
            conectar&aacute; a clientes y colaboradores con tu marca,
            mejorando tu visibilidad y presencia online.
          </p>
          <p>
            <strong>
              Consigue tu ID y abre las puertas a nuevas oportunidades
              digitales para tu negocio!
            </strong>
          </p>
        </div>

        <div className="imagen relative">
          <Image
            src="/DiseñoWeb/panel_01.jpg"
            alt="Diseño Ambiental"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="portada w-full box-border overflow-hidden">
        <div className="bg-slate-500 h-full">
          <img
            src="/DiseñoWeb/panel_04.jpg"
            alt="Descripción de la imagen"
            className="w-full h-full min-w-96"
          />
        </div>
      </div>

      <div className="contenedor2">
        <div className="flex justify-center">
          <div className="text-neutral-300 translate-y-5 justify-center text-3xl font-Staatliches">
            servicios disponibles
          </div>
        </div>

        <div className="flex h-1/2 max-h-full items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="grid2 box-border">
              {/* Repite este bloque para cada servicio */}
              {[
                { src: '/DiseñoWeb/iconos/servicios/ICONOS WEB-  DESAROLLO WEB.svg', alt: 'Desarrollo Web', label: 'Desarrollo Web' },
                { src: '/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO GRAFICO.svg', alt: 'Diseño Gráfico', label: 'Diseño Gráfico' },
                { src: '/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO DE PRODUCTOS.svg', alt: 'Diseño Productos', label: 'Diseño Productos' },
                { src: '/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO DE INTERIORISMO.svg', alt: 'Diseño Interiorismo', label: 'Diseño Interiorismo' },
                { src: '/DiseñoWeb/iconos/servicios/ICONOS WEB- MARKETING DIGITAL.svg', alt: 'Marketing Digital', label: 'Marketing Digital' },
                { src: '/DiseñoWeb/iconos/servicios/ICONOS WEB- PUBLICIDAD.svg', alt: 'Publicidad', label: 'Publicidad' },
                { src: '/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO REDES SOCIALES.svg', alt: 'Contenido Redes Sociales', label: 'Contenido Redes Sociales' },
                { src: '/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO ENTORNO 3D.svg', alt: 'Diseño Entorno 3D', label: 'Diseño Entorno 3D' },
                { src: '/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO ASSETS.svg', alt: 'Diseño Videojuego', label: 'Diseño Videojuego' },
              ].map((service, index) => (
                <div key={index} className="imagen animacion_1">
                  <Image
                    src={service.src}
                    alt={service.alt}
                    layout="fill"
                    objectFit="fill"
                  />
                  <div className="mt-14 font-Acme text-1xl text-neutral-300 flex items-center justify-center">
                    {service.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="justify-center flex h-1/2 w-full">
          <div>
            <div className="box-border p-5 flex items-center justify-center h-3/5 w-full text-4xl font-BebasNeue text-message border-2 border-message mt-20 ml-3">
              La digitalización es el futuro. Lleva tu negocio al siguiente nivel ahora.
            </div>
          </div>

          <div className="max-w-40 text-xs text-message box-border items-center justify-center flex-col h-full p-5 overflow-hidden">
            <span className="break-words">
              <div>
                <span className="text-6xl">!</span>Entendemos que pasar al
                mundo digital es un desafío para los negocios tradicionales.
                Este proceso puede ser lento y experimental, pero tomar el
                riesgo vale la pena; te hará ver la vida de manera
                diferente. Estamos aquí para apoyarte y ayudarte a crecer en
                la era digital. ¡Juntos lo lograremos!
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalIdentity;
