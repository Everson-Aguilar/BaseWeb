"use client";

import { useState } from "react";
import Image from "next/image";
import "../soyArtista/graficos.css";

// componentes

import CaminoIdeal from "./componentes/caminoIdeal";
import Estadistica from "./componentes/Estadisticas";
import PaginasTrabajo from "../../components/PaginasTrabajo";


const SoyArtista: React.FC = () => {
  return (
    <div>

      <div className=" p-5">

      <h1 className=" text-trend font-BebasNeue  text-8xl">
        formas de conseguir dinero haciendo lo que te gusta!
      </h1>

      <p>
        En esta web encontrarás formas de generar ingresos como artista,
        transformando tu pasión en tu sustento. Descubre estrategias, consejos y
        oportunidades para vivir de tu creatividad y talento.
      </p>

      </div>
      

      <div className="  text-trend h-screen">



        <div className=" p-5">

          


          <h2 className="  relative font-BebasNeue text-5xl ">
            COMUNIDAD INTERNET GLOBAL
          </h2>




          <span
            className="
       relative text-2xl font-Staatliches bottom-4 "
          >
            {" "}
            - Un lugar para artistas tecnicos.
          </span>
        </div>


        <section className="p-5">

        <div className="text-8xl border-4 border-trend w-24">1.</div>

<div className=" text-2xl text-yellow-300 w-1/2 p-5 bg-trend"> + Curriculum Competitivo <span className="text-colorBase">(Pezcando Oportunidades)</span></div>


<div >

  <div className=" text-4xl font-BebasNeue">concideraciona antes de postularse.</div>

  <ul>


    <li><span className=" text-3xl font-BebasNeue w-fill bg-lime-400">1.</span>mucha competencia <span className=" font-Staatliches text-1xl  ">=</span> ser mas especifico </li>
    <li><span className=" text-3xl font-BebasNeue w-fill bg-lime-400">2.</span>tiempo recien de la oferta <span className=" font-Staatliches text-1xl  ">=</span>  ser uno de los primero</li>
  </ul>
    
  
  
  
  

  

  
  


</div>



<div className=" flex-row md:flex ">

  <div className=" w-full md:-1/2">

  <PaginasTrabajo/>


  </div>

 
 
  


 


  



</div>


</section>





        <section className="p-5">

        <div className="text-8xl border-4 border-trend  w-24">2.</div>

        <div className=" text-2xl text-lime-300 w-1/2 p-5 bg-trend"> + Ingreso Rapido <span className="text-colorBase">(Marketing Redes Sociales)</span></div>

        </section>




        <div className="  flex-row  md:flex  p-5 justify-start items-start md:justify-center md:items-center  h-5/6 w-full mt-10  ">
          {/* Tendencia */}

          <div className="overflow-scroll  w-full h-full border-4 border-trend">
            <div className="  flex  justify-start items-start  w-[800px] h-[800px] p-5  ">
              <div className="relative flex text-2xl text-center font-Staatliches text-colorBase btn-neumorfico justify-center items-center rounded-full border-2 bg-trend border-trend w-[700px] h-[700px] animate-slow-spin">
                {" "}
                {/* TENDENCIAS */}
                <div className=" flex  bg-colorBase  justify-center items-center rounded-full border-2 m-5 border-trend w-80 h-80 ">
                  {" "}
                  {/* CENTRAL */}
                  <div className="btn-neumorfico h-44 w-44 rounded-lg flex justify-center items-center animate-reverse-spin">
                    <div>
                      <Image
                        src="/DiseñoWeb/logogris.svg"
                        alt="Logo"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute left-10   animate-reverse-spin ">
                  {" "}
                  prototipado <br /> fabricaion <br /> digital
                </div>
                <div className="absolute right-10  animate-reverse-spin ">
                  {" "}
                  arquitectura <br /> Interiorismo
                </div>
                <div className="absolute top-10    animate-reverse-spin ">
                  {" "}
                  estrategia <br /> marketing
                </div>
                <div className="absolute bottom-10 animate-reverse-spin">
                  {" "}
                  diseño <br /> niveles <br />
                  videojuego
                </div>
              </div>
            </div>
          </div>

          {/* Analisis */}

          <div className=" relative p-1 flex-row h-full w-full ">
            <div className="text-trend text-5xl font-BebasNeue">
              {" "}
              ANALISIS DATOS
            </div>

            <div className=" bg-trend text-colorBase font-Notable h-full w-full p-5">
              <p>
                * Se analizará la{" "}
                <strong>
                  recopilación de interacciones obtenidas en las publicaciones
                </strong>{" "}
                a partir de estrategias para reconocer los patrones sociales que
                requiere de una necesidad especifica.
              </p>

              <div className="flex gap-2 mt-16 h-4/6 w-full ">
                <div className="bg-colorBase h-full w-2/3 ">
                  <Estadistica />
                </div>
                <div className="bg-colorBase h-full w-1/3 text-trend font-Notable p-1">
                  <h2 className="font-BebasNeue  text-xl md:text-3xl">
                    CONTENIDO A CREAR POR TENDENCIA
                  </h2>
                  <ol className=" text-xs">
                    <li>
                      <span className=" text-2xl font-BebasNeue" >1.</span>Diseño
                       Modern Farmhouse.
                    </li>
                    <li>
                      <span className=" text-2xl font-BebasNeue" >2.</span>
                      Trafficker Digital.
                    </li>
                    <li>
                      <span className=" text-2xl font-BebasNeue">3.</span>
                      Mobilarios creativos / planos.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div >
          <CaminoIdeal />
        </div>
      </div>

      
    </div>
  );
};

export default SoyArtista;
