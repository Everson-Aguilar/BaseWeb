"use client";

// pages/Pack.js
import Image from "next/image";

// Título y descripción globales para todas las imágenes
const globalTitle = "LOS MICRODETALLES";
const globalDescription =
  "''Es la clave de un buen resultado, nunca le dejes de dar rosas.''";

// Array de nombres de archivo de imágenes dentro de '/DiseñoWeb/portfolio/g1/'
const imageNames = [
  "g1.jpg",
  "g2.jpg",
  "g3.jpg",
  "g4.jpg",
  "g5.jpg",
  "g6.jpg",
  "g7.jpg",
];

const Pack = () => {
  // Directorio base de las imágenes
  const basePath = "/DiseñoWeb/portfolio/g10/";

  return (
    <div>
      {/* Mapeo de las imágenes */}
      {imageNames.map((imageName, index) => (
        <div key={index} className="bg-neutral-800 h-screen relative mb-1">
          <Image
            src={`${basePath}${imageName}`}
            alt={`Imagen ${index + 1}`}
            layout="fill"
            objectFit="scale-down"
            unoptimized
          />
          <div className="absolute w-full h-32 text-colorBase p-3 z-20 flex font-BebasNeue text-7xl">
            <Image
              src="/DiseñoWeb/logogris.svg"
              alt="Logo"
              width={300}
              height={300}
            />
            <div>
              <div className="text-4xl ">{globalTitle}</div>
              <p className="text-2xl  font-BebasNeue">
                {globalDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pack;
