'use client'

import { useState } from "react";
import Image from "next/image";

// Importar componente Rama
import Rama from "./ramificacion/importacionRama"

interface Carpeta {
  id: number;
  imagen: string;
  nombre: string;
  json: string; // Asegúrate de que json sea siempre una cadena
}

const ComponenteVacio: React.FC = () => {
  const [openFolders, setOpenFolders] = useState<number[]>([]);
  const [folderInfo, setFolderInfo] = useState<string>("");

  // Datos de las carpetas
  const carpetas: Carpeta[] = [
    { id: 1, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 1", json: "info_01" },
    { id: 2, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 2", json: "info_02" },
    { id: 3, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 3", json: "info_03" },
    { id: 4, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 4", json: "info_04" },
    { id: 5, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 5", json: "info_05" },
    { id: 6, imagen: "/DiseñoWeb/WebRecursos/carpeta.svg", nombre: "Carpeta 6", json: "info_06" },
  ];

  const toggleContenedor = (id: number) => {
    setOpenFolders((prevState) =>
      prevState.includes(id)
        ? prevState.filter((folderId) => folderId !== id)
        : [...prevState, id]
    );
  };

  // Función para manejar el clic y pasar la información de la carpeta
  const handleClickCarpeta = (jsonInfo: string) => {
    console.log(`Información de la carpeta: ${jsonInfo}`);
    setFolderInfo(jsonInfo); // Guardamos la información de la carpeta seleccionada
  };

  return (
    <div className="md:mt-20 mt-[800px]">
      <div className="relative h-screen w-screen">
        <div className="border-4 border-trend text-center w-80 h-fill">
          <div>
            <strong>Clientes Locales / Clientes Internacionales</strong>
          </div>
          <div>
            <strong className="text-3xl">!</strong> Una necesidad en común que los une
          </div>
        </div>

        <div className="relative bg-trend w-full h-5/6 p-20">
          <div className="flex flex-wrap gap-10 justify-center md:justify-start">
            {carpetas.map((carpeta) => (
              <div key={carpeta.id} className="flex flex-col items-center">
                <button
                  onClick={() => {
                    toggleContenedor(carpeta.id);
                    handleClickCarpeta(carpeta.json); // Pasamos la información de la carpeta al hacer clic
                  }}
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
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <button
                      onClick={() => toggleContenedor(carpeta.id)}
                      className="z-30 absolute top-4 right-10 text-xl font-bold text-trend"
                    >
                      X
                    </button>
                    {/* Mostrar el componente Rama y pasar la información */}
                    <div className="bg-colorBase w-full h-full z-20 p-5">
                      <Rama folderInfo={folderInfo} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponenteVacio;
