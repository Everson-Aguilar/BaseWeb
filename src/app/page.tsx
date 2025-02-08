"use client";

import React from "react";
import { motion } from "framer-motion";


// Components
import Header from "./components/header";
import Login from "./components/login"
import Contact from "./components/el_guias";
import Introductions from "./components/introduccion";
import Tools from "./components/herramientas";
import Rules from "./components/reglas";
import Sell from "./components/retiro";
import SubServices from "./components/paquetes";
import Portfolio from "./components/portfolio";
import Services from "./components/servicios";
import CreateWorlds from "./components/separadores/NuestraFilosofia";
import DesingTheImpacts from "./components/separadores/plan";
import Pack from "./components/separadores/proyectos";
import MeettheFounder from "./components/venAvivirUnaVidaDiferente";
import Footer from "./components/footer";

// Styles
import "./globals.css";

const Home: React.FC = () => {
  return (
    <>



      <header>
        <Header />
      </header>

      <section> <Login/> </section>


      <main>
        <nav role="navigation" aria-label="Contact Section">
          <Contact />
        </nav>

        <nav role="navigation" aria-label="About the Author">
          <MeettheFounder />
        </nav>



        <section className="mt-5" aria-labelledby="introduction">
          <h2 id="introduction" className="sr-only">
            Introduction
          </h2>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <Introductions />
          </motion.div>
        </section>

      



        <section>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <Tools />
          </motion.div>
        </section>

        <section>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }}
          ></motion.div>
        </section>

        {/* Our Philosophy Section */}
        <section aria-labelledby="philosophy">
          <h2 id="philosophy" className="sr-only">
            Our Philosophy
          </h2>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <CreateWorlds />
          </motion.div>
        </section>

        <section>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <Services />
          </motion.div>
        </section>

        {/* Subservices Section */}
        <section aria-labelledby="subservices">
          <h2 id="subservices" className="sr-only">
            Subservices
          </h2>
          <DesingTheImpacts />
        </section>

        <section className="mt-20" aria-labelledby="rules">
          <h2 id="rules" className="sr-only">
            Rules
          </h2>
          
            <Rules />
          
        </section>

        <section className="mt-20" aria-labelledby="pricing">
          <h2 id="pricing" className="sr-only">
            Pricing
          </h2>
          
            <SubServices />
         
        </section>

        {/* Projects Section */}
        <section aria-labelledby="projects">
          <h2 id="projects" className="sr-only">
            Projects
          </h2>
          <Pack />
        </section>

        <section className="mt-5" aria-labelledby="portfolio">
          <h2 id="portfolio" className="sr-only">
            Portfolio
          </h2>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <Portfolio />
          </motion.div>
        </section>

        <section className="mt-10" aria-labelledby="retreat">
          <h2 id="retreat" className="sr-only">
            Retreat
          </h2>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <Sell />
          </motion.div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;


  /*  GUARDAR Y SUBIR APLICACION   */

/* git-hub pasos para guardar CONSOLA (prueba)
git add .
git commit -m "08/02/2025"
git pull origin main
git push origin main */

/* git-hub pasos para guardar CONSOLA (produccion)
git add .
git commit -m "23/12/2024"
git pull origin develop
git push origin develop */


//--------------------------





//git fetch origin
//git reset --hard origin/main
//extraer informacion de GIT HUB

/*
     

     Ramas

git branch: Muestra todas las ramas en el repositorio.
git branch <nombre-rama>: Crea una nueva rama.
git checkout <nombre-rama>: Cambia a la rama especificada.
git checkout -b <nombre-rama>: Crea y cambia a una nueva rama.
git merge <nombre-rama>: Fusiona la rama especificada en la rama actual.
     
     */

/*
      ///////////////// SUBIR CONFIG AL VPS //////////////////////////

     Ejecuta el comando de construcción: Navega a la carpeta de tu proyecto y ejecuta:

bash
Copiar código
npm run build
Este comando generará la compilación de producción en el directorio .next.

Inicia la aplicación con PM2: Una vez completada la construcción, inicia la aplicación en modo producción con PM2:

bash
Copiar código
pm2 start npm --name "BaseWeb" -- start
Guarda el estado en PM2: Para asegurarte de que la aplicación se inicie automáticamente después de un reinicio del servidor:

bash
Copiar código
pm2 save
Después de esto, tu aplicación debería ejecutarse correctamente en segundo plano.
     
     
     */
