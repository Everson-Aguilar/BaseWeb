import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Galeria = ({ images }) => {
  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState(false); // Estado para la confirmación
  const [componentName, setComponentName] = useState(""); // Estado para el nombre del componente importado

  const handleClick = (id) => {
    const buttonNumber = parseInt(id.substring(1));
    const componentName = `lote${buttonNumber}/page`; // Nombre de la carpeta y archivo

    import(`./biblioteca/${componentName}`)
      .then((module) => {
        setConfirmation(true);
        setComponentName(componentName);
        console.log("Componente importado:", componentName); // Mensaje de impresión en la consola
      })
      .catch((error) => {
        console.error(`Error al importar ${componentName}`, error); // Mensaje de alerta en la consola
        setError(error);
        window.alert(`Error al importar ${componentName}: ${error.message}`); // Alerta al usuario con el mensaje de error
      });
  };

  const ids = images.map((_, index) => `b${index + 1}`);

  return (
    <div>
      {error && (
        <div>Error al cargar el componente: {error.message}</div>
      )}
      {confirmation && <div>Componente importado correctamente.</div>}
      <div className="galeria w-full h-full grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={`Imagen ${index + 1}`}
              width={400}
              height={400}
            />
            <Link href={`/biblioteca/lote${index + 1}`} passHref>
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
