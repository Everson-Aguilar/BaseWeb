"use client";

import React from "react";
import Image from "next/image";

//componentes

import DiagramaCircular from "../../components/diagramaCircular";
import Mapa from "../../components/mapa";
import Comentarios from "../../components/comentarios";
import Galeria from "../../components/galeria";
import Herramientas from "../../components/herramientas"
import Entrada from "../../components/entrada"
import VidaDiferente from "../../components/venAvivirUnaVidaDiferente"
import El_guias from "../../components/el_guias";

const MiComponente: React.FC = () => {
  return (



    <div >

      <El_guias/>

      <VidaDiferente/>

      

      <section className=" relative z-0   flex-row  md:flex justify-start items-start text-center">
        <div className=" w-screen md:w-1/2">
          
            <Image
              src="/DiseñoWeb/WebRecursos/figuraWeb.png"
              alt="comic 3"
              width={800}
              height={800}
            />
         

          <div className=" relative p-5 font-BebasNeue text-6xl text-trend">
            Sal del patrón social <br /> para encontrar tu camino...
          </div>
        </div>

        <div className=" relative h-screen bg:h-fill w-full  md:w-1/2 text-trend  p-5 ">

          <div className="relative top-1/2">

          <h2 className=" md:w-1/2 text-2xl font-BebasNeue">
            {" "}
            Everson Aguilar.
          </h2>
          <p>
            Soy <strong>un explorador,</strong> y me dedico a investigar cómo se
            vive la vida desde una perspectiva lo más natural posible. Fiel a mi
            filosofía de vida, que se resume en pocas palabras: observar y
            apreciar tanto lo dulce como lo amargo de la existencia, siempre
            desde la mirada del espectador... La clave es aprender a observar, a
            saber observar, sin dejarse envolver por una realidad distorsionada.
          </p>
        </div>
        </div>
      </section>

      <section className=" relative z-20 h-fill w-screen bg-trend flex-row md:flex  text-center overflow-hidden ">
        <div className=" w-screen md:w-1/3 p-5 text-start text-colorBase ">
          <h2 className=" text-8xl font-BebasNeue text-colorBase">ARTISTICO</h2>
          <p className=" -translate-y-6 font-BebasNeue text-2xl">
            Observar del porque son las cosas...
          </p>

          <Image
            src="/DiseñoWeb/WebRecursos/Artistico.png"
            alt="comic 3"
            width={1200}
            height={1200}
          />

          <h2 className=" text-6xl font-BebasNeue text-trend bg-colorBase">
            ESPECIALIDAD<span className="text-8xl"><br />(B)</span>
          </h2>

          <p className="mb-5">
            <span className=" text-2xl font-BebasNeue">
              Diseñador de Ambiente,
            </span>{" "}
            especializado en modelado, texturizado, esculpido, animación, render
            fotorrealista y retopología. Con una habilidad destacada para crear
            entornos detallados y funcionales, se enfrenta a cada proyecto con
            enfoque estratégico y adaptabilidad. Capaz de manejar situaciones de
            alta presión y gestionar el estrés, siempre está listo para aprender
            rápidamente y superar nuevos desafíos en el mundo 3D.
          </p>

          <h2 className=" text-3xl font-BebasNeue text-colorBase">
            HABILIDADES
          </h2>

          <table className="font-Quicksand w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-colorBase p-2 text-left">
                  Tecnicas
                </th>
                <th className="border border-colorBase p-2 text-left">
                  Evaluación
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-colorBase p-2">
                  Conceptualización y Referencias Visuales
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Modelado 3D de Alto Polígono
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Retopologización del Modelo
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">UV Mapping</td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Creación de Texturas
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Aplicación de Texturas
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Iluminación y Renderizado
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Ajustes y Optimización
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Pruebas y Evaluación
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">Entrega Final</td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>

          <h2 className="  mt-10 text-3xl font-BebasNeue text-colorBase">
            EDUCACION
          </h2>
          <p>
            Soy <strong>un explorador,</strong> dedicado a investigar la vida
            desde una perspectiva lo más auténtica posible. Mi filosofía de vida
            se resume en una simple idea: observar y apreciar tanto lo dulce
            como lo amargo de la existencia, siempre desde la mirada del
            espectador. La clave está en aprender a observar, a percibir con
            claridad, sin dejarse atrapar por una realidad distorsionada.
          </p>

          <div>
            {" "}
            <DiagramaCircular />{" "}
          </div>
        </div>

        <div className=" relative w-screen md:w-1/3 h-fill flex-row justify-center items-center font-BebasNeue bg-trend text-trend">
          <div className=" flex justify-center items-center  p-7 bg-colorBase h-fill w-fill">
            <Image
              src="/DiseñoWeb/logoGris.svg"
              alt="comic 3"
              width={100}
              height={100}
            />
            <span className=" text-5xl"> 2</span> PERSPECTIVA DE VER LA VIDA{" "}
            <span className=" text-5xl">(Arte y Orden)</span>
          </div>

          <h2 className="  mt-40 text-3xl font-BebasNeue text-colorBase">
           PROYECTOS 
          </h2>

          <div className=" text-colorBase">
             <Galeria />
          </div>
          {/* galeria */}
        </div>

        <div className=" w-screen md:w-1/3  p-5  text-start text-colorBase  ">
          <h2 className=" text-8xl font-BebasNeue text-colorBase">ORDEN</h2>
          <p className=" -translate-y-6 font-BebasNeue text-2xl">
            Planificar el buen camino...
          </p>

          <Image
            src="/DiseñoWeb/WebRecursos/Orden.png"
            alt="comic 3"
            width={1200}
            height={1200}
          />

          <h2 className=" text-6xl font-BebasNeue text-trend bg-colorBase">
            ESPECIALIDAD <span className="text-8xl"><br />(A)</span>
          </h2>

          <p className="mb-5">
            <span className="text-2xl font-BebasNeue">
              Desarrollador Full-Stack,
            </span>{" "}
            especializado en la creación de aplicaciones web robustas y
            escalables, manejando tanto el desarrollo front-end como back-end.
            Con un enfoque en tecnologías modernas como Next.js, optimización
            del rendimiento, creación de componentes reutilizables, y una
            profunda comprensión de la arquitectura web, aporta soluciones
            estratégicas y funcionales que transforman proyectos en experiencias
            excepcionales. Capacitado para gestionar estados, integración de
            APIs, seguridad y despliegue de aplicaciones de manera eficiente,
            siempre adaptándose a nuevos desafíos con aprendizaje constante y
            soluciones innovadoras.
          </p>

          <h2 className="text-3xl font-BebasNeue text-colorBase">
            HABILIDADES
          </h2>

          <table className="font-Quicksand w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-colorBase p-2">
                  Habilidades Técnicas
                </th>
                <th className="border border-colorBase p-2">Evaluación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-colorBase p-2">
                  Desarrollo con Next.js
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Enrutamiento y Navegación (Routing) con Next.js
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Desarrollo Full Stack (Backend y Frontend)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Integración con APIs (RESTful y GraphQL)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Manejo de Bases de Datos (SQL y NoSQL)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Desarrollo de Servidores y Configuración de VPS
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Creación de Interfaces de Usuario (UI Design)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Desarrollo de Componentes Reutilizables en React
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Optimización de Rendimiento en el Frontend
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Desarrollo y Consumo de APIs Externas
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Autenticación y Seguridad Web (JWT, OAuth)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Implementación de Web Services y Microservicios
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Diseño de Arquitectura de Aplicaciones Web
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Gestión de Estados en React (useState, Redux, Context API)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Despliegue de Aplicaciones en Plataformas como Vercel,
                  Netlify, o Heroku
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Configuración y Optimización de Servidores
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Manejo de Versiones con Git y GitHub
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Desarrollo de Funcionalidades Interactivas y Dinámicas
                  (Animaciones, Formularios, etc.)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Creación de Aplicaciones Responsivas (Mobile-First Design)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Pruebas y Depuración en el Desarrollo Web
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Desarrollo de Aplicaciones con Componentes Estilizados
                  (Tailwind CSS, Styled Components)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Uso de Frameworks y Librerías para Componentes (Material-UI,
                  Chakra UI, etc.)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Gestión de Estados y Contextos en Aplicaciones Web
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Optimización SEO para Aplicaciones Web
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Desarrollo de Páginas Estáticas y Dinámicas con Next.js
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-colorBase p-2">
                  Desarrollo de Páginas con SSR (Server-Side Rendering) y SSG
                  (Static Site Generation)
                </td>
                <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="  bg-colorBase flex-row  md:flex   justify-start items-start text-start mt-10">
        <div className=" w-full md:w-1/2 text-3xl font-BebasNeue text-trend">
          <h2 className="p-5">FREELANCER LABORAL </h2>

          <div className=" p-10">
           <Mapa /> 
          </div>
        </div>

        <div className=" h-full  w-full md:w-1/2  ">
          

          <div className="p-10">
           <Comentarios /> 
          </div>


        </div>

        
 



      </section>


      <section className=" p-5 text-trend">

      


       <Herramientas/>  

      </section>

      <section>

        <Entrada/>


      </section>



      

        

    </div>




  );
};

export default MiComponente;
