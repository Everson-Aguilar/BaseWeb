/* eslint-disable @next/next/no-img-element */
"use client";

///////////////////////////////// ALMACENAMIENTO

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//componente

import Administracion from "./components/administracion";
import Header from "./components/header";
import El_guias from "./components/el_guias";
import Retiro from "./components/retiro";
import Reglas from "./components/reglas";
import Introduccion from "./components/introduccion";
import Exposicion from "./components/exposicionClientes";
import PrecioServicio from "./components/paquetes";
import Portfolio from "./components/portfolio"

//fuentes

import "./globals.css";

//css

import "./css/estructura.css";
import "./css/animaciones.css";




export default function Home() {




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
        <div className="bg-message h-16 w-full "></div>
        {/*Fin base Ajuste Aplicacion 00  */}

        {/*********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************/}
        {/*presentacion y servicios    01-----------------------------------------------------*/}

        <section>
          
          <Administracion />
        </section>

        {/* componente vacio seccion ==========================================================*/}
        <section className=" mt-5">
      
          <Introduccion />
        </section>
        {/*Fin componente vacio seccion =======================================================*/}

        {/* componente exposicion seccion ==========================================================*/}
        <section>
          <Exposicion />
        </section>
        {/*Fin componente exposicion seccion =======================================================*/}


        <section className="base mt-40">
          <div className="contenedor1  ">
            <div className="absolute  z-10    p-4 h-2/5 w-2/3 ">
              <Image
                src="/DiseñoWeb/logogris.svg"
                alt="Logo"
                width={500} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
                height={500} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
              />

              <h1 className="font-Staatliches text-7xl text-trend  mt-4">
                CREA TU IDENTIDAD DIGITAL
              </h1>

              <div>
                <ul className="text-5xl font-BebasNeue text-trend  ">
                  <li> Herramientas</li>
                  <li> Recursos</li>
                  <li> Servicios</li>
                </ul>
              </div>
            </div>

            <div className="absolute text-title bg-slate-300 bg-opacity-10 backdrop-blur-md box-border p-3 z-20   w-1/3 h-full right-0 text-1xl">
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
              <div className="  text-neutral-300 translate-y-5   justify-center text-3xl  font-Staatliches ">
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
                      src="/DiseñoWeb/iconos/servicios/ICONOS WEB-  DESAROLLO WEB.svg"
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
                      src="/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO GRAFICO.svg"
                      alt="DISEÑO GRAFICO"
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
                      src="/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO DE PRODUCTOS.svg"
                      alt="diseño productos"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-message flex items-center justify-center">
                      Diseño Productos
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO DE INTERIORISMO.svg"
                      alt="diseño interiorismo"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-message flex items-center justify-center">
                      Diseño Interiorismo
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/iconos/servicios/ICONOS WEB- MARKETING DIGITAL.svg"
                      alt="marketing digital"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-message flex items-center justify-center">
                      Marketing Digital
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/iconos/servicios/ICONOS WEB- PUBLICIDAD.svg"
                      alt="plano arquitectonico"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-message flex items-center justify-center">
                      Publicidad
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO REDES SOCIALES.svg"
                      alt="mobilarios"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14  font-Acme text-1xl text-message flex items-center justify-center">
                      Contenido Redes Sociales
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO ENTORNO 3D.svg"
                      alt="diseño niveles"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-message flex items-center justify-center">
                      Diseño Entorno 3D
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO ASSETS.svg"
                      alt="diseño objetos 3d"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className="  mt-14 font-Acme text-1xl text-message flex items-center justify-center">
                      Diseño Assets
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*                    FIN-items  servicios                         */}

            <div className="   justify-center   flex h-1/2  w-full  ">
              <div>
                <div className="  box-border  p-5 flex items-center justify-center   h-3/5 w-full text-4xl font-BebasNeue text-message border-2  border-message mt-20  ml-3 ">
                  La digitalización es el futuro. Lleva tu negocio al siguiente
                  nivel ahora.
                </div>
              </div>

              <div className=" max-w-40 text-xs  text-message box-border items-center justify-center flex-col h-full   p-5 overflow-hidden">
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

        {/* componente reglas seccion ==========================================================*/}
        <section className="mt-20">
          <Reglas />
        </section>
        {/*Fin componente reglas seccion =======================================================*/}


             {/* componente precio servicio ==========================================================*/}
             <section className=" mt-20"> <PrecioServicio/></section>
        {/*Fin componente precio servicio =======================================================*/}







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
        <section className=" mt-5"><Portfolio  /></section>
        

        {/*FIN portfolio y explicacion tecnica artistica 03-------------------------------*/}
        {/*********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************
         **********************************************************************************/}

        {/* componente  ==========================================================*/}
        <section className=" mt-10">
          <Retiro />
        </section>
        {/*Fin componente =======================================================*/}
      </main>

      {/*       v              EXIT MAIN            v          */}

      {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$--POLITICA--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

      <div>
        <El_guias />
      </div>

      <footer className=" footer z-40  w-full mt-10  text-message ">
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
git commit -m "28/10/2024"
git pull origin main
git push origin main */

/* git-hub pasos para guardar CONSOLA (produccion)
git add .
git commit -m "28/10/2024"
git pull origin develop
git push origin develop */
