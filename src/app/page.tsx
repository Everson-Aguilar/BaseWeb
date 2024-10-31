
"use client";









///////////////////////////////// ALMACENAMIENTO

import React, { useEffect, useRef, useState } from 'react'; // efecto, referencia, estado
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
import CompetenciaComercial from "./components/competenciaComercial"
import Servicios from "./components/servicios"

//fuentes

import "./globals.css";

//css

import "./css/estructura.css";
import "./css/animaciones.css";




export default function Home() {



  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++     desplazamiento Inicial Web ajustes     ++++++++++++++++++++++
  

  const componenteRef = useRef<HTMLDivElement | null>(null);
  const [altura, setAltura] = useState(0);
  const ajusteAltura = 50; // Ajuste de altura en píxeles
  
  const obtenerAltura = () => {
    if (componenteRef.current) {
      const rect = componenteRef.current.getBoundingClientRect();
      const alturaDocument = rect.top + window.scrollY;
      setAltura(alturaDocument);
      return alturaDocument; // Retorna la altura calculada
    }
    return 0; // Retorna 0 si no hay referencia
  };
  
  const desplazarVentana = (altura: number) => {
    window.scrollTo(0, altura - ajusteAltura); // Desplazar a la altura del componente menos el ajuste
  };
  
  useEffect(() => {
    // Obtener la altura inicial al montar el componente
    const alturaInicial = obtenerAltura();
    desplazarVentana(alturaInicial);
  }, [componenteRef]); // `componenteRef` como dependencia
  

  
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++     FIN    desplazamiento Inicial Web ajustes++++++++++++++++++++++



  
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

        <section>
          <CompetenciaComercial/>
        </section>


        {/* componente exposicion seccion ==========================================================*/}
        <section>
          <Exposicion />
        </section>
        {/*Fin componente exposicion seccion =======================================================*/}

        {/* presentacion y servicio 01=================================================*/}


        <div ref={componenteRef} className=''>
        <Servicios />
      </div>
        

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
              <div>eversonaguilar1@gmail.com</div>
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
git commit -m "30/10/2024"
git pull origin main
git push origin main */

/* git-hub pasos para guardar CONSOLA (produccion)
git add .
git commit -m "30/10/2024"
git pull origin develop
git push origin develop */
