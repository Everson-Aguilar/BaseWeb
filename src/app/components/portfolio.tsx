import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Asegúrate de importar motion de framer-motion

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
    <section className=" text-colorBase   md:flex xl:flex ">
      {/* galería */}
      <section className="w-full md:w-1/2 p-5">
        <h2 className="text-trend font-BebasNeue text-8xl">PORTFOLIO</h2>

        <div>
          {confirmation && <div>Component imported successfully.</div>}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden group transition-transform duration-300 transform hover:scale-105"
                whileInView={{
                  opacity: 1,  // Hacer visible la imagen
                  scale: 1,    // Escalar la imagen a su tamaño original
                }}
                initial={{
                  opacity: 0,  // Comienza invisible
                  scale: 0.3,  // Comienza más pequeña
                }}
                transition={{
                  duration: 0.3,         // Duración de la animación
                  ease: "easeInOut",   // Suaviza la animación
                }}
                viewport={{ once: false }} // Se repite cada vez que entra o sale
              >
                {/* Contenedor agrandado al pasar el mouse */}
                <Image
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  width={400}
                  height={400}
                  className="transition duration-300 transform grayscale group-hover:grayscale-0 group-hover:scale-105" // Imágenes en gris por defecto, se agrandan al pasar el mouse
                />
                <Link href={`/biblioteca/lote${index + 1}`} passHref>
                  <button
                    id={ids[index]}
                    className="absolute h-5 w-auto top-2 right-2 bg-neutral-800 text-black px-3 py-1 rounded-md shadow-md transition-transform duration-300 transform hover:scale-125" // Aumentar tamaño al pasar el mouse sobre el botón
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
              </motion.div>
            ))}
          </section>
        </div>
      </section>
      {/* fin galería */}

      {/* Artista Digital */}
      <article className="p-5">
  <text className="mt-10 text-title">
    <h2 className="text-trend font-BebasNeue text-xl">
      STEPS TO CREATE ACCESSORIES AS A DIGITAL ARTIST:
    </h2>
    <ul className="text-1xl">
      <li>*Conceptualization and Visual References</li>
      <li>*High-Poly 3D Modeling</li>
      <li>*Retopology of the Model</li>
      <li>*UV Mapping</li>
      <li>*Texture Creation</li>
      <li>*Texture Application</li>
      <li>*Lighting and Rendering</li>
      <li>*Adjustments and Optimization</li>
      <li>*Testing and Evaluation</li>
      <li>*Final Delivery</li>
    </ul>

    <h2 className="text-trend font-BebasNeue text-xl">TECHNOLOGIES</h2>
    <ul className="text-1xl">
      <li>*Autodesk Revit</li>
      <li>*Blender</li>
      <li>*ZBrush</li>
      <li>*Substance Painter</li>
      <li>*Unity 3D / Unreal</li>
      <li>*Adobe After Effects</li>
      <li>*Adobe Photoshop</li>
      <li>*Adobe Premiere</li>
      <li>*Adobe Illustrator</li>
    </ul>
  </text>
</article>

    </section>
  );
};

export default Galeria;
