import { useState } from "react";
import Image from "next/image"; // Asegúrate de que esto esté correctamente importado
import Link from "next/link"; // Asegúrate de que esto esté correctamente importado

// Definición del componente
const Galeria: React.FC = () => {
  // Array de imágenes
  const images: string[] = [
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
  ];

  // Estados
  const [error, setError] = useState<Error | null>(null);
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [componentName, setComponentName] = useState<string>("");

  // Manejo del clic
  const handleClick = (id: string) => {
    const buttonNumber = parseInt(id.substring(1));
    const componentPath = `lote${buttonNumber}/page`; // Nombre de la carpeta y archivo

    import(`/src/app/biblioteca/${componentPath}`)
      .then((module) => {
        setConfirmation(true);
        setComponentName(componentPath);
        console.log("Componente importado:", componentPath);
      })
      .catch((error) => {
        console.error(`Error al importar ${componentPath}`, error);
        setError(error);
        alert(`Error al importar ${componentPath}: ${error.message}`);
      });
  };

  const ids = images.map((_, index) => `b${index + 1}`);

  return (
    <section >
      

     {/* galería */}
<div className="w-full p-5">
  <div className="text-trend font-BebasNeue text-8xl">PORTFOLIO</div>

  <div>
    {confirmation && <div>Componente importado correctamente.</div>}
    
    {/* Contenedor Flexbox */}
    <div className="flex flex-wrap justify-center  gap-1">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  transition-transform duration-300 transform hover:z-20 hover:scale-105"
        >
          {/* Contenedor de imagen agrandado al pasar el mouse */}
          <Image
            src={image}
            alt={`Imagen ${index + 1}`}
            width={400}
            height={400}
            className="transition duration-300 transform grayscale hover:grayscale-0 hover:scale-105 rounded-md" // Imagen en gris por defecto
          />
          
          <Link href={`/biblioteca/lote${index + 1}`} passHref>
            <button
              id={ids[index]}
              className="absolute h-5 w-auto top-2 right-2 bg-neutral-800 text-black px-3 py-1 rounded-md shadow-md transition-transform duration-300 transform hover:scale-125" // Botón que aumenta al pasar el mouse
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
</div>
{/* fin galería */}



      


    </section>
  );
};

export default Galeria;