import React from "react";
import Image from "next/image";

const ComicStory: React.FC = () => {
  // Array of icons
  const topIcons = [
    "/DiseñoWeb/iconos/adaptabilidad/negocioLocal.svg",
    "/DiseñoWeb/iconos/adaptabilidad/perfil.svg",
    "/DiseñoWeb/iconos/adaptabilidad/filosofiaVida.svg",
    "/DiseñoWeb/iconos/adaptabilidad/producto.svg",
    "/DiseñoWeb/iconos/adaptabilidad/reconocimientoLocal.svg",
  ];

  const bottomIcons = [
    "/DiseñoWeb/iconos/adaptabilidad/negocioVirtual.svg",
    "/DiseñoWeb/iconos/adaptabilidad/simbolismo.svg",
    "/DiseñoWeb/iconos/adaptabilidad/filosofiaIdentidad.svg",
    "/DiseñoWeb/iconos/adaptabilidad/diseñoProducto.svg",
    "/DiseñoWeb/iconos/adaptabilidad/reconocimientoGlobal.svg",
  ];

  return (
    <div className="w-full relative  flex flex-col md:flex-row text-green p-5 justify-center items-center">

      <div className=" z-10  text-8xl relative text-green font-SixCaps mb-60"> With our  help, we can bring the <span className="border-b-2 border-b-green"> idea in your mind to life.</span> Go ahead, <span className=" text-orange-600 font-PermanentMarker"> invent!</span></div>
     

     <figure className="absolute  left-52 z-0 -translate-y-24 ">
     <Image
            src="/contenido/flag/flag01.png"
            alt="emocional"
            width={500}
            height={500}
          />

     </figure>
    



      {/* Diagrams */}
      <section className=" relative h-[1400px] md:h-[1000px] overflow-hidden  w-full p-2 text-green">
        <figure className="absolute z-20 md:top-1/4 top-20 scale-150 md:right-16  ">
          <Image
            src="/DiseñoWeb/letters/letter-02.svg"
            alt="emocional"
            width={100}
            height={100}
          />
        </figure>

      

        <h2 className="text-8xl font-BebasNeue text-center mb-4 mt-5 text-green">
          A different lifestyle...
        </h2>
        <div className="relative flex justify-center items-center bg-slate-300 bg-opacity-10 backdrop-blur-xl p-4 rounded-md h-2/4 shadow-lg z-10">
          <div className="absolute md:top-5 top-40 flex justify-center items-center gap-2 p-2 xl:p-5">
            {topIcons.map((src, index) => (
              <div
                key={index}
                className=" text-colorBase transition-all duration-300 ease-in-out h-12 w-12 xl:h-28 md:h-14 md:w-14 xl:w-28 flex justify-center items-center"
              >
                <Image
                  src={src}
                  alt={`Top icon ${index + 1}`}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </div>

          <div className="absolute md:bottom-5 bottom-40 flex justify-center items-center gap-2 p-2 xl:p-5">
            {bottomIcons.map((src, index) => (
              <div
                key={index}
                className=" text-green transition-all duration-300 ease-in-out h-12 w-12 md:h-14 md:w-14 xl:h-28 xl:w-28 flex justify-center items-center"
              >
                <Image
                  src={src}
                  alt={`Bottom icon ${index + 1}`}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center rounded-full w-60 h-full panel">
            <div className="absolute bg-green h-1 w-60"></div>
            <div className="absolute font-BebasNeue text-4xl text-green">
              Real <br /> Virtual
            </div>
          </div>
        </div>

        <article className="flex w-full md:flex-row p-5 gap-5">
          <div className="flex-row justify-center items-center md:w-1/2 text-center border-2 border-green p-4">
            <div className="flex justify-center items-center text-5xl">
              <div className="absolute h-14 w-14 border-green border-4 rounded-full"></div>
              <div className="text-green">!</div>
            </div>
            <h2 className="font-BebasNeue text-4xl text-green mt-5">Real</h2>
            <p className="text-xs text-green">
              Real is what you can touch, see, and feel. In a complex reality, its easy to get lost. There are diverse worlds in art, science, and beliefs. Being conscious of your decisions is key; you can choose between surviving or living fully. Experiencing beyond your awareness can reveal a great potential within you.
            </p>
          </div>

          <div className="flex-row justify-center items-center md:w-1/2 text-center border-2 border-green p-4">
            <div className="flex justify-center items-center text-5xl">
              <div className="absolute h-14 w-14 border-green border-4 rounded-full"></div>
              <div className="text-green">!</div>
            </div>
            <h2 className="font-BebasNeue text-4xl text-green mt-5">Virtual</h2>
            <p className="text-xs text-green">
              Virtual is more precise and clean than the real, although it lacks sensory dimension. Your communication skills are crucial to stand out in the community. Share your life philosophy and continuously learn. You are on a path of change, living in the present that shapes your future. Explore the paths of information and guide those who need it with your experiences.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ComicStory;
