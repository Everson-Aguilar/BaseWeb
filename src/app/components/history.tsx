"use client"; // Indica que este componente se ejecuta en el cliente y no en el servidor.

import { useEffect, useState } from "react"; // Importamos los hooks de React para manejar estado y efectos.

type Registration = {
  _id: string; // Identificador único del registro en la base de datos.
  platform: string; // Nombre de la plataforma asociada al registro.
  email: string; // Correo electrónico del usuario registrado.
  profileLink: string; // Enlace al perfil del usuario en la plataforma.
};

export default function HistoryPage() {
  // Estado para almacenar los datos recibidos de la API
  const [data, setData] = useState<Registration[]>([]);
  // Estado para indicar si los datos aún están cargando
  const [loading, setLoading] = useState(true);

  // Función para obtener los datos desde la API
  const fetchData = async () => {
    setLoading(true); // Activa el estado de carga antes de realizar la solicitud
    try {
      const res = await fetch("/api/history"); // Llama a la API en la ruta especificada
      const result = await res.json(); // Convierte la respuesta en un objeto JSON
      if (result.success) { // Si la respuesta indica éxito, actualiza el estado con los datos recibidos
        setData(result.data);
      }
    } catch (error) {
      console.error("Error al obtener datos:", error); // Muestra un error en la consola si la API falla
    } finally {
      setLoading(false); // Finaliza la carga, independientemente del resultado
    }
  };

  useEffect(() => {
    fetchData(); // Llamamos a la función para obtener los datos cuando el componente se monta.
  }, []); // El array vacío indica que este efecto solo se ejecuta una vez, cuando el componente se monta.

  return (
    <div>
      {/* Botón para actualizar los datos */}
      <button className="bg-neutral-200 m-3 p-1 text-xs rounded-2xl hover:bg-lime-500" onClick={fetchData} disabled={loading}>
        {loading ? "Actualizando..." : "Actualizar"}
      </button>
      
      {loading ? (
        <p>Cargando...</p> // Muestra un mensaje de carga mientras se obtienen los datos
      ) : (
        <ul className="space-y-5">
          {data.map((item) => (
            <li className=" bg-subtitle p-2 rounded-2xl " key={item._id}> {/* Asigna una clave única a cada elemento para optimizar el renderizado */}
              <strong className="border-b-2 font-Staatliches ">* {item.platform}</strong> - {item.email} - {" "}
              <a href={item.profileLink} target="_blank" rel="noopener noreferrer">
                Ver perfil {/* Enlace al perfil del usuario en una nueva pestaña */}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
