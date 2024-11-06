'use client'

import { useState } from "react";
import Image from "next/image";

interface Carpeta {
  id: number;
  imagen: string;
  nombre: string;
}

interface Contenido {
  idCarpeta: number;
  texto: string;
}

const ComponenteVacio: React.FC = () => {
  const [openFolders, setOpenFolders] = useState<number[]>([]);

  // Datos de las carpetas
  const carpetas: Carpeta[] = [
    { id: 1, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 1" },
    { id: 2, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 2" },
    { id: 3, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 3" },
    { id: 4, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 4" },
    { id: 5, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 5" },
    { id: 6, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 6" },
  ];

  // Datos de contenido para cada carpeta
  const contenido: Contenido[] = [
    { idCarpeta: 1, texto: "Contenido para Carpeta 1: Información detallada." },
    { idCarpeta: 2, texto: "Contenido para Carpeta 2: Información sobre proyectos." },
    { idCarpeta: 3, texto: "Contenido para Carpeta 3: Detalles del diseño web." },
    { idCarpeta: 4, texto: "Contenido para Carpeta 4: Historia de la empresa." },
    { idCarpeta: 5, texto: "Contenido para Carpeta 5: Recursos de marketing." },
    { idCarpeta: 6, texto: "Contenido para Carpeta 6: Testimonios de clientes." },
  ];

  const toggleContenedor = (id: number) => {
    setOpenFolders((prevState) =>
      prevState.includes(id)
        ? prevState.filter((folderId) => folderId !== id)
        : [...prevState, id]
    );
  };

  return (
    <div className="md:mt-20 mt-[800px]">
      <div className="relative h-screen w-screen">
        <div className="border-4 border-trend text-center w-80 h-fill">
          <div>
            <strong>Clientes Locales / Clientes Internacionales</strong>
          </div>
          <div>
            <strong className="text-3xl">!</strong> Una necesidad en común que
            los une
          </div>
        </div>

        <div className="relative bg-trend w-full h-5/6 p-20">
          <div className="flex flex-wrap gap-10 justify-center md:justify-start">
            {carpetas.map((carpeta) => {
              // Buscar contenido correspondiente a la carpeta
              const contenidoCarpeta = contenido.find(
                (item) => item.idCarpeta === carpeta.id
              );

              return (
                <div key={carpeta.id} className="flex flex-col items-center">
                  <button
                    onClick={() => toggleContenedor(carpeta.id)}
                    className="text-colorBase rounded"
                  >
                    <div className="transform transition-transform duration-300 hover:scale-110">
                      <Image
                        src={carpeta.imagen}
                        alt={carpeta.nombre}
                        width={100}
                        height={100}
                      />
                    </div>
                  </button>

                  <div className="text-colorBase mt-2 text-center">{carpeta.nombre}</div>

                  {openFolders.includes(carpeta.id) && (
                    <div className="absolute top-0 left-0 w-full h-full bg-colorBase flex justify-center items-center">
                      <button
                        onClick={() => toggleContenedor(carpeta.id)}
                        className="absolute top-4 right-4 text-xl font-bold text-trend"
                      >
                        X
                      </button>
                      {/* Mostrar el contenido de la carpeta */}
                      {contenidoCarpeta && (
                        <p>{contenidoCarpeta.texto}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponenteVacio;
