// src/components/HolaMundo.tsx

import React, { useEffect, useState } from 'react';

const HolaMundo: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/api/pedidos');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
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
              <h3>Pedido {index + 1}</h3>
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
      <h1>¡Hola Mundo!</h1>
      <h2>peticiones</h2>
      {data ? (
        renderData(data)
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default HolaMundo;
