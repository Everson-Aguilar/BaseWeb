"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//componentes

import CircularDiagram from "../../components/diagramaCircular";
import Maps from "../../components/mapa";
import Comments from "../../components/comentarios";
import Galery from "../../components/galeria";
import Tools from "../../components/herramientas";
import Door from "../../components/entrada";
import MeettheFounder from "../../components/venAvivirUnaVidaDiferente";
import Contact from "../../components/el_guias";

const MiComponente: React.FC = () => {
  return (
    <>
      <Contact />

      <MeettheFounder />

      <motion.div
        whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
        initial={{ opacity: 0 }} // Comienza invisible
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }} // Repite la animación cada vez que entra o sale
      >
        <section className=" relative z-0   flex-row  md:flex justify-start items-start text-center">
          <figure className=" w-screen md:w-1/2">
            <Image
              src="/DiseñoWeb/WebRecursos/figuraWeb.png"
              alt="comic 3"
              width={800}
              height={800}
            />

            <h2 className=" relative p-5 font-BebasNeue text-6xl text-trend">
              Step out of the social pattern <br /> to find your way...
            </h2>
          </figure>

          <section className=" relative h-screen bg:h-fill w-full  md:w-1/2 text-trend  p-5 ">
            <div className="relative top-1/2">
              <h2 className=" md:w-1/2 text-2xl font-BebasNeue">
                {" "}
                Everson Aguilar.
              </h2>
              <p>
                I am an explorer, and I dedicate myself to researching how life
                is lived from as natural a perspective as possible. True to my
                life philosophy, which can be summed up in a few words: to
                observe and appreciate both the sweet and the bitter aspects of
                existence, always from the perspective of the spectator... The
                key is to learn to observe, to know how to observe, without
                being enveloped by a distorted reality.
              </p>
            </div>
          </section>
        </section>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
        initial={{ opacity: 0 }} // Comienza invisible
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }} // Repite la animación cada vez que entra o sale
      >
        <section className=" relative z-20 h-fill w-screen bg-trend flex-row md:flex  text-center overflow-hidden ">
          <div className=" w-screen md:w-1/3 p-5 text-start text-colorBase ">
            <h2 className=" text-8xl font-BebasNeue text-colorBase">
              ARTISTIC
            </h2>
            <p className=" -translate-y-6 font-BebasNeue text-2xl">
              Observe why things are...
            </p>

            <Image
              src="/DiseñoWeb/WebRecursos/Artistico.png"
              alt="comic 3"
              width={1200}
              height={1200}
            />

            <h2 className=" text-6xl font-BebasNeue text-trend bg-colorBase">
              SPECIALTY
              <span className="text-8xl">
                <br />
                (A)
              </span>
            </h2>

            <p className="mb-5">
              <span className=" text-2xl font-BebasNeue">
                Environment Designer,
              </span>{" "}
              Specialized in modeling, texturing, sculpting, animation,
              photorealistic rendering, and retopology. With a strong ability to
              create detailed and functional environments, he approaches each
              project with a strategic focus and adaptability. Capable of
              handling high-pressure situations and managing stress, he is
              always ready to learn quickly and overcome new challenges in the
              3D world..
            </p>

            <h2 className=" text-3xl font-BebasNeue text-colorBase">SKILLS</h2>

            <table className="font-Quicksand w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-colorBase p-2 text-left">
                    Techniques
                  </th>
                  <th className="border border-colorBase p-2 text-left">
                    Assessment
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-colorBase p-2">
                    Conceptualization and Visual References
                  </td>
                  <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-colorBase p-2">
                    High-Polygon 3D Modeling
                  </td>
                  <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-colorBase p-2">
                    Model Retopology
                  </td>
                  <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-colorBase p-2">UV Mapping</td>
                  <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-colorBase p-2">
                    Texture Creation
                  </td>
                  <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-colorBase p-2">
                    Texture Application
                  </td>
                  <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-colorBase p-2">
                    Lighting and Rendering
                  </td>
                  <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-colorBase p-2">
                    Adjustments and Optimization
                  </td>
                  <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-colorBase p-2">
                    Testing and Evaluation
                  </td>
                  <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-colorBase p-2">
                    Final Delivery
                  </td>
                  <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>

            <h2 className="mt-10 text-3xl font-BebasNeue text-colorBase">
              EDUCATION
            </h2>
            <p>
              I am <strong>an explorer,</strong> dedicated to investigating life
              from the most authentic perspective possible. My life philosophy
              can be summed up in a simple idea: to observe and appreciate both
              the sweet and the bitter aspects of existence, always from the
              perspective of the observer. The key is learning to observe, to
              perceive clearly, without getting caught in a distorted reality.
            </p>

            <section>
              {" "}
              <CircularDiagram />{" "}
            </section>
          </div>

          <section className="relative w-screen md:w-1/3 h-fill flex-row justify-center items-center font-BebasNeue bg-trend text-trend">
            <figure className="flex justify-center items-center p-7 bg-colorBase h-fill w-fill">
              <Image
                src="/DiseñoWeb/logoGris.svg"
                alt="comic 3"
                width={100}
                height={100}
              />
              <span className="text-5xl"> 2</span> PERSPECTIVE ON LIFE{" "}
              <span className="text-5xl">(Art and Order)</span>
            </figure>

            <h2 className="mt-40 text-3xl font-BebasNeue text-colorBase">
              PROJECTS
            </h2>

            <section className="text-colorBase">
              <Galery />
            </section>
            {/* gallery */}
          </section>

          <section className="w-screen md:w-1/3 p-5 text-start text-colorBase">
  <h2 className="text-8xl font-BebasNeue text-colorBase">ORDER</h2>
  <p className="-translate-y-6 font-BebasNeue text-2xl">
    Plan the right path...
  </p>

  <Image
    src="/DiseñoWeb/WebRecursos/Orden.png"
    alt="comic 3"
    width={1200}
    height={1200}
  />

  <h2 className="text-6xl font-BebasNeue text-trend bg-colorBase">
    SPECIALTY{" "}
    <span className="text-8xl">
      <br />
      (B)
    </span>
  </h2>

  <p className="mb-5">
    <span className="text-2xl font-BebasNeue">
      Full-Stack Developer,
    </span>{" "}
    specialized in creating robust and scalable web applications, handling both front-end and back-end development. With a focus on modern technologies like Next.js, performance optimization, creating reusable components, and a deep understanding of web architecture, I provide strategic and functional solutions that transform projects into exceptional experiences. Skilled in managing states, API integration, security, and deployment of applications efficiently, always adapting to new challenges with constant learning and innovative solutions.
  </p>

  <h2 className="text-3xl font-BebasNeue text-colorBase">
    SKILLS
  </h2>

  <table className="font-Quicksand w-full border-collapse">
    <thead>
      <tr>
        <th className="border border-colorBase p-2">
          Technical Skills
        </th>
        <th className="border border-colorBase p-2">Evaluation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-colorBase p-2">
          Development with Next.js
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Routing and Navigation with Next.js
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Full Stack Development (Backend and Frontend)
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          API Integration (RESTful and GraphQL)
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Database Management (SQL and NoSQL)
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Server Development and VPS Configuration
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          User Interface Design (UI Design)
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Reusable Component Development in React
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Frontend Performance Optimization
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Development and Consumption of External APIs
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Web Authentication and Security (JWT, OAuth)
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Implementation of Web Services and Microservices
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Web Application Architecture Design
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          State Management in React (useState, Redux, Context API)
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Application Deployment on Platforms like Vercel, Netlify, or Heroku
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Server Configuration and Optimization
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Version Control with Git and GitHub
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Interactive and Dynamic Feature Development (Animations, Forms, etc.)
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Responsive Web Applications (Mobile-First Design)
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Web Development Testing and Debugging
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Styled Component Development (Tailwind CSS, Styled Components)
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Framework and Library Usage for Components (Material-UI, Chakra UI, etc.)
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          State and Context Management in Web Applications
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          SEO Optimization for Web Applications
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          Static and Dynamic Page Development with Next.js
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
      <tr>
        <td className="border border-colorBase p-2">
          SSR (Server-Side Rendering) and SSG (Static Site Generation) Pages
        </td>
        <td className="border border-colorBase p-2">⭐⭐⭐⭐⭐</td>
      </tr>
    </tbody>
  </table>
</section>

        </section>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
        initial={{ opacity: 0 }} // Comienza invisible
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }} // Repite la animación cada vez que entra o sale
      >
        <section className="  bg-colorBase flex-row  md:flex   justify-start items-start text-start mt-10">
          <div className=" w-full md:w-1/2 text-3xl font-BebasNeue text-trend">
            <h2 className="p-5">FREELANCER WORK </h2>

            <div className=" p-10">
              <Maps />
            </div>
          </div>

          <div className=" h-full  w-full md:w-1/2  ">
            <div className="p-10">
              <Comments />
            </div>
          </div>
        </section>
      </motion.div>

      <section className=" p-5 text-trend">
        <Tools />
      </section>

      <section>
        <Door />
      </section>
    </>
  );
};

export default MiComponente;
