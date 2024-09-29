/* eslint-disable @next/next/no-img-element */
"use client";

///////////////////////////////// ALMACENAMIENTO

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//componente

import Administracion from "./components/administracion";
import Header from "./components/header";
import El_guias from "./components/el_guias";
import Retiro from "./components/retiro";
import Reglas from "./components/reglas";

//fuentes

import "./globals.css";

//css

import "./css/estructura.css";
import "./css/animaciones.css";
import "./css/galeria.css";

//image galeria - CONTROL MINIATURA PEQUEÑAS

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
];

///////////////////////////////// ALMACENAMIENTO

export default function Home() {
  {
    /*   FUNCIONES DE LA APLICACION & REGLAS - MENU  03 */
  }

  // galeria funciones

  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState(false); // Estado para la confirmación
  const [componentName, setComponentName] = useState(""); // Estado para el nombre del componente importado

  const handleClick = (id: string) => {
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

  {
    /* EXIT FUNCIONES DE LA APLICACION & REGLAS - MENU 03*/
  }

  return (
    <div className="App ">
      {/* FIN   DE RESULTAD DE BUSCADORES     */}

      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!       NAVEGACION APLICACION*/}

      <header>
        <Header />
      </header>

      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! EXIT  NAVEGACION APLICACION*/}

      {/*       v              ENTER MAIN            v          */}
      {/* INFORMACION:   esta es la parte donde estan lo elementos grandes de la aplicacion!*/}

      <main>
        {/*Ajuste Base Aplicacion     00  */}
        <div className="bg-neutral-600 h-16 w-full "></div>
        {/*Fin base Ajuste Aplicacion 00  */}

        {/*********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************/}
        {/*presentacion y servicios    01-----------------------------------------------------*/}

        <section>
          {" "}
          <Administracion />
        </section>

        <section className="base">
          <div className="contenedor1">
            <div className="absolute  text-5xl z-10   text-stone-600  p-4 h-2/5 w-2/3 ">
              <Image
                src="/DiseñoWeb/logogrisoscuro.svg"
                alt="Logo"
                width={800} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
                height={800} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
              />

              <h1 className="font-Staatliches text-7xl text-stone-600  mt-4">
                CREA TU IDENTIDAD DIGITAL
              </h1>

              <div>
                <ul className="text-5xl font-BebasNeue text-stone-600   ">
                  <li> Herramientas</li>
                  <li> Recursos</li>
                  <li> Servicios</li>
                </ul>
              </div>
            </div>

            <div className="absolute  font-Acme bg-slate-300 bg-opacity-10 backdrop-blur-md box-border p-3 z-20 text-stone-600  w-1/3 h-full right-0 text-1xl">
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
                alt="Descripción de la imagen"
                className="w-full h-full min-w-96"
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
                      Desarrollo Web
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
                      Diseño Gráfico
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
                      Diseño Productos
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
                      Diseño Interiorismo
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
                      Marketing Digital
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
                      Publicidad
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
                      Contenido Redes Sociales
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
                      Diseño Entorno 3D
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
                      Diseño Assets
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*                    FIN-items  servicios                         */}

            <div className="   justify-center   flex h-1/2  w-full  ">
              <div>
                <div className="  box-border  p-5 flex items-center justify-center   h-4/5 w-full text-4xl font-BebasNeue text-neutral-300  border-2  border-neutral-300 mt-20  ml-3 ">
                  La digitalización es el futuro. Lleva tu negocio al siguiente
                  nivel ahora.
                </div>
              </div>

              <div className=" max-w-40 text-xs  text-neutral-300 box-border items-center justify-center flex-col h-full   p-5 overflow-hidden">
                <span className="break-words">
                  <div>
                    <span className="text-6xl"> !</span>Entendemos que pasar al
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

        {/*FIN presentacion y servicio 01=================================================*/}

        {/*********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************/}



        {/* componente vacio seccion ==========================================================*/}
        <section><Reglas/></section>
        {/*Fin componente vacio seccion =======================================================*/}



                {/* componente vacio seccion ==========================================================*/}
                <section></section>
        {/*Fin componente vacio seccion =======================================================*/}



        {/*********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************/}
        {/*portfolio y explicacion tecnica artistica     03-------------------------------*/}
        <section className="base mt-10">
          <div className=" grid3  ">
            <div className="  w-full flex-row justify-center items-center text-end ">
              <div className=" h-1/2 text-sm  p-3">
                <div>
                  <div className=" tracking-wide  font-Acme  text-neutral-300 text-xl">
                    PASOS PARA CREAR ACCESORIOS COMO ARTISTA DIGITAL:
                  </div>
                </div>
                <ul className="font-Staatliches text-1xl text-neutral-400  ">
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
            <div className="   w-full flex-row justify-center  items-center   ">
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
                  <ul className="text-xs text-neutral-400 font-Staatliches">
                    <li>Autodesk Revit</li>
                    <li>Blender</li>
                    <li>ZBrush</li>
                    <li>Substance Painter</li>
                    <li>Unity 3D / Unreal</li>
                    <li>Adobe After Effects</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Premier</li>
                    <li>Adobe Illustrator</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="  box-border flex-row overflow-hidden  items-center justify-center text-center ">
              <span className="font-Acme  text-neutral-300 text-xl ">
                CONCEPTO TECNICO Y ARTISTICO!
              </span>
              <div className=" p-5 max-full text-xs text-neutral-400 font-Staatliches">
                <span className=" text-2xl text-neutral-200">!</span> Nuestro
                enfoque combina sólidos conocimientos técnicos y una visión
                artística detallada, asegurando que cada proyecto digital sea
                ejecutado con el más alto nivel de profesionalismo. Tu negocio
                merece lo mejor, y estamos aquí para ofrecerte soluciones que
                realmente marquen la diferencia.
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
            <div className="imagen_relleno  mt-2 ">
              <img
                src="/DiseñoWeb/panel_03.jpg"
                alt="paisaje"
                className=" min-w-96 h-4/5  "
              />
            </div>
          </div>
        </section>
        {/*FIN portfolio y explicacion tecnica artistica 03-------------------------------*/}
        {/*********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************/}

        {/* componente  ==========================================================*/}
        <section>
          <Retiro />
        </section>
        {/*Fin componente =======================================================*/}
      </main>

      {/*       v              EXIT MAIN            v          */}

      {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$--POLITICA--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

      <div>
        <El_guias />
      </div>

      <footer className=" footer z-40  w-full mt-10  text-neutral-400  ">
        <div className="p-5 text-xs">
          <section>
            <div className="font-Jacquard12 text-2xl ">Contacto</div>
            <address>
              <div>aguilar3dstudio@gmail.com</div>
            </address>
          </section>
          <section>
            <div className="font-Jacquard12 text-2xl">Redes Sociales</div>
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
            </ul>
          </section>
          <section>
            <p className="text-center">
              © 2024 tudigitalnegocio.com. Todos los derechos reservados.
            </p>
          </section>
        </div>
      </footer>

      {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$--FIN   POLITICA--$$$$$$$$$$$$$$$$$$$$$$$$$ */}
    </div>
  );
}

{
  /*  GUARDAR Y SUBIR APLICACION   */
}
/* git-hub pasos para guardar CONSOLA (prueba)
git add .
git commit -m "subir"
git pull origin main
git push origin main */

/* git-hub pasos para guardar CONSOLA (produccion)
git add .
git commit -m "29/09/2024"
git pull origin develop
git push origin develop */
