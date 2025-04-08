import { useEffect, useState } from "react";

interface User {
  _id: string;
  username: string;
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
        const response = await fetch("/api/freelancer", {
          method: "GET",
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY_CLIENT ?? "",
            "Content-Type": "application/json",
          },
        });
        


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
    <div className=" p-4 text-sm text-subtitle ">
      <ul className="space-y-2 border-colorBase mt-3 mb-5">
        {users.map((user) => (
          <li key={user._id} className=" justify-between p-2 shadow-inner-md bg-neutral-200">
            <p><strong className="text-xl font-Notable">Usuario:</strong> {user.username}</p>
            <p><strong className="text-xl font-Notable">Email:</strong> {user.email}</p>
            <p><strong className="text-xl font-Notable">Portafolio:</strong> {user.portfolio}</p>
            <p><strong className="text-xl font-Notable">Software:</strong> {user.software}</p>
            <p><strong className="text-xl font-Notable">Años de Experiencia:</strong> {user.years_experience}</p>
            <p><strong className="text-xl font-Notable">Correo Asignado:</strong> {user.assigned_email || "No asignado"}</p>
            <p><strong className="text-xl font-Notable">Puntaje:</strong> {user.score}</p>
            <p><strong className="text-xl font-Notable">Estado de Pago:</strong> {user.payment_status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
