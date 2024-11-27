// src/components/EmptyComponent.tsx
import React from "react";
import Image from "next/image";

const EmptyComponent: React.FC = () => {
  return (
    <aside className=" relative flex-row  md:flex  w-screen bg-trend">
      <section className=" w-full md:w-1/3  ">
        <text className=" md:h-4/6 text-center ">
          <h2 className="text-colorBase  translate-y-5 justify-center text-3xl font-Staatliches">
            Available Services
            <section>
              <section className=" mb-10 relative pt-5 flex-wrap flex justify-center items-center text-center gap-20">
                {/* Repeat this block for each service */}
                {[
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB-  DESAROLLO WEB.svg",
                    alt: "Web Development",
                    label: "Web Development",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO GRAFICO.svg",
                    alt: "Graphic Design",
                    label: "Graphic Design",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO DE PRODUCTOS.svg",
                    alt: "Product Design",
                    label: "Product Design",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO DE INTERIORISMO.svg",
                    alt: "Interior Design",
                    label: "Interior Design",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- MARKETING DIGITAL.svg",
                    alt: "Digital Marketing",
                    label: "Digital Marketing",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- PUBLICIDAD.svg",
                    alt: "Advertising",
                    label: "Advertising",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO REDES SOCIALES.svg",
                    alt: "Social Media Content",
                    label: "Social Media",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO ENTORNO 3D.svg",
                    alt: "3D Environment Design",
                    label: "3D Environment Design",
                  },
                  {
                    src: "/DiseñoWeb/iconos/servicios/ICONOS WEB- DISEÑO ASSETS.svg",
                    alt: "Video Game Design",
                    label: "Video Game Design",
                  },
                ].map((service, index) => (
                  <figure key={index}>
                    <Image
                      src={service.src}
                      alt={service.alt}
                      width={80}
                      height={80}
                    />
                    <div className=" absolute w-5 font-Acme text-sm text-neutral-300 flex ">
                      {service.label}
                    </div>
                  </figure>
                ))}
              </section>
            </section>
          </h2>
        </text>

        {/* 01 */}
        <section className=" relative  md:h-1/3 flex text-center justify-center items-center p-5  ">
          <h2 className="  font-BebasNeue border-4 border-colorBase text-4xl text-colorBase items-center justify-center">
            {" "}
            Contact us and discover how, with our tools and expertise, we can create an innovative and unique design for your professional projects.
          </h2>

          <text className=" w-4/6 text-xs text-colorBase p-1">
            <span className=" text-5xl">!</span> From architectural plans to modern houses, buildings, bridges, parks, plazas, forests, mountains, and urban landscapes, we craft customized solutions that blend functionality and aesthetics to make your project stand out!
          </text>
        </section>
      </section>

      {/* 02 */}

      <figure className="  relative  overflow-hidden md:w-1/3   ">
        <Image
          src="/DiseñoWeb/panel_04.jpg"
          alt="Environmental Design"
          layout="fill"
          objectFit="cover"
        />
      </figure>

      {/* 03 */}

      <figure className=" relative w-full md:w-1/3  bg-opacity-10 backdrop-blur-md flex ">
        <Image
          src="/DiseñoWeb/panel_01.jpg"
          alt="Environmental Design"
          layout="fill"
          objectFit="cover"
        />

        <figure className=" relative  w-3/5 p-5">
          <div className=" h-fill  flex justify-center items-center ">
            <Image
              src="/DiseñoWeb/logogris.svg"
              alt="Logo"
              width={500}
              height={500}
            />
          </div>

          <h1 className="  font-Staatliches text-3xl md:text-6xl text-trend mt-1">
            3D Environment Design Services.
          </h1>
          <h2>
            <ul className=" text-2xl md:text-2xl pb-4 font-BebasNeue text-trend">
              <li> Video Games</li>
              <li> Architecture</li>
              <li> Cinematic Productions</li>
              <li> Marketing Solutions</li>
              <li>3D printing</li>
              <li> VR</li>
            </ul>
          </h2>
        </figure>

        <aside className=" relative w-1/3 text-xs md:text-base p-5 bg-opacity-10 backdrop-blur-md ">
          <p>
            <strong>In our</strong> <span className="text-2xl">studio,</span> we specialize in <strong>custom 3D environment design,</strong>
            creating immersive and functional spaces for <strong>video games,</strong>
            <strong>architecture,</strong> and entertainment. We offer a comprehensive approach,
            from concept to execution, blending detailed artistry with
            innovative technical solutions. Our designs focus on user
            experience, tailored to meet each client’s needs. Whether it’s a
            natural, urban, or futuristic environment, our team transforms ideas
            into captivating, high-quality <strong>virtual worlds.</strong>
          </p>
        </aside>
      </figure>
    </aside>
  );
};

export default EmptyComponent;
