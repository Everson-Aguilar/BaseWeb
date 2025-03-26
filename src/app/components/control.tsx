import { useEffect, useState } from "react";
import Freelancer from "./freelancer";

// Definimos la interfaz User para tipar los datos de los usuarios
interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  portfolio: string;
  software: string;
  years_experience: string;
  assigned_email: string;
  projects_added: string[];
  pending_send: string[];
  score: number;
  payment_status: string;
}

const UsersList = () => {
  // Estado para almacenar la lista de usuarios
  const [users, setUsers] = useState<User[]>([]);
  // Estado para manejar la carga de datos
  const [loading, setLoading] = useState(true);
  // Estado para manejar errores
  const [error, setError] = useState<string | null>(null);

  // useEffect para obtener la lista de usuarios cuando el componente se monta
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Hacemos una petición a la API para obtener los usuarios
        const response = await fetch("/api/new_users");
        const result = await response.json();

        // Si la respuesta es exitosa, actualizamos el estado con los datos
        if (result.success) {
          setUsers(result.data);
        } else {
          setError("Error al obtener los usuarios.");
        }
      } catch (err) {
        setError("Error de conexión con el servidor.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Función para aceptar un usuario y eliminarlo de la lista
  const handleAccept = async (user: User) => {
    try {
      const response = await fetch("/api/accept_user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Eliminamos el usuario de la lista
        setUsers(users.filter((u) => u._id !== user._id));
      }
    } catch (error) {
      console.error("Error al aceptar usuario", error);
    }
  };

  // Función para aceptar un usuario como administrador
  const handleAcceptAdmin = async (user: User) => {
    try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Eliminamos el usuario de la lista
        setUsers(users.filter((u) => u._id !== user._id));
      }
    } catch (error) {
      console.error("Error al aceptar usuario como admin", error);
    }
  };

  // Función para rechazar un usuario y eliminarlo después de 3 segundos
  const handleReject = async (userId: string) => {
    try {
      console.log("Esperando 3 segundos antes de eliminar...");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await fetch("/api/delete_user", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        // Eliminamos el usuario de la lista
        setUsers(users.filter((user) => user._id !== userId));
      }
    } catch (error) {
      console.error("Error al rechazar usuario", error);
    }
  };

  // Mostrar mensaje de carga mientras se obtienen los datos
  if (loading) return <p>Cargando usuarios...</p>;
  // Mostrar error en caso de fallo
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="font-Staatliches text-colorBase mb-3">Freelancer</h2>
      <div><Freelancer /></div>

      <h2 className="font-Staatliches text-colorBase mt-10 mb-3">Lista de Usuarios</h2>

      <div className="scrollbar-custom p-4 text-sm text-colorBase">
        <ul className="space-y-2 border-t-2 border-b-2 border-colorBase mt-3 mb-5">
          {users.map((user) => (
            <li key={user._id} className="p-2 shadow">


              <p><strong>Usuario:</strong> {user.username}</p>
              <p><strong>Password:</strong> {user.password}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Portafolio:</strong> {user.portfolio}</p>
              <p><strong>Software:</strong> {user.software}</p>
              <p><strong>Años de Experiencia:</strong> {user.years_experience}</p>


              {/* datos de administracion aqui */}

              {/* Aquí agregamos los datos estadísticos adicionales */}
              <p><strong>Correo Asignado:</strong> {user.assigned_email || "No asignado"}</p>
              <p><strong>Proyectos Agregados:</strong> {user.projects_added.length > 0 ? user.projects_added.join(", ") : "Ninguno"}</p>
              <p><strong>Envío Pendiente:</strong> {user.pending_send.length > 0 ? user.pending_send.join(", ") : "Nada pendiente"}</p>
              <p><strong>Puntaje:</strong> {user.score}</p>
              <p><strong>Estado de Pago:</strong> {user.payment_status}</p>



              <div className="mt-2 flex gap-5">
                {/* Botón para aceptar usuario y eliminarlo de la lista */}
                <button
                  onClick={() => {
                    handleAccept(user);
                    handleReject(user._id);
                  }}
                  className="hover:scale-150 hover:bg-lime-500 transition duration-300 ease-in-out bg-subtitle p-2"
                >
                  Aceptar
                </button>
                {/* Botón para rechazar usuario */}
                <button
                  onClick={() => handleReject(user._id)}
                  className="hover:scale-150 hover:bg-lime-500 transition duration-300 ease-in-out bg-subtitle p-2"
                >
                  Rechazar
                </button>
                {/* Botón para aceptar usuario como admin y eliminarlo de la lista */}
                <button
                  onClick={() => {
                    handleAcceptAdmin(user);
                    handleReject(user._id);
                  }}
                  className="hover:scale-150 hover:bg-lime-500 transition duration-300 ease-in-out bg-subtitle p-2"
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