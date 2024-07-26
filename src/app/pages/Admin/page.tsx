"use client"; // Indica que este código se ejecuta en el cliente, no en el servidor
import Image from "next/image";
import React, { useState, useEffect } from "react"; // Importa React y los hooks useState y useEffect

// Importa el componente InformacionNueva desde la ruta especificada
import InformacionNueva from '../../components/informacionNueva'; // Asegúrate de que la ruta sea correcta

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

  







  return (
<div>

  <div className="h-20 bg-neutral-100 text-3xl flex justify-center items-center font-Acme">
    
    <div className=" p-5">

  <Image
                src="/DiseñoWeb/logogrisoscuro.svg"
                alt="Logo"
                width={80} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
                height={80} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
              />


</div>
    
    ADMINISTRACION
    
    </div>

   <div className=" bg-neutral-200  h-screen w-screen p-5 flex"> 

   



   
   <div className="  shadow-inner-md  bg-neutral-400 border-x-neutral-700 overflow-scroll w-1/2 h-5/6 " >
    
   <div className=" bg-neutral-800 h-16 text-4xl flex justify-center items-center text-neutral-200 font-BebasNeue">PETICIONES</div>
   <div className="p-5  justify-center items-center  ">
      <InformacionNueva/>
      </div>
    </div>

    <div className=" bg-neutral-300 shadow-2xl  h-5/6   w-1/2"></div>

    </div>

    </div>


  );
};
export default Admin;
