

import React, { useEffect, useState } from "react";

const Peticiones: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/api/pedidos");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error al leer el archivo JSON:", error);
      }
    };

    loadData();
  }, []);

  const renderData = (data: any) => {
    // Convierte el JSON en una lista con títulos numerados
    if (Array.isArray(data)) {
      return (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <div className="p-5 bg-neutral-700 rounded-xl font-VT323 text-3xl text-neutral-400 text-">Pedido-$$$ : {index + 1}</div>
              <ul>
                {Object.entries(item).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {String(value)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      return <p>No hay datos disponibles</p>;
    }
  };

  return (
    <div>
      <div>
        <div className=" text-2xl text-neutral-700 font-Staatliches">PETICIONES RECIBIDAS</div>
        <div className=" p-5 border-neutral-500 text-neutral-700 border ">{data ? renderData(data) : <div>Cargando datos...</div>}</div>
      </div>
    </div>
  );
};

export default Peticiones;
