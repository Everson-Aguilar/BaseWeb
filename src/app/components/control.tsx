
import { useEffect, useState, useRef } from "react";
import Freelancer from "./freelancer"


// Definimos la interfaz User para tipar los datos de los usuarios
interface User {
  _id: string; // Se necesita el ID del usuario para hacer las solicitudes
  username: string; // Nombre del usuario
  email: string; // Correo electrónico del usuario
  portfolio: string; // Enlace a su portafolio
  software: string; // Software que usa el usuario
  years_experience: string; // Años de experiencia del usuario
}

// Componente principal que lista los usuarios
const UsersList = () => {
  // Estado para almacenar la lista de usuarios
  const [users, setUsers] = useState<User[]>([]);
  // Estado para manejar la carga de datos
  const [loading, setLoading] = useState(true);
  // Estado para manejar errores en la solicitud
  const [error, setError] = useState<string | null>(null);

  // useEffect se ejecuta al montar el componente para obtener la lista de usuarios
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Llamamos a la API para obtener los usuarios
        const response = await fetch("/api/new_users");
        const result = await response.json();

        // Si la solicitud es exitosa, almacenamos los usuarios en el estado
        if (result.success) {
          setUsers(result.data);
        } else {
          setError("Error al obtener los usuarios.");
        }
      } catch (err) {
        setError("Error de conexión con el servidor.");
      } finally {
        setLoading(false); // Terminamos la carga, sea éxito o error
      }
    };

    fetchUsers(); // Llamamos a la función para obtener los datos
  }, []);

  // Función para aceptar un usuario y moverlo a la colección "accepted_users"
  const handleAccept = async (user: User) => {
    try {
      // Enviamos una solicitud POST con la información del usuario
      const response = await fetch("/api/accept_user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      // Si la solicitud es exitosa, eliminamos al usuario de la lista en el frontend
      if (response.ok) {
        setUsers(users.filter((u) => u._id !== user._id));
      }
    } catch (error) {
      console.error("Error al aceptar usuario", error);
    }
  };

  // Función para aceptar un usuario como administrador y moverlo a "admin_users"
  const handleAcceptAdmin = async (user: User) => {
    try {
      // Enviamos una solicitud POST con la información del usuario
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      // Si la solicitud es exitosa, eliminamos al usuario de la lista en el frontend
      if (response.ok) {
        setUsers(users.filter((u) => u._id !== user._id));
      }
    } catch (error) {
      console.error("Error al aceptar usuario como admin", error);
    }
  };

  // Función para rechazar/eliminar completamente a un usuario de la colección "new_users"
  const handleReject = async (userId: string) => {
    try {
      console.log("Esperando 3 segundos antes de eliminar...");

      await new Promise((resolve) => setTimeout(resolve, 3000)); // Espera 3 segundos

      const response = await fetch("/api/delete_user", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        setUsers(users.filter((user) => user._id !== userId));
      }
    } catch (error) {
      console.error("Error al rechazar usuario", error);
    }
  };

  // Si aún se están cargando los usuarios, mostramos un mensaje
  if (loading) return <p>Cargando usuarios...</p>;

  // Si hubo un error, mostramos el mensaje de error
  if (error) return <p className="text-red-500">{error}</p>;

  return (

    <div >


<h2 className=" font-Staatliches text-colorBase  mb-3">
        Freelancer
      </h2>

    <div><Freelancer/></div>



<h2 className=" font-Staatliches  text-colorBase  mt-10  mb-3">
        Lista de Usuarios
      </h2>


    <div className=" scrollbar-custom p-4  text-sm text-colorBase ">
      

      <ul className="space-y-2 border-t-2 border-b-2 border-colorBase mt-3 mb-5 ">
        {users.map((user) => (
          <li key={user._id} className=" p-2 shadow">
            {/* Mostramos la información del usuario */}
            <p>
              <strong>Usuario:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Portafolio:</strong> {user.portfolio}
            </p>
            <p>
              <strong>Software:</strong> {user.software}
            </p>
            <p>
              <strong>Años de Experiencia:</strong> {user.years_experience}
            </p>
            {/* Botones de acción */}
            <div className="mt-2 flex  gap-5  ">
              <button
                onClick={() => {
                  handleAccept(user);
                  handleReject(user._id);
                }}
                className="hover:scale-150 hover:bg-lime-500 transition duration-300 ease-in-out bg-subtitle p-2"
              >
                Aceptar
              </button>
              <button
                onClick={() => handleReject(user._id)}
                className=" hover:scale-150 hover:bg-lime-500 transition duration-300 ease-in-out bg-subtitle p-2 "
              >
                Rechazar
              </button>
              <button
                onClick={() => handleAcceptAdmin(user)}
                className=" hover:scale-150 hover:bg-lime-500 transition duration-300 ease-in-out bg-subtitle p-2 "
              >
                Admin
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  


    </div>


  );
};

export default UsersList;
