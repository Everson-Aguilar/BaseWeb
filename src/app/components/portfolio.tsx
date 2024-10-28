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
    <section className=" bg-base  md:flex xl:flex ">
      {/* galería */}
      <div className="w-full md:w-1/2 p-5">
        <div className="text-trend font-BebasNeue text-8xl">PORTFOLIO</div>

        <div>
          {confirmation && <div>Componente importado correctamente.</div>}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden group transition-transform duration-300 transform hover:scale-105"
              >
                {" "}
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
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* fin galería */}

      {/* Artista Digital */}

      <div className=" p-5 ">
        <div className=" mt-10  text-title">
          <div className="text-trend font-BebasNeue text-xl">
            PASOS PARA CREAR ACCESORIOS COMO ARTISTA DIGITAL:
          </div>
          <ul className="text-1xl">
            <li>*Conceptualización y Referencias Visuales</li>
            <li>*Modelado 3D de Alto Polígono</li>
            <li>*Retopologización del Modelo</li>
            <li>*UV Mapping</li>
            <li>*Creación de Texturas</li>
            <li>*Aplicación de Texturas</li>
            <li>*Iluminación y Renderizado</li>
            <li>*Ajustes y Optimización</li>
            <li>*Pruebas y Evaluación</li>
            <li>*Entrega Final</li>
          </ul>

          <span className="text-trend font-BebasNeue text-xl">TECNOLOGÍAS</span>
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
        </div>
      </div>
    </section>
  );
};

export default Galeria;
