"use client";

// pages/Pack.js
import Image from "next/image";
import Layout from "../layout"; // Importar el componente Layout

// Título y descripción globales para todas las imágenes
const globalTitle = "CASA FAMILIAR-BAÑO";
const globalDescription = "''la soledad cuando no estan los padres en casa.''";

// Array de nombres de archivo de imágenes dentro de '/DiseñoWeb/portfolio/g1/'
const imageNames = [
  "g1.jpg",
  "g2.jpg",
  "g3.jpg",
  "g4.jpg",
  "g5.jpg",
  "g6.jpg",
  "g7.jpg",
  "g8.jpg",
  "g9.jpg",
  "g10.jpg",

];



const Pack = () => {
  // Directorio base de las imágenes
  const basePath = "/DiseñoWeb/portfolio/g3/";

  return (
    <Layout>
      

      {/* Mapeo de las imágenes */}
      {imageNames.map((imageName, index) => (
        <div
          key={index}
          className="bg-neutral-800 h-screen relative mb-1"
          
        >
          <Image
            src={`${basePath}${imageName}`}
            alt={`Imagen ${index + 1}`}
            layout="fill"
            objectFit="cover"
            unoptimized
          />
          <div className="absolute w-full h-32 text-neutral-100 p-3 z-20 flex font-BebasNeue text-7xl">
            <Image
              src="/DiseñoWeb/logoblanco.svg"
              alt="Logo"
              width={300}
              height={300}
            />
            <div>
            <div className="text-4xl text-neutral-100">{globalTitle}</div>
              <p className="text-sm font-Quicksand">{globalDescription}</p>
            </div>
          </div>
          <div className="bg-neutral-800 absolute opacity-60 text-neutral-100 w-full h-40 flex p-2"></div>
        </div>
      ))}
    </Layout>
  );
};

export default Pack;



