"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MiComponente: React.FC = () => {
  return (
    <div>
      <section className=" relative z-0  w-screen h-screen flex-row  md:flex justify-center items-center text-center">
        <div className=" w-screen md:w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <Image
              src="/DiseñoWeb/WebRecursos/figuraWeb.png"
              alt="comic 3"
              width={800}
              height={800}
            />
          </motion.div>

          <div className=" font-BebasNeue text-6xl text-trend">
            Sal del patrón social <br /> para encontrar tu camino...
          </div>
        </div>

        <div className=" w-screen md:w-1/2 text-trend">
          <h2 className=" w-screen md:w-1/2 text-2xl font-BebasNeue">
            {" "}
            Everson Aguilar.
          </h2>
          <p>
            {" "}
            Soy <strong>un explorador,</strong> investigo como es la vida desde
            el punto de vista de lo mas natural posible. fiel a mi filosofia de
            vida, la cual es resumidad palabras, es observar y apreciar lo dulce
            y amargo que es la vida desde el espectador... la clave es observar,
            saber observar y no dejarse de envolver de una falsa realidad.{" "}
          </p>
        </div>
      </section>

      <section className=" relative z-20 h-fill w-screen bg-trend flex-row md:flex  text-center overflow-hidden ">
        <div className=" w-screen md:w-1/3 p-5 text-start text-colorBase ">
          <h2 className=" text-8xl font-BebasNeue text-colorBase">ARTISTICO</h2>
          <p className=" -translate-y-6 font-BebasNeue text-2xl">Observar del porque son las cosas...</p>

          <Image
            src="/DiseñoWeb/WebRecursos/Artistico.png"
            alt="comic 3"
            width={1200}
            height={1200}
          />

<h2 className=" text-6xl font-BebasNeue text-trend bg-colorBase">ESPECIALIDAD</h2>

          <p className="mb-5">
        
            <span className=" text-2xl font-BebasNeue">Diseñador de Ambiente,</span> especializado en modelado,
            texturizado, esculpido, animación, render fotorrealista y
            retopología. Con una habilidad destacada para crear entornos
            detallados y funcionales, se enfrenta a cada proyecto con enfoque
            estratégico y adaptabilidad. Capaz de manejar situaciones de alta
            presión y gestionar el estrés, siempre está listo para aprender
            rápidamente y superar nuevos desafíos en el mundo 3D.
          </p>

          <h2 className=" text-3xl font-BebasNeue text-colorBase">HABILIDADES</h2>


          <table className="font-Quicksand w-full border-collapse">
  <thead>
    <tr>
      <th className="border border-colorBase p-2 text-left">Tecnicas</th>
      <th className="border border-colorBase p-2 text-left">Evaluación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-colorBase p-2">Conceptualización y Referencias Visuales</td>
      <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border border-colorBase p-2">Modelado 3D de Alto Polígono</td>
      <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border border-colorBase p-2">Retopologización del Modelo</td>
      <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border border-colorBase p-2">UV Mapping</td>
      <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border border-colorBase p-2">Creación de Texturas</td>
      <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border border-colorBase p-2">Aplicación de Texturas</td>
      <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border border-colorBase p-2">Iluminación y Renderizado</td>
      <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border border-colorBase p-2">Ajustes y Optimización</td>
      <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border border-colorBase p-2">Pruebas y Evaluación</td>
      <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border border-colorBase p-2">Entrega Final</td>
      <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
    </tr>
  </tbody>
</table>



        </div>

        <div className=" w-screen md:w-1/3 h-screen flex justify-center items-center font-BebasNeue bg-trend text-trend">
            <div className=" flex justify-center items-center rounded-md p-10 bg-colorBase h-fill w-fill">
          <Image
            src="/DiseñoWeb/logoGris.svg"
            alt="comic 3"
            width={100}
            height={100}
          />
          <span className=" text-5xl"> 2</span> PERSPECTIVA DE VER LA VIDA
          </div>
        </div>

        <div className=" w-screen md:w-1/3  p-5  ">
          <h2 className=" text-8xl font-BebasNeue text-colorBase">ORDEN</h2>

          <Image
            src="/DiseñoWeb/WebRecursos/Orden.png"
            alt="comic 3"
            width={1200}
            height={1200}
          />
        </div>
      </section>

      <section className=" h-screen w-screen bg-colorBase flex-row md:flex  justify-center items-center text-center"></section>
    </div>
  );
};

export default MiComponente;
