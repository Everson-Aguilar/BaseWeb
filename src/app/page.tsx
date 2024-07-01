import Head from "next/head";

//fuentes

import "./globals.css";

//css

import "./css/estructura.css";
import './css/animaciones.css';

//image

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
            <div className=" absolute font-SixCaps text-8xl text-cyan-700   z-10 top-3/4 right-1/3">
              3Dscape
            </div>

            <div className="absolute  text-5xl z-10    text-cyan-700 p-4 h-2/5 w-2/3 ">
              <img
                src="/DiseñoWeb/logoazul.svg"
                alt="Logo"
                className="w-15 h-15 mb-5"
              />

              <h1 className="font-Staatliches text-7xl text-cyan-700">
                3D DISEÑO ENTORNO PLAN:
              </h1>

              <div>
                <ul className="text-5xl font-SixCaps text-cyan-700  ">
                  <li>+ Terreno</li>
                  <li>+ Construcción</li>
                  <li>+ Accesorios</li>
                </ul>
              </div>
            </div>

            <div className="absolute  font-Acme  box-border p-3  z-10 text-green-950 w-1/3 h-2/3 right-0 text-1xl">
              <span className="text-8xl">D</span>escubre nuestros servicios en
              diseño 3D para entornos, planos de construcción y accesorios. En
              3Dscape, convertimos ideas en realidad con modelos virtuales
              detallados y visualizaciones realistas. Servimos a diversas
              industrias, incluyendo arquitectura, cine, videojuegos y más,
              ofreciendo soluciones personalizadas que combinan creatividad,
              precisión y sostenibilidad. Confía en nuestra experiencia en
              diseño 3D para llevar tu proyecto al siguiente nivel.
            </div>

            <div className="imagen relative">
              <img
                src="/DiseñoWeb/panel_01.jpg"
                alt="Logo"
                className="w-full h-full object-fill"
              />
            </div>
          </div>

          <div className="contenedor">
            <div className="bg-gray-950 h-full w-full flex relative p-4  "></div>
          </div>

          <div className="contenedor2">
            <div className=" flex  h-1/2 max-h-full items-center justify-center ">
              <div className="  w-28 h-28 flex  items-center justify-center">
                {/*                       items  servicios                         */}

                <div className="grid2 box-border">
                  {/*items servicios*/}

                  <div className="imagen animacion_1">
                    <img
                      src="/DiseñoWeb/servicios.png"
                      alt="Logo"
                      className="w-full h-full object-fill  "
                    />
                    <div className="  font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Diseño Ambiental
                    </div>
                  </div>

                  {/*items servicios*/}
                  <div className="imagen animacion_2">
                    <img
                      src="/DiseñoWeb/servicios.png"
                      alt="Logo"
                      className="w-full h-full object-fill"
                    />
                    <div className="  font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Modelado 3D
                    </div>
                  </div>

                  {/*items servicios*/}
                  <div className="imagen imagen animacion_3">
                    <img
                      src="/DiseñoWeb/servicios.png"
                      alt="Logo"
                      className="w-full h-full object-fill"
                    />
                    <div className="  font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Superficies Duras
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <img
                      src="/DiseñoWeb/servicios.png"
                      alt="Logo"
                      className="w-full h-full object-fill"
                    />
                    <div className="  font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Unity/Unreal Engine
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <img
                      src="/DiseñoWeb/servicios.png"
                      alt="Logo"
                      className="w-full h-full object-fill"
                    />
                    <div className="  font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Escultura 3D
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <img
                      src="/DiseñoWeb/servicios.png"
                      alt="Logo"
                      className="w-full h-full object-fill"
                    />
                    <div className="  font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Plano Arquitectonico
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <img
                      src="/DiseñoWeb/servicios.png"
                      alt="Logo"
                      className="w-full h-full object-fill"
                    />
                    <div className="  font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Mobilarios
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <img
                      src="/DiseñoWeb/servicios.png"
                      alt="Logo"
                      className="w-full h-full object-fill"
                    />
                    <div className="  font-Acme text-1xl text-lime-100 flex items-center justify-center">
                      Diseño Niveles
                    </div>
                  </div>
                  {/*items servicios*/}
                  <div className="imagen">
                    <img
                      src="/DiseñoWeb/servicios.png"
                      alt="Logo"
                      className="w-full h-full object-fill"
                    />
                    <div className="  font-Acme text-1xl text-lime-100 flex items-center justify-center">
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

        <section className="base">
          <div className="contenedor"></div>
          <div className="contenedor"></div>

          <div className="contenedor">
            <div className="imagen">
              <img
                src="/DiseñoWeb/panel_02.jpg"
                alt="Logo"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full text-slate-400">
        <section className="container mx-auto px-4">
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
        <section className="container mx-auto px-4 mt-4">
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
        <section className="container mx-auto px-4 mt-4">
          <p className="text-center">
            © 2024 3Dscape. Todos los derechos reservados. Diseñado por 3Dscape.
          </p>
        </section>
      </footer>
    </div>
  );
}
