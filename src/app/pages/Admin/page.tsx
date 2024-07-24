"use client"; // Indica que este código se ejecuta en el cliente, no en el servidor

import React, { useState, useEffect } from "react"; // Importa React y los hooks useState y useEffect

// Importa el componente InformacionNueva desde la ruta especificada
import InformacionNueva from '../components/informacionNueva'; // Asegúrate de que la ruta sea correcta

// Define el componente funcional Admin
const Admin: React.FC = () => {
  // Declara un estado para almacenar los datos, inicializado en null
  const [data, setData] = useState<any>(null);

  // Usa el hook useEffect para ejecutar código cuando el componente se monta
  useEffect(() => {
    // Define una función asíncrona para obtener datos
    async function fetchData() {
      try {
        // Realiza una solicitud GET al endpoint /api/verificacion
        const response = await fetch("/api/verificacion");

        // Verifica si la respuesta fue exitosa (código de estado 200-299)
        if (response.ok) {
          // Convierte la respuesta a formato JSON
          const result = await response.json();
          // Actualiza el estado con los datos obtenidos
          setData(result.data);
        } else {
          // Muestra un error en la consola si la respuesta no fue exitosa
          console.error("Error al obtener datos");
        }
      } catch (error) {
        // Captura y muestra cualquier error ocurrido durante la solicitud
        console.error("Error:", error);
      }
    }

    // Llama a la función fetchData para obtener datos
    fetchData();
  }, []); // El arreglo vacío indica que el efecto se ejecuta solo una vez al montar el componente

  // Si no hay datos, renderiza un mensaje "Restringido"
  if (!data) return <div>Restringido</div>;

  // Declara una constante Door con valor booleano false (no utilizada en el código actual)
  const Door: boolean = false;

  // Crea un objeto Key con una propiedad jsonData que contiene los datos en formato JSON
  const Key = {
    jsonData: JSON.stringify(data, null, 2),
  };

  // Define una función que convierte una cadena en un valor booleano
  const updateDoor = (key: string): boolean => Boolean(key);

  // Usa la función updateDoor para determinar el nuevo estado de la "puerta"
  const newDoorState = updateDoor(Key.jsonData);

  // Muestra en la consola el estado de la "puerta" basado en el valor booleano
  console.log("Door state:", newDoorState ? "Open" : "Closed");

  // Renderiza el componente
  return (
    <div>
      <p>Acceso Permitido</p> {/* Mensaje que indica que el acceso está permitido */}
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Muestra los datos en formato JSON con sangría para facilitar la lectura */}

      {/* Renderiza el componente InformacionNueva */}
      <InformacionNueva/>
    </div>
  );
};

// Exporta el componente Admin como exportación por defecto del módulo
export default Admin;
