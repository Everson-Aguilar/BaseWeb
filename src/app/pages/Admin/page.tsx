// Indica que el componente debe ser renderizado en el cliente, no en el servidor
'use client';
// Importa las librerías necesarias
import React, { useState, useEffect } from 'react';

// Define el componente funcional 'YourComponent'
const Admin: React.FC = () => {
  // Declara un estado para almacenar los datos obtenidos del endpoint
  const [data, setData] = useState<any>(null);

  // useEffect se usa para realizar efectos secundarios en el componente
  useEffect(() => {
    // Función asíncrona para obtener los datos del endpoint
    async function fetchData() {
      try {
        // Realiza una solicitud HTTP GET al endpoint '/api/verificacion'
        const response = await fetch('/api/verificacion'); // Ajusta la ruta del endpoint según sea necesario
        
        // Verifica si la respuesta fue exitosa
        if (response.ok) {
          // Convierte la respuesta en JSON
          const result = await response.json();
          // Actualiza el estado con los datos obtenidos
          setData(result.data);
        } else {
          // Imprime un error en la consola si la respuesta no es exitosa
          console.error('Error al obtener datos');
        }
      } catch (error) {
        // Maneja cualquier error que ocurra durante la solicitud
        console.error('Error:', error);
      }
    }

    // Llama a la función fetchData para iniciar la solicitud de datos
    fetchData();
  }, []); // El arreglo vacío asegura que useEffect se ejecute solo una vez al montar el componente

  // Si los datos aún no están disponibles, muestra un mensaje de carga
  if (!data) return <div>Restringido</div>;

  // Renderiza el contenido del componente

  



  return (
    <div>
      <h1>Datos de Verificación</h1>
      {/* Muestra los datos obtenidos en formato JSON */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// Exporta el componente para que pueda ser usado en otros lugares
export default Admin;
