import React from "react";
import Image from "next/image";

const exposicionClientes: React.FC = () => {
  return (
    <div className="h-[1000] w-full  mt-20 mb-4 flex flex-col md:flex-row bg-base relative  items-start   ">
      <div className="   grid bg-base gap-6 p-5 w-full md:w-1/2">
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
        <div className=" text-5xl text-subtitle h-36 bg-trend p-3 font-BebasNeue  border-2 ">
          producto hogar
        </div>

        <div className="  text-title p-1  font-bold text-2xl shadow-xl h-10 ">
          Mobilarios
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

        <div className="bg-message p-6 shadow-md w-full">
          <h2 className="text-2xl font-BebasNeue text-trend mb-4">
            Muebles 3D Realistas para Hacer Brillar tus Proyectos y tu Marca
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="p-4 bg-base rounded-lg shadow">
              <h3 className="font-semibold text-trend">
                Visuales que impactan:
              </h3>
              <p>
                Atrae todas las miradas con renderizados de alta calidad que
                suben el nivel de tus presentaciones.
              </p>
            </li>
            <li className="p-4 bg-base rounded-lg shadow">
              <h3 className="font-semibold text-trend">Flexibilidad total:</h3>
              <p>
                Ajusta colores, materiales y tamaños, o incluso rediseña el
                producto para que encaje perfecto con tu estilo.
              </p>
            </li>
            <li className="p-4 bg-base rounded-lg shadow">
              <h3 className="font-semibold text-trend">
                Rendimiento eficiente:
              </h3>
              <p>
                Modelos ligeros que mantienen tus proyectos fluidos y rápidos.
              </p>
            </li>
            <li className="p-4 bg-base rounded-lg shadow">
              <h3 className="font-semibold text-trend">
                Contenido para redes que engancha:
              </h3>
              <p>
                Crea imágenes y animaciones que sorprendan a tu audiencia y
                mejoren la visibilidad de tu marca.
              </p>
            </li>
            <li className="p-4 bg-base rounded-lg shadow">
              <h3 className="font-semibold text-trend">Identidad sólida:</h3>
              <p>
                Diseños que encajan fácil y mantienen la coherencia en todos tus
                proyectos, dándole más fuerza a tu marca.
              </p>
            </li>
          </ul>

          {/* COMIENZO video y imagenes-------------------------------*/}

          <div className="flex-row  md:flex  xl:flex   mt-5 ">
            <div>
              <video
                src="/DiseñoWeb/videos/muebleContemporaneo.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full  " // Ajusta el ancho al 33% (30% es un poco más específico en Tailwind)
              >
                Tu navegador no soporta videos HTML5.
              </video>
            </div>

            <div className=" w-full ">
              <h2 className=" font-BebasNeue text-5xl text-title">
                {" "}
                Contenido disponible para 1 mes...
              </h2>

              <section className=" h-[800px] overflow-y-auto">
                {/* Crear un arreglo de 23 elementos y mapear cada uno para generar las imágenes */}
                {Array.from({ length: 22 }, (_, index) => (
                  <Image
                    // `key` único para cada imagen, necesario para el renderizado eficiente en React
                    key={index}
                    // Ruta dinámica para cada imagen: e1.png, e2.png, ..., e23.png
                    src={`/DiseñoWeb/exposicionCliente/e${index + 1}.jpg`}
                    // Texto alternativo para accesibilidad, mostrando el número de la imagen
                    alt={`Imagen ${index + 1}`}
                    // Ancho y alto deseados en píxeles
                    width={201}
                    height={372}
                    // Ajustar la imagen para que llene el contenedor sin distorsionarse
                    objectFit="fill"
                  />
                ))}
              </section>

              <h2 className=" font-BebasNeue text-5xl text-title">
                {" "}
                <span className="text-8xl">
                  23 <br />
                </span>
                imagenes
              </h2>
            </div>
          </div>

          {/* FIN COMIENZO video y imagenes-------------------------------*/}
        </div>
        {/* separacion padding -------------------------------*/}
        <div className=" p-5">
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

          <div className=" flex">
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
              <ul className="space-y-20 mt-20">
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
      </div>
    </div>
  );
};

export default exposicionClientes;
