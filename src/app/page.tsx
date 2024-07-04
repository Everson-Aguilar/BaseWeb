import Head from "next/head";

//componente

import Galeria_grid from "./components/galeria_grid";

//fuentes

import "./globals.css";

//css

import "./css/estructura.css";
import "./css/animaciones.css";

//image

import Image from "next/image";

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>
          SERVICIOS DE DISEÑO DE ENTORNO 3D, PLANIFICACION DE CONSTRUCCION Y
          ACCESORIOS OPTIMIZADO-3Dscape
        </title>

        <meta
          name="description"
          content="Descubre nuestros servicios en diseño 3D para entornos, planos de construcción y accesorios. En 3Dscape, convertimos ideas en realidad con modelos virtuales detallados y visualizaciones realistas."
        />
        <meta
          name="keywords"
          content="diseño 3D, modelado 3D, renderizado, visualización arquitectónica, diseño de interiores, animación 3D, simulaciones 3D"
        />
        {/* Otras meta etiquetas según sea necesario */}
      </Head>

      <main>
        <section className="base">
          <div className="contenedor1">
            <div className=" absolute mx-10 font-SixCaps text-8xl text-cyan-700   z-10 top-3/4 right-1/3">
              3Dscape
            </div>

            <div className="absolute  text-5xl z-10   text-cyan-700 p-4 h-2/5 w-2/3 ">
              <Image
                src="/DiseñoWeb/logoazul.svg"
                alt="Logo"
                width={300} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
                height={300} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
              />

              <h1 className="font-Staatliches text-7xl text-cyan-700 mt-4">
                3D DISEÑO ENTORNO PLAN:
              </h1>

              <div>
                <ul className="text-5xl font-SixCaps text-cyan-700  ">
                  <li>
                    {" "}
                    <span className="bg-yellow-400">+</span> Terreno
                  </li>
                  <li>
                    <span className="bg-yellow-400">+</span>Construcción
                  </li>
                  <li>
                    <span className="bg-yellow-400">+</span> Accesorios
                  </li>
                </ul>
              </div>
            </div>

            <div className="absolute  font-Acme bg-slate-300 bg-opacity-20 backdrop-blur-sm box-border p-3 z-20 text-cyan-700 w-1/3 h-full right-0 text-1xl">
              <span className=" relative text-5xl ">D</span>escubre nuestros
              servicios en diseño 3D para entornos, planos de construcción y
              accesorios. En 3Dscape, convertimos ideas en realidad con modelos
              virtuales detallados y visualizaciones realistas. Servimos a
              diversas industrias, incluyendo arquitectura, cine, videojuegos y
              más, ofreciendo soluciones personalizadas que combinan
              creatividad, precisión y sostenibilidad. Confía en nuestra
              experiencia en diseño 3D para llevar tu proyecto al siguiente
              nivel.
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
                alt="Logo"
                className="w-full  h-full  min-w-96"
              />
            </div>
          </div>

          <div className="contenedor2">

            
 
          <div className="flex  justify-center">
          <div className="bg-yellow-400 text-cyan-700  h-auto w-2/3 text-center justify-center text-3xl  font-Staatliches ">servicios disponibles</div>
          </div>
          


            <div className=" flex  h-1/2 max-h-full items-center justify-center ">
              <div className="  flex  items-center justify-center">
                {/*                       items  servicios                         */}

                

                <div className="grid2 box-border">

            
                  {/*items servicios*/}

                  <div className="imagen animacion_1">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="environment3D"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Diseño Ambiental
                    </div>
                  </div>

                  {/*items servicios*/}
                  <div className="imagen animacion_2">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="modelado3d"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Modelado 3D
                    </div>
                  </div>

                  {/*items servicios*/}
                  <div className="imagen imagen animacion_3">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="superficies duras 3d"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Superficies Duras
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="unity unreal engine"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Unity/Unreal Engine
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="escultura 3d"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Escultura 3D
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="plano arquitectonico"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Plano Arquitectonico
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="mobilarios"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14  font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Mobilarios
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="diseño niveles"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className=" mt-14 font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Diseño Niveles
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <Image
                      src="/DiseñoWeb/servicios.png"
                      alt="diseño objetos 3d"
                      layout="fill" // Ajusta la imagen para llenar todo el contenedor
                      objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                    />
                    <div className="  mt-14 font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Objetos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*                    FIN-items  servicios                         */}

            <div className="   justify-center   flex h-1/2  w-full  ">
              <div>
                <div className="  box-border  p-5 flex items-center justify-center flex-col  h-full w-full text-4xl font-BebasNeue text-lime-100  border-2  border-lime-100   ">
                  <div className="text-5xl ">
                    DISEÑOS <br /> PRECIOS <br />
                    ECONOMICOS
                  </div>
                  <div className="text-9xl">50%</div>
                </div>
              </div>

              <div className=" max-w-40 text-xs  text-lime-100 box-border items-center justify-center flex-col h-full   p-5 overflow-hidden">
                <span className="break-words">
                  <p>
                    Ofrecemos precios justos y equitativos adaptados al
                    proyecto. Nos enfocamos en ayudar a pequeños emprendedores
                    con productos económicos que cumplen sus necesidades.
                  </p>
                  <p className="font-BebasNeue text-2xl">Incluye:</p>
                  <ul>
                    <li className="text-teal-500">
                      - Modelado 3D de [objetos/arquitectura/productos].
                    </li>
                    <li className="text-teal-500">
                      - Texturización y materiales realistas.
                    </li>
                    <li className="text-teal-500">
                      - Renderizado de alta calidad.
                    </li>
                    <li className="text-teal-500">
                      - Revisión y ajustes según tu retroalimentación.
                    </li>
                    <li className="text-teal-500">
                      - Entrega en formatos estándar para fácil integración.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/*separador*/}

        <div className=" text-center font-LibreBarcode128 h-full bg-zinc-900 text-lime-100 text-5xl ">
          design environment 3d, design game, diseÑo realista 3d
        </div>

        <section className="base">
          <div className=" grid3 ">
            <div className="  w-full flex-row justify-center items-center overflow-hidden">
              <div className=" h-full text-sm  bg-zinc-800 p-3">
                <p>
                  <strong className=" tracking-wide font-Staatliches text-xl text-neutral-500">
                    PASOS PARA CREAR ACCESORIOS COMO ARTISTA DIGITAL:
                  </strong>
                </p>
                <ul className="font-BebasNeue text-1xl text-teal-500  ">
                  <li>*Conceptualizaci&oacute;n y Referencias Visuales</li>
                  <li>*Modelado 3D de Alto Pol&iacute;gono</li>
                  <li>*Retopolog&iacute;a del Modelo</li>
                  <li>*UV Mapping</li>
                  <li>*Creaci&oacute;n de Texturas</li>
                  <li>*Aplicaci&oacute;n de Texturas</li>
                  <li>*Iluminaci&oacute;n y Renderizado</li>
                  <li>*Ajustes y Optimizaci&oacute;n</li>
                  <li>*Pruebas y Evaluaci&oacute;n</li>
                  <li>*Entrega Final</li>
                </ul>
              </div>
            </div>
            <div className=" w-full flex-row justify-center  items-center  overflow-hidden ">
              <span className="font-Staatliches text-3xl text-lime-100  ">
                DISEÑO <br /> PRODUCTOS
              </span>
              <div className=" h-full w-full ">
                <Image
                  src="/DiseñoWeb/producto.jpg"
                  alt="diseño construcciones 3d"
                  width={1000} // Ancho deseado en píxeles
                  height={1000} // Alto deseado en píxeles
                />
              </div>
            </div>
            <div className=" w-full  text-end  overflow-hidden border-r-lime-100 border-r-2">
              <span className="font-BebasNeue text-3xl text-lime-100">
                TECNOLOGIAS
              </span>
              <div className=" h-full p-3 box-border ">
                <div className=" h-1/2 p-2">
                  <ul className="text-xs text-lime-100 font-PermanentMarker">
                    <li>
                      Autodesk Maya <br />+
                    </li>
                    <li>
                      Blender
                      <br />+
                    </li>
                    <li>
                      Autodesk 3ds Max
                      <br />+
                    </li>
                    <li>
                      ZBrush
                      <br />+
                    </li>
                    <li>
                      Substance Painter
                      <br />+
                    </li>
                    <li>
                      Unity 3D / Unreal <br />+
                    </li>
                    <li>
                      Adobe After Effects
                      <br />+
                    </li>
                  </ul>
                </div>
                <div className=" h-1/2 flex justify-center  ">
                  <Image
                    src="/DiseñoWeb/herramientas.png"
                    alt="software 3d"
                    width={200} // Ancho deseado en píxeles
                    height={200} // Alto deseado en píxeles
                  />
                </div>
              </div>
            </div>
            <div className="  box-border flex-row overflow-hidden  items-center justify-center text-center ">
              <span className="font-BebasNeue text-2xl text-lime-100">
                GRATIS
                <br /> PARA TI !
              </span>
              <div className=" p-5 max-full text-xs text-teal-500 font-PermanentMarker">
                <span className=" text-2xl text-lime-100">!</span> En nuestra
                sección gratuita, ofrecemos consejos prácticos y accesibles para
                mejorar tus espacios con soluciones de diseño funcional y
                estético. Desde ideas básicas hasta avanzadas, buscamos
                inspirarte y proporcionarte herramientas prácticas para
                transformar tus entornos fácilmente
                <span className=" text-2xl text-lime-100">.</span>
              </div>
            </div>
          </div>

          <div>
            <div className=" text-lime-100 text-7xl font-PermanentMarker">
              PORTFOLIO
            </div>
            <Galeria_grid />
          </div>

          <div>
            <div className="imagen ">
              <img
                src="/DiseñoWeb/panel_02.jpg"
                alt="Logo"
                className=" min-w-96 h-4/5 "
              />
            </div>
          </div>
        </section>
      </main>

      <footer className=" footer w-full  text-lime-100 bg-zinc-900">
        <div className="ml-5">
          <section>
            <h2>Contacto</h2>
            <address>
              <p>Dirección: COLOMBIA</p>
              <p>
                Email:{" "}
                <a href="mailto:aguilar3dstudio@gmail.com">
                  aguilar3dstudio@gmail.com
                </a>
              </p>
              <p>
                Teléfono: <a href="tel:+573052158161">+57 305 215 81 61</a>
              </p>
            </address>
          </section>
          <section>
            <h2>Redes Sociales</h2>
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
              <li>
                <a href="#">YouTube</a>
              </li>
            </ul>
          </section>
          <section>
            <p className="text-center">
              © 2024 3Dscape. Todos los derechos reservados. Diseñado por
              3Dscape.
            </p>
          </section>
        </div>
      </footer>
    </div>
  );
}

// * git-hub pasos para guardar
//git add .
//git commit -m "subir"
//git pull origin main
//git push origin main
