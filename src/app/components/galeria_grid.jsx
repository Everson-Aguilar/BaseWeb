"use client";

import Image from "next/image";
import "../css/galeria.css"; // Asumiendo que este es tu archivo de 








{/*  imagen portada miniatura */}
const images = [ 
  "/DiseñoWeb/portfolio/g1.jpg",
  "/DiseñoWeb/portfolio/g2.jpg",
  "/DiseñoWeb/portfolio/g3.jpg",
  "/DiseñoWeb/portfolio/g4.jpg",
  "/DiseñoWeb/portfolio/g5.jpg",
  "/DiseñoWeb/portfolio/g6.jpg",
  "/DiseñoWeb/portfolio/g7.jpg",
  "/DiseñoWeb/portfolio/g8.jpg",
  "/DiseñoWeb/portfolio/g9.jpg",
  "/DiseñoWeb/portfolio/g10.jpg",
  "/DiseñoWeb/portfolio/g11.jpg",
  "/DiseñoWeb/portfolio/g12.jpg",
];

const galeria = () => {
  // Función para manejar el clic en el botón
  const handleClick = (id) => {
    console.log(`Se hizo clic en el botón ${id}`);
  };

  // Generar los IDs de los botones
  const ids = images.map((_, index) => `b${index + 1}`);

  return (

    


    <div>


    <div className="galeria w-full h-full grid grid-cols-4 gap-4">
      {/* Renderizamos cada imagen de manera individual */}
      {images.map((image, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden">
          <Image src={image} alt={`Imagen ${index + 1}`} width={400} height={400} />
          <button
            key={index}
            id={ids[index]}
            className="absolute h-5 w-auto top-2 right-2 bg-neutral-800 text-black px-3 py-1 rounded-md shadow-md"
            onClick={() => handleClick(ids[index])} // Manejador de evento onClick
          >
            <Image
              src="/DiseñoWeb/ver.svg"
              alt="ver"
              layout="fill"
              objectFit="fill"
            />
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default galeria;
