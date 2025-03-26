import { useEffect, useState } from "react";

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
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/freelancer");
        const result = await response.json();
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

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-colorBase p-4 text-sm text-neutral-900">
      <ul className="space-y-2 border-colorBase mt-3 mb-5">
        {users.map((user) => (
          <li key={user._id} className="p-2 shadow bg-neutral-500">
            <p><strong>Usuario:</strong> {user.username}</p>
            <p><strong>Contraseña:</strong> {user.password}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Portafolio:</strong> {user.portfolio}</p>
            <p><strong>Software:</strong> {user.software}</p>
            <p><strong>Años de Experiencia:</strong> {user.years_experience}</p>

            {/* Datos adicionales */}
            <p><strong>Correo Asignado:</strong> {user.assigned_email || "No asignado"}</p>
            <p><strong>Proyectos Agregados:</strong> {Array.isArray(user.projects_added) && user.projects_added.length > 0 ? user.projects_added.join(", ") : "Ninguno"}</p>
            <p><strong>Envío Pendiente:</strong> {Array.isArray(user.pending_send) && user.pending_send.length > 0 ? user.pending_send.join(", ") : "Nada pendiente"}</p>
            <p><strong>Puntaje:</strong> {user.score}</p>
            <p><strong>Estado de Pago:</strong> {user.payment_status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
