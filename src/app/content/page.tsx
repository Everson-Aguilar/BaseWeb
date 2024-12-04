import React from "react";
import Image from "next/image";

// imagenes

const CulturaLATAM: React.FC = () => {
  return (
    <section className=" relative p-5 bg-trend text-colorBase ">
      <section className="relative h-1/2   ">
        <h1 className=" relative pt-24  z-20 p-5 text-7xl font-BebasNeue mb-6 text-center">
          <span className="text-orange-400">Cultura </span>
          <span className="bg-orange-400 p-5">LATAM </span>{" "}
          <span className="bg-trend p-2">
            en tus Videojuegos: ¡Es Hora de Dejar de Imitar y Empezar a Crear
            con Orgullo Latino!
          </span>
        </h1>

        <p className="relative z-20 text-sm  p-5 leading-relaxed mb-6">
          <span className=" text-7xl  text-orange-400">!</span>En LATAM somos
          conocidos por nuestra viveza, alegría y esa “malicia” encantadora que
          nos hace tan auténticos. ¿Imaginas integrar este estilo tan vivo y
          dinámico en tus diseños? ¡Podría hacer que tu proyecto se destaque por
          su desorden, pero de una forma llamativa, creativa y única!
        </p>

        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-trend rotate-180 to-transparent z-10"></div>

        <Image
          src="contenido\cap01/latamOpti.png" // Ruta relativa desde la carpeta `public`
          alt="latinoamerica"
          layout="fill"
          className="absolute top-0"
        />

        <section className="relative z-10 top-0 p-5">
          <p>
            {" "}
            imagen tomada por{" "}
            <span className=" text-orange-400 ">tudigitalnegocio.com</span>
          </p>
        </section>
      </section>
      <section className=" relative flex-row md:flex gap-5 space-y-5">
        <section className="md:w-1/2 border-2 p-5 mt-5  border-colorBase">
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
      <figure className="  flex p-5 shadow-xl"></figure>
      <h2 className=" text-4xl mt-10 font-BebasNeue">
        BASE DE UN ENTORNO LATINOAMERICANO:
      </h2>

      <article>

     
  <h2>Sur de Barranquilla: Un Pueblo Disfrazado de Ciudad</h2>
  
  <div>
    <h3 className="text-orange-400 text-2xl">División Cultural Basada en la Economía</h3>
    <p>
      En el sur de Barranquilla, las personas humildes son comunes y vibrantes. Su vestimenta ligera y sus costumbres reflejan un estilo de vida adaptado al clima caliente. La falta de tecnología avanzada y las casas reconstruidas con materiales básicos, como ladrillos rojos y ventanas de metal, son indicadores de pobreza avanzada.
    </p>
    <p>
      <strong className="underline">PUNTO CLAVE:</strong> Casas con materiales básicos, ladrillos rojos y rejas son representativas. Las rejas son un símbolo clave, como si fueran canarios atrapados.
    </p>
  </div>
  
  <div>
    <h3 className="text-orange-400 text-2xl">Atmósfera y Ambiente</h3>
    <p>
      El ruido constante, la música en cada esquina y los grupitos que ven fútbol son parte esencial del sur. Las calles son siempre bulliciosas, con tiendas en cada esquina. Los colores cálidos, el calor y las brisas fuertes dan la sensación de estar en una playa.
    </p>
    <p>
      <strong className="underline">PUNTO CLAVE:</strong> La atmósfera es de playa sin agua. Los árboles de mango son una obligación, deben estar presentes.
    </p>
  </div>
  
  <div>
    <h3 className="text-orange-400 text-2xl">Estilo de Vida</h3>
    <p>
      La gente es vibrante, fiestera, sociable y humilde. A menudo trabajan en fábricas y llevan vidas de sacrificio. Las casas están acumuladas y las calles sucias, pero hay arte natural en todo. Los niños crecen rápido, y la juventud se vive al máximo con pocos recursos, mucho alcohol y algunas veces delincuencia.
    </p>
    <p>
      <strong className="underline">PUNTO CLAVE:</strong> Callejones con casas de dos pisos, rejas y baldosas rojas de cuadritos son fundamentales.
    </p>
  </div>
  
  <div>
    <h3 className="text-orange-400 text-2xl">Relaciones Sociales</h3>
    <p>
      Los patrones sociales agrupan a las personas en islas de intereses comunes. Hay una fidelidad a los grupos y una fuerte división social. Los problemas sociales son enfrentados de manera comunitaria; los actos delictivos como el robo son riesgosos debido a la respuesta violenta.
    </p>
    <p>
      <strong className="underline">PUNTO CLAVE:</strong> Las caletas, tiendas paisas con camionetas 4x4 y la esencia comunitaria son características únicas.
    </p>
  </div>
  
  <div>
    <h3 className="text-orange-400 text-2xl">Estilo y Arquitectura</h3>
    <p>
      Las casas tienen arreglos caseros, son viejitas y hechas por albañiles locales. Los mobiliarios son para clima caliente, y las rejas son una constante. Los callejones son icónicos, representando la esencia de los pueblos dentro de la ciudad.
    </p>
    <p>
      <strong className="underline">PUNTO CLAVE:</strong> Árboles de mango, rejas, baldosas de arcilla, casas pegadas y el ambiente de playa son elementos esenciales.
    </p>
  </div>
  
  <div>
    <h3 className="text-orange-400 text-2xl">Detalles Adicionales</h3>
    <p>
      Las personas son interesantes y vibrantes, aunque faltan disciplina en educación y negocios. La delincuencia juvenil, las caletas y los tenderos paisas son parte del paisaje social y cultural del sur. Las mujeres tienen una belleza única adaptada al ambiente cálido, con una genética destacable.
    </p>
    <p>
      <strong className="underline">PUNTO CLAVE:</strong> La combinación de características sociales, culturales y económicas hace del sur de Barranquilla un lugar vibrante y único.
    </p>
  </div>



    

      </article>

    </section>
  );
};

export default CulturaLATAM;
