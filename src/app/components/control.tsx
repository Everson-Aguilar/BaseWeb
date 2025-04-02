import { useEffect, useState } from "react";
import Freelancer from "./freelancer";

interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  portfolio: string;
  software: string;
  years_experience: string;
  assigned_email: string;
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
        const response = await fetch("/api/new_users");
        const result = await response.json();
        result.success ? setUsers(result.data) : setError("Error al obtener los usuarios.");
      } catch {
        setError("Error de conexión con el servidor.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleReject = async (userId: string) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      const response = await fetch("/api/delete_user", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      if (response.ok) setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error("Error al rechazar usuario", error);
    }
  };

  const handleAccept = async (user: User) => {
    try {
      const response = await fetch("/api/accept_user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (response.ok) await handleReject(user._id);
    } catch (error) {
      console.error("Error al aceptar usuario", error);
    }
  };

  const handleAcceptAdmin = async (user: User) => {
    try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (response.ok) await handleReject(user._id);
    } catch (error) {
      console.error("Error al aceptar usuario como admin", error);
    }
  };

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="font-Staatliches text-colorBase mb-3">Freelancer</h2>
      <Freelancer />

      <h2 className="font-Staatliches text-colorBase mt-10 mb-3">Lista de Usuarios</h2>
      <div className="scrollbar-custom p-4 text-sm text-colorBase">
        <ul className="space-y-2 border-t-2 border-b-2 border-colorBase mt-3 mb-5">
          {users.map(user => (
            <li key={user._id} className="p-2 shadow">
              <p><strong>Usuario:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Portafolio:</strong> {user.portfolio}</p>
              <p><strong>Software:</strong> {user.software}</p>
              <p><strong>Años de Experiencia:</strong> {user.years_experience}</p>
              <p><strong>Puntaje:</strong> {user.score}</p>
              <p><strong>Estado de Pago:</strong> {user.payment_status}</p>
              <div className="mt-2 flex gap-5">
                <button onClick={() => handleAccept(user)} className="hover:bg-lime-500 p-2">Aceptar</button>
                <button onClick={() => handleReject(user._id)} className="hover:bg-red-500 p-2">Rechazar</button>
                <button onClick={() => handleAcceptAdmin(user)} className="hover:bg-blue-500 p-2">Admin</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;