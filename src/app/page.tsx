"use client";

///////////////////////////////// ALMACENAMIENTO
import React, { useEffect, useRef, useState } from "react"; // efecto, referencia, estado
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
//componente

import Header from "./components/header";
import El_guias from "./components/el_guias";
import Retiro from "./components/retiro";
import Reglas from "./components/reglas";
import Introduccion from "./components/introduccion";
import Exposicion from "./components/exposicionClientes";
import PrecioServicio from "./components/paquetes";
import Portfolio from "./components/portfolio";
import CompetenciaComercial from "./components/competenciaComercial";
import Servicio from "./components/servicios";
import NuestraFilosofia from "./components/separadores/NuestraFilosofia";
import SubServicios from "./components/separadores/plan";
import Proyectos from "./components/separadores/proyectos";
import Ejemplos from "./components/separadores/ejemplos";
import VidaDiferente from "./components/venAvivirUnaVidaDiferente";
import Herramientas from "./components/herramientas";
import Mapa from "./components/mapa";
import Footer from "./components/footer";

//fuentes

import "./globals.css";

export default function Home() {
  return (
    <div className="App ">
      <header>
        <Header />
      </header>

      {/*       v              ENTER MAIN            v          */}
      {/* INFORMACION:   esta es la parte donde estan lo elementos grandes de la aplicacion!*/}

      <nav>
        <VidaDiferente />
      </nav>

      <main>
        <section className=" mt-5">
          <motion.div
            whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
            initial={{ opacity: 0 }} // Comienza invisible
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }} // Repite la animación cada vez que entra o sale
          >
            <Introduccion />
          </motion.div>
        </section>

        <section>
          <motion.div
            whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
            initial={{ opacity: 0 }} // Comienza invisible
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }} // Repite la animación cada vez que entra o sale
          ></motion.div>
        </section>

        {/* separador NuestraFilosofia =================================================*/}

        <section>
          <motion.div
            whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
            initial={{ opacity: 0 }} // Comienza invisible
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }} // Repite la animación cada vez que entra o sale
          >
            <NuestraFilosofia />
          </motion.div>
        </section>

        {/*  FIN separador NuestraFilosofia =================================================*/}

        <div>
          <motion.div
            whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
            initial={{ opacity: 0 }} // Comienza invisible
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }} // Repite la animación cada vez que entra o sale
          >
            <Servicio />
          </motion.div>
        </div>

        {/* separador Subservicio =================================================*/}

        <div>
          <SubServicios />
        </div>

        {/*FIN separador Subservicio =================================================*/}

        <section className="mt-20">
          <motion.div
            whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
            initial={{ opacity: 0 }} // Comienza invisible
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }} // Repite la animación cada vez que entra o sale
          >
            <Reglas />
          </motion.div>
        </section>

        <section className=" mt-20">
          {" "}
          <motion.div
            whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
            initial={{ opacity: 0 }} // Comienza invisible
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }} // Repite la animación cada vez que entra o sale
          >
            <PrecioServicio />
          </motion.div>
        </section>

        <section></section>

        {/* DIVISION proyectos */}

        <Proyectos />

        {/* FIN DIVISION proyectos */}

        <section className=" mt-5">
          <motion.div
            whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
            initial={{ opacity: 0 }} // Comienza invisible
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }} // Repite la animación cada vez que entra o sale
          >
            <Portfolio />
          </motion.div>
        </section>

        <section className=" mt-10">
          <motion.div
            whileInView={{ opacity: 1 }} // Se vuelve visible cuando entra en el viewport
            initial={{ opacity: 0 }} // Comienza invisible
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }} // Repite la animación cada vez que entra o sale
          >
            <Retiro />
          </motion.div>
        </section>
      </main>

      {/*       v              EXIT MAIN            v          */}

      <div>
        <El_guias />
      </div>

      <section>
        <Footer />
      </section>

      {/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$--FIN   POLITICA--$$$$$$$$$$$$$$$$$$$$$$$$$ */}
    </div>
  );
}

{
  /*  GUARDAR Y SUBIR APLICACION   */
}
/* git-hub pasos para guardar CONSOLA (prueba)
git add .
git commit -m "20/11/2024"
git pull origin main
git push origin main */

/* git-hub pasos para guardar CONSOLA (produccion)
git add .
git commit -m "19/11/2024"
git pull origin develop
git push origin develop */

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
