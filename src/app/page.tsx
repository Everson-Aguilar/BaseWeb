"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//componente

import Header from "./components/header";

//fuentes

import "./globals.css";

//css

import "./css/estructura.css";
import "./css/animaciones.css";
import "./css/galeria.css";

//image galeria

const images = [
  "/DiseñoWeb/portfolio/g1.jpg",
  "/DiseñoWeb/portfolio/g2.jpg",
  "/DiseñoWeb/portfolio/g3.jpg",
  "/DiseñoWeb/portfolio/g4.jpg",
  "/DiseñoWeb/portfolio/g5.jpg",
  "/DiseñoWeb/portfolio/g6.jpg",
  "/DiseñoWeb/portfolio/g7.jpg",
  "/DiseñoWeb/portfolio/g8.jpg",
  "/DiseñoWeb/portfolio/g9.jpg",
  "/DiseñoWeb/portfolio/g10.jpg",
  "/DiseñoWeb/portfolio/g11.jpg",
  "/DiseñoWeb/portfolio/g12.jpg",
];

//enrutamiento base

//fin enrutamiento base

export default function Home() {
  // galeria funciones

  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState(false); // Estado para la confirmación
  const [componentName, setComponentName] = useState(""); // Estado para el nombre del componente importado

  const handleClick = (id) => {
    const buttonNumber = parseInt(id.substring(1));
    const componentName = `lote${buttonNumber}/page`; // Nombre de la carpeta y archivo

    import(`./biblioteca/${componentName}`)
      .then((module) => {
        setConfirmation(true);
        setComponentName(componentName);
        console.log("Componente importado:", componentName); // Mensaje de impresión en la consola
      })
      .catch((error) => {
        console.error(`Error al importar ${componentName}`, error); // Mensaje de alerta en la consola
        setError(error);
        alert(`Error al importar ${componentName}: ${error.message}`); // Alerta al usuario con el mensaje de error
      });
  };

  const ids = images.map((_, index) => `b${index + 1}`);

  // fin galeria funciones

  return (
    <div className="App">
      <Head>
        <title>SERVICIO DE DISEÑO DE ENTORNO 3D</title>

        <meta
          name="description"
          content="Descubre nuestros servicios en diseño 3D para entornos, planos de construcción y accesorios. En 3Dscape, convertimos ideas en realidad con modelos virtuales detallados y visualizaciones realistas."
        />
        <meta
          name="keywords"
          content="diseño 3D, modelado 3D, renderizado, visualización arquitectónica, diseño de interiores, animación 3D, simulaciones 3D"
        />
        {/* Otras meta etiquetas según sea necesario */}
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <div className="h-[60px] min-w-[412px] bg-neutral-600"></div>

        <section className="base">
          <div className="contenedor1">
            <div className="absolute  text-5xl z-10   text-stone-600  p-4 h-2/5 w-2/3 ">
              <Image
                src="/DiseñoWeb/logogrisoscuro.svg"
                alt="Logo"
                width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
                height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
              />

              <h1 className="font-Staatliches text-7xl text-stone-600  mt-4">
                3D DISEÑO ENTORNO PLAN:
              </h1>

              <div>
                <ul className="text-5xl font-SixCaps text-stone-600   ">
                  <li>+ Terreno</li>
                  <li>+Construcción</li>
                  <li>+ Accesorios</li>
                </ul>
              </div>
            </div>

            <div className="absolute  font-Acme bg-slate-300 bg-opacity-10 backdrop-blur-md box-border p-3 z-20 text-stone-600  w-1/3 h-full right-0 text-1xl">
              <span className=" relative text-5xl ">E</span>n 3Dscape,
              transformamos ideas en realidad mediante modelos virtuales
              detallados y visualizaciones realistas. Nuestra experiencia abarca
              diversas industrias, incluyendo arquitectura, cine, videojuegos y
              más. Ofrecemos soluciones personalizadas que combinan creatividad,
              precisión y sostenibilidad.
            </div>

            <div className="imagen relative">
              <Image
                src="/DiseñoWeb/panel_01gris.jpg"
                alt="Diseño Ambiental"
                layout="fill" // Ajusta la imagen para llenar todo el contenedor
                objectFit="cover" // Ajusta la imagen para cubrir el contenedor sin distorsión
              />
            </div>
          </div>

          <div className=" portada w-full box-border overflow-hidden  ">
            <div className="bg-slate-500 h-full ">
              <img
                src="/DiseñoWeb/panel_04.jpg"
                alt="Logo"
                className="w-full  h-full  min-w-96"
              />
            </div>
          </div>

          <div className="contenedor2">
            <div className="flex  justify-center">
              <div className="  text-neutral-300 h-auto w-2/3 text-center justify-center text-3xl  font-Staatliches ">
                servicios disponibles
              </div>
            </div>

            <div className=" flex  h-1/2 max-h-full items-center justify-center ">
              <div className="  flex  items-center justify-center">
                {/*                       items  servicios                         */}

                <div className="grid2 box-border">
                  {/*items servicios*/}

                  <div className="imagen animacion_1">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="environment3D"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-neutral-300 flex items-center justify-center">
                      Diseño Ambiental
                    </div>
                  </div>

                  {/*items servicios*/}
                  <div className="imagen animacion_2">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="modelado3d"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-neutral-300 flex items-center justify-center">
                      Modelado 3D
                    </div>
                  </div>

                  {/*items servicios*/}
                  <div className="imagen imagen animacion_3">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="superficies duras 3d"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-neutral-300 flex items-center justify-center">
                      Superficies Duras
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="unity unreal engine"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-neutral-300 flex items-center justify-center">
                      Unity/Unreal Engine
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="escultura 3d"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-neutral-300 flex items-center justify-center">
                      Escultura 3D
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="plano arquitectonico"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-neutral-300 flex items-center justify-center">
                      Plano Arquitectonico
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="mobilarios"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14  font-Acme text-1xl text-neutral-300 flex items-center justify-center">
                      Mobilarios
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="diseño niveles"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-neutral-300 flex items-center justify-center">
                      Diseño Niveles
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="diseño objetos 3d"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className="  mt-14 font-Acme text-1xl text-neutral-300 flex items-center justify-center">
                      Objetos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*                    FIN-items  servicios                         */}

            <div className="   justify-center   flex h-1/2  w-full  ">
              <div>
                <div className="  box-border  p-5 flex items-center justify-center flex-col  h-4/5 w-full text-4xl font-BebasNeue text-neutral-300  border-2  border-neutral-300 mt-20  ">
                  <div className="text-5xl ">
                    DISEÑOS <br /> PRECIOS <br />
                    ECONOMICOS
                  </div>
                  <div className="text-9xl">50%</div>
                </div>
              </div>

              <div className=" max-w-40 text-xs  text-neutral-300 box-border items-center justify-center flex-col h-full   p-5 overflow-hidden">
                <span className="break-words">
                  <p>
                    Ofrecemos precios justos y equitativos adaptados al
                    proyecto. Nos enfocamos en ayudar a pequeños emprendedores
                    con productos económicos que cumplen sus necesidades.
                  </p>
                  <p className="font-BebasNeue text-2xl">Incluye:</p>
                  <ul className="text-stone-400 ">
                    <li>- Modelado 3D de [objetos/arquitectura/productos].</li>
                    <li>- Texturización y materiales realistas.</li>
                    <li>- Renderizado de alta calidad.</li>
                    <li>- Revisión y ajustes según tu retroalimentación.</li>
                    <li>
                      - Entrega en formatos estándar para fácil integración.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/*separador*/}

        <section className="base">
          <div className=" grid3 ">
            <div className="  w-full flex-row justify-center items-center text-end ">
              <div className=" h-1/2 text-sm  p-3">
                <p>
                  <strong className=" tracking-wide  font-Acme  text-neutral-300 text-xl">
                    PASOS PARA CREAR ACCESORIOS COMO ARTISTA DIGITAL:
                  </strong>
                </p>
                <ul className="font-BebasNeue text-1xl text-neutral-400  ">
                  <li>*Conceptualizaci&oacute;n y Referencias Visuales</li>
                  <li>*Modelado 3D de Alto Pol&iacute;gono</li>
                  <li>*Retopolog&iacute;a del Modelo</li>
                  <li>*UV Mapping</li>
                  <li>*Creaci&oacute;n de Texturas</li>
                  <li>*Aplicaci&oacute;n de Texturas</li>
                  <li>*Iluminaci&oacute;n y Renderizado</li>
                  <li>*Ajustes y Optimizaci&oacute;n</li>
                  <li>*Pruebas y Evaluaci&oacute;n</li>
                  <li>*Entrega Final</li>
                </ul>
              </div>
            </div>
            <div className=" w-full flex-row justify-center  items-center  bg-neutral-500 ">
              <div className=" h-full w-full flex items-center text-stone-600  p-5 ">
                <Image
                  src="/DiseñoWeb/logogris.svg"
                  alt="Logo"
                  width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
                  height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
                />
              </div>
            </div>
            <div className=" w-full  text-end  overflow-hidden border-r-neutral-400     border-r-2">
              <span className=" font-Acme  text-neutral-300 text-xl ">
                TECNOLOGIAS
              </span>
              <div className=" h-full p-3 box-border ">
                <div className=" h-1/2 p-2">
                  <ul className="text-xs text-neutral-400 font-PermanentMarker">
                    <li>Autodesk Maya</li>
                    <li>Blender</li>
                    <li>Autodesk 3ds Max</li>
                    <li>ZBrush</li>
                    <li>Substance Painter</li>
                    <li>Unity 3D / Unreal</li>
                    <li>Adobe After Effects</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="  box-border flex-row overflow-hidden  items-center justify-center text-center ">
              <span className="font-Acme  text-neutral-300 text-xl ">
                GRATIS PARA TI !
              </span>
              <div className=" p-5 max-full text-xs text-neutral-400 font-PermanentMarker">
                <span className=" text-2xl text-neutral-200">!</span> En nuestra
                sección gratuita, ofrecemos consejos prácticos y accesibles para
                mejorar tus espacios con soluciones de diseño funcional y
                estético. Desde ideas básicas hasta avanzadas, buscamos
                inspirarte y proporcionarte herramientas prácticas para
                transformar tus entornos fácilmente
                <span className=" text-2xl text-neutral-200">.</span>
              </div>
            </div>
          </div>

          <div>
            <div className=" text-neutral-300 text-8xl font-BebasNeue">
              PORTFOLIO
            </div>

            {/* galeria */}

            <div>
              {error && (
                <div>Error al cargar el componente: {error.message}</div>
              )}
              {confirmation && <div>Componente importado correctamente.</div>}
              <div className="galeria w-full h-full grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`Imagen ${index + 1}`}
                      width={400}
                      height={400}
                    />
                    <Link href={`/biblioteca/lote${index + 1}`} passHref>
                      <button
                        id={ids[index]}
                        className="absolute h-5 w-auto top-2 right-2 bg-neutral-800 text-black px-3 py-1 rounded-md shadow-md"
                        onClick={() => handleClick(ids[index])}
                      >
                        <Image
                          src="/DiseñoWeb/ver.svg"
                          alt="ver"
                          layout="fill"
                          objectFit="fill"
                        />
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* fin galeria */}
          </div>

          <div>
            <div className="imagen ">
              <img
                src="/DiseñoWeb/panel_03.jpg"
                alt="paisaje"
                className=" min-w-96 h-4/5 "
              />
            </div>
          </div>
        </section>
      </main>

      <footer className=" footer w-full  text-neutral-400 ">
        <div className="ml-5">
          <section>
            <h2>Contacto</h2>
            <address>
              <p>Dirección: COLOMBIA</p>
              <p>
                Email:{" "}
                <a href="mailto:aguilar3dstudio@gmail.com">
                  aguilar3dstudio@gmail.com
                </a>
              </p>
              <p>
                Teléfono: <a href="tel:+573052158161">+57 305 215 81 61</a>
              </p>
            </address>
          </section>
          <section>
            <h2>Redes Sociales</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
            </ul>
          </section>
          <section>
            <p className="text-center">
              © 2024 3Dscape. Todos los derechos reservados. Diseñado por
              3Dscape.
            </p>
          </section>
        </div>
      </footer>
    </div>
  );
}

/* git-hub pasos para guardar
git add .
git commit -m "subir"
git pull origin main
git push origin main */
