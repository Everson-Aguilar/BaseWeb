import { useEffect, useState } from "react";

interface User {
  _id: string;
  username: string;
  email: string;
  portfolio: string;
  software: string;
  years_experience: string;
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
    <div className=   " bg-colorBase  p-4 text-sm text-neutral-900  ">
      <ul className="space-y-2 border-t-2 border-b-2 border-colorBase mt-3 mb-5">
        {users.map((user) => (
          <li key={user._id} className="p-2 shadow bg-neutral-500">
            <p><strong>Usuario:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Portafolio:</strong> {user.portfolio}</p>
            <p><strong>Software:</strong> {user.software}</p>
            <p><strong>Años de Experiencia:</strong> {user.years_experience}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
