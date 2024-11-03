import React, { useRef, useState } from "react";
import Image from "next/image";

const ExposicionClientes: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Referencia al video
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Estado para manejar si el video está en reproducción

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Reanudar reproducción
        setIsPlaying(true); // Actualizar el estado a "reproduciendo"
      } else {
        videoRef.current.pause(); // Pausar reproducción
        setIsPlaying(false); // Actualizar el estado a "pausado"
      }
    }
  };

  // Función para asegurarse de que el video esté en pausa
  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Asegurarse de que el video esté en pausa al cargar
      setIsPlaying(false); // Actualizar el estado a "pausado"
    }
  };

  return (
    <div className="h-[1000] w-full  mb-4 flex flex-col md:flex-row text-colorBase relative  justify-center items-start  ">
      <div className="   grid text-colorBase gap-6 p-5 w-full md:w-1/2">
        <h2 className=" w-full  md:w-full font-BebasNeue text-5xl text-title ">
          {" "}
          Creación de Réplica 3D de Muebles Reales para Contenido de Redes
          Sociales
        </h2>

        <div>
          <Image
            src="/DiseñoWeb/exposicionCliente/e6.jpg"
            alt="Logo"
            width={600} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
            height={600} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
            objectFit="fill"
            className=" rounded-2xl"
          />
        </div>
      </div>

      <div className="mt-5 ">
        <div className=" text-6xl text-subtitle h-20 bg-trend p-3 font-BebasNeue   ">
          producto hogar
        </div>

        <div className=" w-1/3 p-1 font-BebasNeue text-4xl text-trend  shadow-xl h-10 ">
          Mobilarios
        </div>

        {/* EJEMPLOS GRAFICO IDENTIDAD */}
        {/* separacion padding -------------------------------*/}
        <div className="p-5">
          <h2 className=" font-BebasNeue text-5xl text-title">
            ISOTIPOS VERSIONES
          </h2>

          <section className=" flex gap-3  md:justify-start xl:justify-start mt-10  justify-center">
            {/* Crear un arreglo de 23 elementos y mapear cada uno para generar las imágenes */}
            {Array.from({ length: 4 }, (_, index) => (
              <Image
                // `key` único para cada imagen, necesario para el renderizado eficiente en React
                key={index}
                // Ruta dinámica para cada imagen: e1.png, e2.png, ..., e23.png
                src={`/DiseñoWeb/exposicionCliente/isotipos/SVG/isoV${
                  index + 1
                }.svg`}
                // Texto alternativo para accesibilidad, mostrando el número de la imagen
                alt={`Imagen ${index + 1}`}
                // Ancho y alto deseados en píxeles
                width={80}
                height={80}
                // Ajustar la imagen para que llene el contenedor sin distorsionarse
                objectFit="fill"
              />
            ))}
          </section>

          <h2 className=" font-BebasNeue text-5xl mt-20 text-title">
            SERVICIOS DISPONIBLES
          </h2>

          <div className=" flex ">
            {/* index de imagenes 21 pack-------------------------------*/}

            <section className=" space-y-1 mt-5  ">
              {/* Crear un arreglo de 23 elementos y mapear cada uno para generar las imágenes */}
              {Array.from({ length: 8 }, (_, index) => (
                <Image
                  // `key` único para cada imagen, necesario para el renderizado eficiente en React
                  key={index}
                  // Ruta dinámica para cada imagen: e1.png, e2.png, ..., e23.png
                  src={`/DiseñoWeb/exposicionCliente/servicios/SVG/servicios${
                    index + 1
                  }.svg`}
                  // Texto alternativo para accesibilidad, mostrando el número de la imagen
                  alt={`Imagen ${index + 1}`}
                  // Ancho y alto deseados en píxeles
                  width={100}
                  height={100}
                  // Ajustar la imagen para que llene el contenedor sin distorsionarse
                  objectFit="fill"
                />
              ))}
            </section>

            {/* fin index de imagenes 21 pack-------------------------------*/}

            <div>
              <ul className="space-y-20 mt-20 text-trend ">
                <li>Remplazo tapicería</li>
                <li>Reparación relleno</li>
                <li>Renovación estética</li>
                <li>Tapizado: silla, sofa, cama</li>
                <li>Tapizado: piso, techo, paneles</li>
                <li>Refuerzo estructural</li>
                <li>Asesoría en telas</li>
                <li>Venta de telas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COMIENZO imagenes exposicion-------------------------------*/}

        <div className=" flex gap-5 mt-10">
          <div className="  bg-slate-500  ">
            <Image
              src="/DiseñoWeb/exposicionCliente/miniE1.jpg"
              alt="Logo"
              width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
              height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
            />
          </div>

          <div className="  bg-slate-500 ">
            <Image
              src="/DiseñoWeb/exposicionCliente/miniE2.jpg"
              alt="Logo"
              width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
              height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
            />
          </div>

          <div className="  bg-slate-500 ">
            <Image
              src="/DiseñoWeb/exposicionCliente/miniE3.jpg"
              alt="Logo"
              width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
              height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
            />
          </div>

          {/* FIN imagenes exposicion-------------------------------*/}
        </div>

        <div className=" relative  bg-trend p-6 shadow-md w-full">
          <h2 className="text-4xl font-BebasNeue text-colorBase mb-4">
            Muebles 3D Realistas para Hacer Brillar tus Proyectos y tu Marca
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 border-4 gap-4">
            <li className="p-4 text-colorBase rounded-lg shadow">
              <h3 className="font-BebasNeue text-3xl text-colorBase ">
                Visuales que impactan:
              </h3>
              <p className="text-colorBase">
                Atrae todas las miradas con renderizados de alta calidad que
                suben el nivel de tus presentaciones.
              </p>
            </li>
            <li className="p-4 text-colorBase rounded-lg shadow">
              <h3 className="font-BebasNeue text-3xl text-colorBase">
                Flexibilidad total:
              </h3>
              <p className="text-colorBase">
                Ajusta colores, materiales y tamaños, o incluso rediseña el
                producto para que encaje perfecto con tu estilo.
              </p>
            </li>
            <li className="p-4 text-colorBase rounded-lg shadow">
              <h3 className="font-BebasNeue text-3xl text-colorBase">
                Rendimiento eficiente:
              </h3>
              <p className="text-colorBase">
                Modelos ligeros que mantienen tus proyectos fluidos y rápidos.
              </p>
            </li>
            <li className="p-4 text-colorBase rounded-lg shadow">
              <h3 className="font-BebasNeue text-3xl text-colorBase">
                Contenido para redes sociales:
              </h3>
              <p className="text-colorBase">
                Crea imágenes y animaciones que sorprendan a tu audiencia y
                mejoren la visibilidad de tu marca.
              </p>
            </li>
            <li className="p-4 text-colorBase rounded-lg shadow">
              <h3 className="font-BebasNeue text-3xl text-colorBase">
                Identidad sólida:
              </h3>
              <p className="text-colorBase">
                Diseños que encajan fácil y mantienen la coherencia en todos tus
                proyectos, dándole más fuerza a tu marca.
              </p>
            </li>
          </ul>

          {/* COMIENZO video y imagenes-------------------------------*/}

          <div className="flex-row md:flex mt-5 relative">
            {/* Contenedor del video con un z-index bajo */}
            <div className="relative z-0">
              <video
                ref={videoRef}
                controls
                src="/DiseñoWeb/videos/Video02.mp4"
                className="w-full h-full"
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onLoadedMetadata={handleVideoLoaded}
                onLoadStart={handleVideoLoaded}
                autoPlay={false}
              >
                Tu navegador no soporta videos HTML5.
              </video>
              <button onClick={togglePlayPause}></button>
            </div>

            {/* Contenedor de las imágenes con un z-index más alto */}

            <div> </div>

            
            

            <div className="w-full relative z-10">
              <h2 className="font-BebasNeue text-5xl text-colorBase">
                Contenido disponible para 1 mes...
              </h2>

              <div className=" w-full flex">

              <section className="relative w-full z-10 overflow-auto">
                <div className="relative h-[800px] w-20">
                  {Array.from({ length: 22 }, (_, index) => (
                    <Image
                      key={index}
                      src={`/DiseñoWeb/exposicionCliente/e${index + 1}.jpg`}
                      alt={`Imagen ${index + 1}`}
                      width={500}
                      height={500}
                      objectFit="fill"
                      className="relative transition-transform duration-300 ease-in-out transform hover:scale-400 hover:z-20 hover:translate-x-32"
                    />
                  ))}
                </div>
              </section>

            {/* Paquetes Plan */}
            <div className="absolute w-1/2 left-24 ">
              <h2 className=" text-2xl  font-BebasNeue">
                Paquetes para contenido de redes sociales
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

            </div>


              <h2 className="font-BebasNeue text-5xl text-colorBase">
                <span className="text-9xl">
                  23 <br />
                </span>
                imagenes
              </h2>
            </div>
          </div>

          {/* FIN COMIENZO video y imagenes-------------------------------*/}
        </div>
      </div>
    </div>
  );
};

export default ExposicionClientes;
