import React from "react";
import Image from "next/image";

const SocialMediaFormats: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col md:flex-row bg-base">
      <div className="mx-auto p-6  w-full md:w-1/2 ">
        <h2 className="text-3xl font-BebasNeue p-5 mb-6 text-title  border-4 border-trend w-fit">
          Formatos Comerciales en Redes Sociales y Webs
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-trend font-BebasNeue">
            Comunes:
          </h3>
          <p className="text-title mb-2">
            <span className="font-bold">Descripción:</span> Contenido que sigue
            un enfoque tradicional, fácil de entender y ampliamente aceptado. Se
            centra en mostrar la funcionalidad y beneficios del producto.
          </p>
          <ul className="list-disc list-inside ml-4 text-title">
            <li>Anuncios estáticos en redes sociales que destacan ofertas.</li>
            <li>Publicidad en webs con banners simples.</li>
            <li>Publicaciones de productos con imágenes y descripciones.</li>
            <li>
              Anuncios de video de 15-30 segundos en plataformas como Instagram
              y Facebook.
            </li>
            <li>Infografías informativas sobre productos o servicios.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-trend font-BebasNeue">
            Diferentes:
          </h3>
          <p className="text-title mb-2">
            <span className="font-bold">Descripción:</span> Formatos innovadores
            que buscan destacar entre la multitud. Utilizan creatividad y
            elementos visuales únicos para atraer al consumidor.
          </p>
          <ul className="list-disc list-inside ml-4 text-title">
            <li>Campañas virales con storytelling en redes sociales.</li>
            <li>
              Publicidad interactiva que incorpora diseño 3D para experiencias
              visuales impactantes.
            </li>
            <li>
              Contenido generado por usuarios que invita a la participación
              activa.
            </li>
            <li>
              Videos de estilo documental que narran la historia detrás de la
              marca o producto.
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-BebasNeue mb-4 text-title text-center border-4 p-5  border-trend w-fit">
          Reglas del Contenido de Redes Sociales
        </h2>
        <ul className="list-disc list-inside ml-4 text-title">
          <li>Educación</li>
          <li>Solución de Necesidades</li>
          <li>Tendencias</li>
          <li>Innovación</li>
          <li>Construcción de Comunidad</li>
          <li>Reutilización</li>
          <li>Experiencia del Usuario</li>
          <li>Diferenciación Comercial</li>
          <li>Viabilidad a Corto Plazo</li>
          <li>Calidad</li>
          <li>Análisis de Competencia</li>
          <li>Adaptabilidad</li>
          <li>Uso de Herramientas de Análisis</li>
          <li>Incorporación de Feedback</li>
          <li>Tendencias Culturales y Sociales</li>
          <li>Contenidos Basados en Datos</li>
        </ul>
      </div>

      {/* Diagramas */}

      <div className="  md:overflow-x-scroll    w-full  h-[2700px] md:h-1/2  flex-row md:flex  gap-3    p-1">


        <div className="   min-w-[350px] text-base md:w-2/6 bg-trend p-5  mt-5">
          <div className=" h-[500px] w-full bg-message mb-5">images</div>

          <div className="flex">
            <div className=" w-2/3">
              <h2 className=" text-2xl  font-BebasNeue">
              Crea Publicidad 3D Realista para Redes Sociales
              </h2>

              <div>
                <h3 className=" text-1xl font-BebasNeue text-cyan-600 ">
                  Paquete Básico:
                </h3>
                <ul className="font-Notable text-xs">
                  <li>
                    {" "}
                    <span className=" text-lime-400">+</span>15 imágenes 3D
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>2 videos en 3D de
                    15 segundos
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>1 revisión
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" text-1xl font-BebasNeue text-yellow-300">
                  Paquete Avanzado:
                </h3>
                <ul className="font-Notable text-xs">
                  <li>
                    <span className=" text-lime-400">+</span>23 imágenes 3D
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>4 videos en 3D de
                    30 segundos
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>2 revisiones
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" text-1xl font-BebasNeue text-red-600">
                  Paquete Premium:
                </h3>
                <ul className="font-Notable text-xs">
                  <li>
                    <span className=" text-lime-400">+</span>31 imágenes 3D
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>6 videos en 3D (1
                    de 30 segundos y 1 de 15 segundos)
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>2 revisiones
                  </li>
                </ul>
              </div>
            </div>

            <div className=" border-l-4 pl-2 ">
              <span className=" text-7xl font-BebasNeue w-1/2">1 mes</span>{" "}
              <br />{" "}
              <span className="font-BebasNeue text-3xl ">
                contenido <br /> diario <br /> para tus <br /> redes sociales{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="  min-w-[350px] text-base md:w-2/6 bg-trend p-5  mt-5 ">
          <div className=" h-[500px] w-full bg-message mb-5">images</div>

          <div className="flex ">
            <div className=" w-2/3">
              <h2 className=" text-2xl  font-BebasNeue">
                Contenido 3D Impactante para Marketing Efectivo
              </h2>

              <div>
                <h3 className=" text-1xl font-BebasNeue text-cyan-600 ">
                  Paquete Básico:
                </h3>
                <ul className="font-Notable text-xs">
                  <li>
                    {" "}
                    <span className=" text-lime-400">+</span>15 imágenes 3D
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>2 videos en 3D de
                    15 segundos
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>1 revisión
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" text-1xl font-BebasNeue text-yellow-300">
                  Paquete Avanzado:
                </h3>
                <ul className="font-Notable text-xs">
                  <li>
                    <span className=" text-lime-400">+</span>23 imágenes 3D
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>4 videos en 3D de
                    30 segundos
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>2 revisiones
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" text-1xl font-BebasNeue text-red-600">
                  Paquete Premium:
                </h3>
                <ul className="font-Notable text-xs">
                  <li>
                    <span className=" text-lime-400">+</span>31 imágenes 3D
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>6 videos en 3D (1
                    de 30 segundos y 1 de 15 segundos)
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>2 revisiones
                  </li>
                </ul>
              </div>
            </div>

            <div className=" border-l-4 pl-2 ">
              <span className=" text-7xl font-BebasNeue w-1/2">1 mes</span>{" "}
              <br />{" "}
              <span className="font-BebasNeue text-3xl ">
                contenido <br /> diario <br /> para tus <br /> redes sociales{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="   min-w-[350px] text-base md:w-2/6 bg-trend p-5  mt-5">
          <div className=" h-[500px] w-full bg-message mb-5">images</div>

          <div className="flex">
            <div className=" w-2/3">
              <h2 className=" text-2xl  font-BebasNeue">
                Videos 3D Impactantes para Marketing Profesional
              </h2>

              <div>
                <h3 className=" text-1xl font-BebasNeue text-cyan-600 ">
                  Paquete Básico:
                </h3>
                <ul className="font-Notable text-xs">
                  <li>
                    {" "}
                    <span className=" text-lime-400">+</span>15 imágenes 3D
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>2 videos en 3D de
                    15 segundos
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>1 revisión
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" text-1xl font-BebasNeue text-yellow-300">
                  Paquete Avanzado:
                </h3>
                <ul className="font-Notable text-xs">
                  <li>
                    <span className=" text-lime-400">+</span>23 imágenes 3D
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>4 videos en 3D de
                    30 segundos
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>2 revisiones
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" text-1xl font-BebasNeue text-red-600">
                  Paquete Premium:
                </h3>
                <ul className="font-Notable text-xs">
                  <li>
                    <span className=" text-lime-400">+</span>31 imágenes 3D
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>6 videos en 3D (1
                    de 30 segundos y 1 de 15 segundos)
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>2 revisiones
                  </li>
                </ul>
              </div>
            </div>

            <div className=" border-l-4 pl-2 ">
              <span className=" text-7xl font-BebasNeue w-1/2">1 mes</span>{" "}
              <br />{" "}
              <span className="font-BebasNeue text-3xl ">
                contenido <br /> diario <br /> para tus <br /> redes sociales{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFormats;
