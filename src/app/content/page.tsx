import React from "react";
import Image from "next/image";

// imagenes

const images = [
  { src: "/images/nature1.jpg", alt: "Naturaleza 1", width: 200, height: 200 },
  { src: "/images/nature2.jpg", alt: "Naturaleza 2", width: 200, height: 200 },
  { src: "/images/nature3.jpg", alt: "Naturaleza 3", width: 200, height: 200 },
  { src: "/images/nature4.jpg", alt: "Naturaleza 4", width: 200, height: 200 },
  { src: "/images/nature3.jpg", alt: "Naturaleza 5", width: 200, height: 200 },
  { src: "/images/nature4.jpg", alt: "Naturaleza 6", width: 200, height: 200 },
  { src: "/images/nature4.jpg", alt: "Naturaleza 7", width: 200, height: 200 },
];

const CulturaLATAM: React.FC = () => {
  return (
    <section className="p-5 bg-trend text-colorBase ">
      <h1 className="text-7xl font-BebasNeue mb-6 text-center">
        Cultura <span className="bg-orange-400">LATAM </span>en tus Videojuegos:
        ¡Es Hora de Dejar de Imitar y Empezar a Crear con Orgullo Latino!
      </h1>

      <p className="text-sm   leading-relaxed mb-6">
        <span className=" text-7xl text-orange-400">!</span>El arte
        latinoamericano se distingue por su alma vibrante, llena de energía,
        pasión y un espíritu único. ¡Somos un torbellino de colores, historia y
        tradiciones que nos definen! A diferencia de otras culturas más serias o
        frías, en LATAM somos conocidos por nuestra viveza, alegría y esa
        “malicia” encantadora que nos hace tan auténticos. ¿Imaginas integrar
        este estilo tan vivo y dinámico en tus diseños? ¡Podría hacer que tu
        proyecto se destaque por su desorden, pero de una forma llamativa,
        creativa y única!
      </p>

      <section className=" flex gap-5">
        <section className="md:w-1/2 border-2 p-5 border-colorBase">
          <h2 className=" text-4xl font-BebasNeue">
            ¿Qué hace único al Arte LATAM?
          </h2>

          <ul>
            <li>
              Variedad de colores llamativos que capturan la atención de
              inmediato.
            </li>
            <li>
              Fuertes influencias indígenas que marcan nuestras raíces y
              simbolismos.
            </li>
            <li>
              Transformación del arte europeo, ¡lo hacemos a nuestra manera, con
              un toque único!
            </li>
            <li>
              Detalles que combinan elementos de todo el mundo, pero siempre
              reinterpretados a nuestro estilo.
            </li>
            <li>
              Diseños naturales y tropicales que nos conectan con la calidez de
              nuestra tierra.
            </li>
            <li>
              Un estilo fantasioso, simbólico, surrealista, fusionado con la
              naturaleza.
            </li>
            <li>
              Una gran carga simbólica que representa nuestra identidad como
              latinoamericanos.
            </li>
            <li>
              Un profundo componente religioso que impregna nuestras tradiciones
              y la vida cotidiana.
            </li>
            <li>
              Somos unidos, amigables, habladores y siempre nos apoyamos como
              una gran familia.
            </li>
          </ul>

          <p>
            La esencia latinoamericana no solo se refleja en nuestras obras de
            arte, sino en la forma en que vivimos y nos conectamos con los
            demás. ¡Es hora de plasmar esa energía en tus diseños y crear algo
            que trascienda, que capture la vibrante esencia de LATAM!
          </p>
        </section>

        <section className="md:w-1/2 border-2 p-5 border-colorBase">
          <h2 className=" text-4xl font-BebasNeue">
            ¿Cómo la aplicamos correctamente a nuestro diseño?
          </h2>

          <p>
            Como cualquier otro estilo que te gustaría agregar a tu diseño, es
            importante tener muy buena información para colocarlo en el diseño,
            y exponer la realidad de cómo es el estilo LATAM. Como artista,
            siempre me baso en tres aspectos al diseñar cualquier cosa, me
            parece fundamental:
          </p>

          <ul className="m-5">
            <li className="flex">
              <span className="text-colorBase text-xl p-2 border-colorBase border-2 rounded-full h-10 w-10 mr-2">
                1.
              </span>
              <span className="transition-all duration-500 ease-out bg-orange-400 w-1/4 flex justify-center items-center hover:translate-x-10">
                Funcionalidad
              </span>
            </li>
            <li className="flex mt-5">
              <span className="text-colorBase text-xl p-2 border-colorBase border-2 rounded-full h-10 w-10 mr-2">
                2.
              </span>
              <span className="transition-all duration-500 ease-out bg-orange-400 w-1/4 flex justify-center items-center hover:translate-x-10">
                Composición
              </span>
            </li>
            <li className="flex mt-5">
              <span className="text-colorBase text-xl p-2 border-colorBase border-2 rounded-full h-10 w-10 mr-2">
                3.
              </span>
              <span className="transition-all duration-500 ease-out bg-orange-400 w-1/4 flex justify-center items-center hover:translate-x-10">
                Historia
              </span>
            </li>
          </ul>

          <p>
            Estas bases harán que nuestro diseño sea más dinámico, entretenido y
            útil, agradable al estar, y es que los lugares LATAM son
            surrealistas y son una zona de mucha vibra. Para un mundo gris y
            sobrio, un entorno mágico puede ser una muy buena opción para
            transmitir emociones, vibras muy fuertes e historia a través de cada
            detalle del entorno.
          </p>

          <p>
            No todo debe ser bonito y bueno; el arte LATAM tiene su lado oscuro,
            estética fuerte, porque somos muy groseros. No hay comparación de
            cómo transmitimos el mal, ahí también lo podemos reflejar. El arte
            LATAM es un multiplicador de emociones, no tenemos pudor ni nos
            contenemos para expresarnos, somos naturales, sociables, muy
            criticones y necios, somos muy ruidosos y fiesteros.
          </p>

          <p>
            Hay diferentes tipos de complejidad en el diseño de un lugar, pero
            te explicaré las bases que puedes implementar para así obtener la
            mínima esencia latina. Ya es tu decisión qué tan latino quieres
            colocarlo.
          </p>

          <p>
            También hay diferentes tipos de emociones a transmitir. Yo, en lo
            personal, te enseñaré del lado artístico mío, el realista, el
            neutro, en el que pocos son felices y son cegados por la distorsión
            de patrones sociales. La vida no es tan bonita del todo.
          </p>
        </section>
      </section>

      <figure className=" flex p-5 shadow-xl">
        <section>
          <Image
            src="contenido\cap01/latamOpti.png" // Ruta relativa desde la carpeta `public`
            alt="latinoamerica"
            width={800}
            height={1000}
          />

          <p>
            {" "}
            imagen tomada por{" "}
            <span className=" text-orange-400">tudigitalnegocio.com</span>
          </p>
        </section>

        <section>a</section>
      </figure>

      <h2 className=" text-4xl mt-10 font-BebasNeue">
        BASE DE UN ENTORNO LATINOAMERICANO:
      </h2>

      <section>
        <ol className=" border-2 border-colorBase p-5 gap-5 overflow-auto">
          <section>
            <article className="flex gap-4 ">
              {images.map((image, index) => (
                <figure key={index} className="relative w-full h-auto">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="rounded-lg shadow-lg bg-orange-400"
                  />
                </figure>
              ))}
            </article>
          </section>

          <section className=" flex  p-5 gap-24 ">
            {/* Naturaleza */}
            <section className="w-full md:w-1/2">
              <li className="text-4xl text-trend font-BebasNeue border-orange-400 border-2 bg-orange-400 shadow-2xl rounded-xl">
                Naturaleza, es la base de la esencia.
              </li>

              <ul className="border-2 border-colorBase p-5 bg-colorBase inner-lg mt-3">
                <li className="text-orange-400 text-2xl font-BebasNeue relative group">
                  Montañas
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Mesetas
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Llanuras
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Volcanes
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Valle
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Islas
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Desiertos
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Selvas
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Delta
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Playas
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Cañones
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
              </ul>
            </section>

            {/* Plantas y animales */}
            <section>
              <li className="text-4xl text-trend font-BebasNeue border-orange-400 border-2  bg-orange-400 shadow-2xl rounded-xl">
                Plantas y animales
              </li>
            </section>

            {/* Estilo arquitectónico */}
            <section>
              <li className="text-4xl text-trend font-BebasNeue border-orange-400 border-2  bg-orange-400 shadow-2xl rounded-xl">
                Su estilo arquitectónico es muy representativo.
              </li>
              <ul className="border-2 border-colorBase p-5 bg-colorBase inner-lg mt-3">
                <li className="text-orange-400 text-2xl font-BebasNeue relative group">
                  Estilo Colonial
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Estilo Neocolonial
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Estilo Vernáculo
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Estilo Patagónico
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Estilo Modernista o Contemporáneo
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Estilo Mexicano Tradicional
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Estilo Andino
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
                <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                  Estilo Tropical (Caribeño)
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                </li>
              </ul>
            </section>

            {/* Atmósfera */}
            <section>
              <li className="text-4xl text-trend font-BebasNeue border-orange-400 border-2  bg-orange-400 shadow-2xl rounded-xl">
                La atmósfera.
              </li>
            </section>

            {/* Mas */}
            <section>
              <ol className="flex pl-6 text-lg border-2 border-orange-400 p-5 gap-5">
                {/* Los objetos comunes */}
                <section>
                  <li className="text-4xl text-trend font-BebasNeue border-orange-400 border-2 bg-orange-400 shadow-2xl rounded-xl">
                    Los objetos comunes que suelen usar los habitantes.
                  </li>
                  <ul className="border-2 border-colorBase p-5 bg-colorBase inner-lg mt-3">
                    <li className="text-orange-400 text-2xl font-BebasNeue relative group">
                      Hay muchas cosas comunes que usan, eso puede ser una buena
                      representación de la vida de los individuos.
                      <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                    </li>
                  </ul>
                </section>

                {/* La pobreza y métodos caseros */}
                <section>
                  <li className="text-4xl text-trend font-BebasNeue border-orange-400 border-2  bg-orange-400 shadow-2xl rounded-xl">
                    La pobreza y métodos caseros.
                  </li>
                  <ul className="border-2 border-colorBase p-5 bg-colorBase inner-lg mt-3">
                    <li className="text-orange-400 text-2xl font-BebasNeue relative group">
                      La pobreza, los métodos caseros para poder crear una vida
                      sostenible, es un detalle muy importante.
                      <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                    </li>
                  </ul>
                </section>

                {/* Sucesos ordinarios */}
                <section>
                  <li className="text-4xl text-trend font-BebasNeue border-orange-400 border-2 bg-orange-400 shadow-2xl rounded-xl">
                    Los sucesos ordinarios.
                  </li>
                  <ul className="border-2 border-colorBase p-5 bg-colorBase inner-lg mt-3">
                    <li className="text-orange-400 text-2xl font-BebasNeue relative group">
                      La suciedad, el deporte como el fútbol, billares. Hay que
                      exponer esos objetos que entretienen a los
                      latinoamericanos, exponer el conformismo de las personas
                      latinoamericanas, personas que no salen de lo habitual y
                      siguen esa tendencia común.
                      <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                    </li>
                    <li className="text-orange-400 text-2xl font-BebasNeue relative group mt-2">
                      Como somos muy unidos, las mismas cosas que nos
                      entretienen nos representan.
                      <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                    </li>
                  </ul>
                </section>
              </ol>
            </section>
          </section>
        </ol>
      </section>
    </section>
  );
};

export default CulturaLATAM;
