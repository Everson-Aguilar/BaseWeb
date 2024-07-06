"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../css/galeria.css"; // Archivo de estilos CSS

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

const Galeria = () => {
  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState(false); // Estado para la confirmación
  const [componentName, setComponentName] = useState(""); // Estado para el nombre del componente importado

  const handleClick = (id) => {
    const buttonNumber = parseInt(id.substring(1));
    const componentName = `pack_${buttonNumber}.jsx`; // Asegúrate de incluir la extensión .jsx

    import(`./biblioteca/${componentName}`)
      .then((module) => {
        setConfirmation(true);
        setComponentName(componentName);
        console.log("Componente importado:", componentName); // Mensaje de impresión en la consola
      })
      .catch((error) => {
        console.error(`Error al importar ${componentName}`, error);
        setError(error);
      });
  };

  const ids = images.map((_, index) => `b${index + 1}`);

  return (
    <div>
      {error && <div>Error al cargar el componente: {error.message}</div>}
      {confirmation && <div>Componente importado correctamente.</div>}
      <div className="galeria w-full h-full grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden">
            <Image src={image} alt={`Imagen ${index + 1}`} width={400} height={400} />
            <Link href={`./biblioteca/${componentName}`} passHref>
              <button
                id={ids[index]}
                className="absolute h-5 w-auto top-2 right-2 bg-neutral-800 text-black px-3 py-1 rounded-md shadow-md"
                onClick={() => handleClick(ids[index])}
              >
                <Image
                  src="/DiseñoWeb/ver.svg"
                  alt="ver"
                  layout="fill"
                  objectFit="fill"
                />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
