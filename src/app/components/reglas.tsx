import React from "react";
import Image from "next/image";
import { useRef, useState, MouseEvent } from "react";

const SocialMediaFormats: React.FC = () => {
  // desplazamiento mouse

  // Creamos una referencia al elemento HTML donde se aplicará el scroll manual
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Estado para controlar si el usuario está actualmente arrastrando (haciendo "drag") el contenedor
  const [isDragging, setIsDragging] = useState(false);

  // Estado para almacenar la posición inicial del cursor en el eje X al hacer clic
  const [startX, setStartX] = useState(0);

  // Estado para guardar el desplazamiento horizontal actual del contenedor
  const [scrollLeft, setScrollLeft] = useState(0);

  // Función que se ejecuta cuando el usuario hace clic (mousedown) en el contenedor
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return; // Si no existe el contenedor, salimos de la función

    // Activa el modo "dragging" para saber que el usuario está arrastrando el contenedor
    setIsDragging(true);

    // Calcula y guarda la posición inicial del cursor en el eje X relativo al contenedor
    setStartX(e.pageX - scrollRef.current.offsetLeft);

    // Guarda el desplazamiento horizontal actual del contenedor para poder aplicarle el desplazamiento calculado
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Función que se ejecuta cuando el usuario suelta el clic o se sale del área (mouseup o mouseleave)
  const handleMouseUpOrLeave = () => {
    // Desactiva el modo "dragging" ya que el usuario dejó de arrastrar
    setIsDragging(false);
  };

  // Función que se ejecuta cuando el usuario mueve el mouse dentro del contenedor
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return; // Si no estamos en modo "dragging" o no existe el contenedor, salimos

    e.preventDefault(); // Evita el comportamiento predeterminado del navegador (como la selección de texto)

    // Calcula la posición actual del cursor en el eje X, relativa al contenedor
    const x = e.pageX - scrollRef.current.offsetLeft;

    // Calcula la cantidad de desplazamiento deseado multiplicando por un factor (1.5 en este caso)
    const walk = (x - startX) * 1.5;

    // Aplica el desplazamiento calculado al contenedor en el eje horizontal (scrollLeft)
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // FIN desplazamiento mouse

  return (
    <div className="flex h-full w-full flex-col md:flex-row text-colorBase">
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

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        className=" select-none overflow-auto   w-full z-10 md:h-1/2 flex gap-3 p-1 cursor-grab active:cursor-grabbing"
      >
        <div className=" relative    min-w-[350px] text-colorBase md:w-2/6 bg-trend   mt-5">
          <div className=" absolute flex-row p-5    ">
            <h2 className="  text-8xl w-full font-BebasNeue text-cyan-100">
              {" "}
              contenido sin limite 3D
            </h2>
          </div>

          <div className=" h-fill w-fill mb-5">
            <Image
              draggable="false"
              src="/DiseñoWeb/subServicio/hongos.png"
              alt="subservicio"
              width={1000}
              height={1000}
            />
          </div>

          <div className="flex p-5">


            {/* Paquetes Plan */}


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
                    15 segundos o 30s
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
                    15 segundos o 30s
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
                    <span className=" text-lime-400">+</span>6 videos en 3D (15
                    segundos o 30s)
                  </li>
                  <li>
                    <span className=" text-lime-400">+</span>2 revisiones
                  </li>
                </ul>
              </div>
            </div>

            {/* Fin Paquetes Plan */}

            <div className=" border-l-4 pl-2 ">
              <span className=" text-7xl font-BebasNeue w-1/2">1 mes</span>{" "}
              <br />{" "}
              <span className="font-BebasNeue text-3xl ">
                contenido <br /> diario <br /> para tus <br /> redes sociales{" "}
              </span>
            </div>
          </div>
        </div>

        <div className=" relative    min-w-[350px] text-colorBase md:w-2/6 bg-trend   mt-5">
          <div className=" absolute top-60 flex-row p-5    ">
            <h2 className="  text-8xl w-full font-BebasNeue text-cyan-100">
              {" "}
              Destacate  comun
            </h2>
          </div>

          <div className=" h-fill w-fill mb-5">
            <Image
              draggable="false"
              src="/DiseñoWeb/subServicio/caballero.png"
              alt="subservicio"
              width={1000}
              height={1000}
            />
          </div>

          <div className="flex p-5">
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
                    15 segundos o 30s
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
                    15 segundos o 30s
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
                    <span className=" text-lime-400">+</span>6 videos en 3D (15
                    segundos o 30s)
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

        <div className=" relative    min-w-[350px] text-colorBase md:w-2/6 bg-trend   mt-5">
          <div className=" absolute flex-row p-5    ">
            <h2 className="  text-5xl w-full font-BebasNeue text-cyan-100">
              {" "}
              producccion cinematografico
            </h2>
          </div>

          <div className=" h-fill w-fill  mb-5">
            <Image
              draggable="false"
              src="/DiseñoWeb/subServicio/camaras.png"
              alt="subservicio"
              width={1000}
              height={1000}
            />
          </div>

          <div className="flex p-5">
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
                    15 segundos o 30s
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
                    15 segundos o 30s
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
                    <span className=" text-lime-400">+</span>6 videos en 3D (15
                    segundos o 30s)
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

//Contenido 3D Impactante para Marketing Efectivo

//Videos 3D Impactantes para Marketing Profesional
