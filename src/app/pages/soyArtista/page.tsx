"use client";

import { useState } from "react";
import Image from "next/image";
import "../soyArtista/graficos.css";

// componentes

import CaminoIdeal from "./componentes/caminoIdeal";
import Estadistica from "./componentes/Estadisticas";

const SoyArtista: React.FC = () => {
  return (
    <div className="  text-trend h-screen">
      <div className=" p-5">
        <h1 className="  relative font-BebasNeue text-5xl ">
          COMUNIDAD INTERNET GLOBAL
        </h1>

        <span
          className="
       relative text-2xl font-Staatliches bottom-4 "
        >
          {" "}
          - Un lugar para artistas tecnicos.
        </span>
      </div>

      <div className="  flex-row  md:flex  p-5 justify-start items-start md:justify-center md:items-center  h-5/6 w-full mt-10  ">
        {/* Tendencia */}

        <div className="overflow-scroll  w-full h-full">
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
              <div className="bg-colorBase h-full w-2/3">
                <Estadistica />
              </div>
              <div className="bg-colorBase h-full w-1/3 text-trend font-Notable p-1">
                <h2 className="font-BebasNeue text-3xl">
                  CONTENIDO A CREAR POR TENDENCIA
                </h2>
                <ol >
                  <li><span className=" text-2xl font-BebasNeue">1.</span>Diseño personalizado arquitectura, Modern Farmhouse.</li>
                  <li><span className=" text-2xl font-BebasNeue">2.</span>Trafficker Digital necesito.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <CaminoIdeal />
      </div>
    </div>
  );
};

export default SoyArtista;
