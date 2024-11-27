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
    <div className="w-full flex flex-col md:flex-row text-colorBase p-5 justify-center items-center">
      {/* Comics */}
      <div className="flex p-5 justify-center items-center gap-1 border text-xs md:text-1xlt xl:text-1xl font-Notable">
        {/* sideA */}
        <section className="space-y-20 mt-16">
          <article className="relative">
            <p className="absolute -translate-y-16 w-full p-3 border-2 bg-colorBase border-trend text-trend">
              - We need something that truly stands out, something that breaks away from everything the competition does.
            </p>
            <Image
              src="/DiseñoWeb/comic/comic1.jpg"
              alt="comic 1"
              width={300}
              height={300}
            />
          </article>

          <article className="relative">
            <p className="absolute -translate-y-16 w-full p-3 border-2 bg-colorBase border-trend text-trend">
              - Cats are the key to success!
            </p>
            <Image
              src="/DiseñoWeb/comic/comic3.jpg"
              alt="comic 3"
              width={300}
              height={300}
            />
          </article>

          <article className="relative">
            <p className="absolute -translate-y-16 w-full p-3 border-2 bg-colorBase border-trend text-trend">
              - With 3D tools, the only limit is our imagination. Lets conquer the market!
            </p>
            <Image
              src="/DiseñoWeb/comic/comic5.jpg"
              alt="comic 5"
              width={300}
              height={300}
            />
          </article>
        </section>

        {/* sideB */}
        <section className="space-y-20 mt-16">
          <article className="relative">
            <p className="absolute -translate-y-16 w-full p-3 border-2 bg-colorBase border-trend text-trend">
              - This isnt working; we need to rethink everything.
            </p>
            <Image
              src="/DiseñoWeb/comic/comic2.jpg"
              alt="comic 2"
              width={300}
              height={300}
            />
          </article>

          <article className="relative">
            <p className="absolute -translate-y-16 w-full p-3 border-2 bg-colorBase border-trend text-trend">
              - What if instead of the usual, we use 3D environment design? Imagine the possibilities!
            </p>
            <Image
              src="/DiseñoWeb/comic/comic4.jpg"
              alt="comic 4"
              width={300}
              height={300}
            />
          </article>

          <article className="relative">
            <p className="absolute -translate-y-16 w-full p-3 border-2 bg-colorBase border-trend text-trend">
              - Mom, the agency approved my service! Im heading to the center to grab your avocados.
            </p>
            <Image
              src="/DiseñoWeb/comic/comic6.jpg"
              alt="comic 6"
              width={300}
              height={300}
            />
          </article>
        </section>
      </div>

      {/* Diagrams */}
      <div className="h-[1400px] md:h-[1000px] bg-gradient-to-b from-white to-blue-200 w-full p-2 text-colorBase">
        <h2 className="text-2xl font-BebasNeue text-center mb-4 text-title">
          A different lifestyle...
        </h2>
        <div className="relative flex justify-center items-center bg-slate-300 bg-opacity-30 backdrop-blur-md p-4 rounded-md h-2/4 shadow-lg z-10">
          <div className="absolute top-10 flex justify-center items-center gap-2 p-2 xl:p-5">
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

          <div className="absolute bottom-10 flex justify-center items-center gap-2 p-2 xl:p-5">
            {bottomIcons.map((src, index) => (
              <div
                key={index}
                className=" text-colorBase transition-all duration-300 ease-in-out h-12 w-12 md:h-14 md:w-14 xl:h-28 xl:w-28 flex justify-center items-center"
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

          <div className="flex justify-center items-center rounded-full w-60 h-60 panel">
            <div className="absolute bg-trend h-1 w-60"></div>
            <div className="absolute font-BebasNeue text-4xl text-trend">
              Real <br /> Virtual
            </div>
          </div>
        </div>

        <div className="flex w-full md:flex-row p-5 gap-5">
          <div className="flex-row justify-center items-center md:w-1/2 text-center border-2 border-trend p-4">
            <div className="flex justify-center items-center text-5xl">
              <div className="absolute h-14 w-14 border-trend border-4 rounded-full"></div>
              <div className="text-trend">!</div>
            </div>
            <h2 className="font-BebasNeue text-4xl text-trend mt-5">Real</h2>
            <p className="text-xs text-trend">
              Real is what you can touch, see, and feel. In a complex reality, its easy to get lost. There are diverse worlds in art, science, and beliefs. Being conscious of your decisions is key; you can choose between surviving or living fully. Experiencing beyond your awareness can reveal a great potential within you.
            </p>
          </div>

          <div className="flex-row justify-center items-center md:w-1/2 text-center border-2 border-trend p-4">
            <div className="flex justify-center items-center text-5xl">
              <div className="absolute h-14 w-14 border-trend border-4 rounded-full"></div>
              <div className="text-trend">!</div>
            </div>
            <h2 className="font-BebasNeue text-4xl text-trend mt-5">Virtual</h2>
            <p className="text-xs text-trend">
              Virtual is more precise and clean than the real, although it lacks sensory dimension. Your communication skills are crucial to stand out in the community. Share your life philosophy and continuously learn. You are on a path of change, living in the present that shapes your future. Explore the paths of information and guide those who need it with your experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicStory;
