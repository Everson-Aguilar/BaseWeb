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
  score: number;
  payment_status: string;

  webData: {
    webName: string;
    LinkWeb: string;
    verificationWeb: boolean;
    horafechaWeb: string;
  }[];

  sendData: {
    LinkSend: string;
    verificationSend: boolean;
    horafechaSend: string;
  }[];

  projectData: {
    sendProject: boolean;
    verificationProject: boolean;
    horafechaProject: string;
  }[];
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
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Portafolio:</strong> {user.portfolio}</p>
            <p><strong>Software:</strong> {user.software}</p>
            <p><strong>Años de Experiencia:</strong> {user.years_experience}</p>
            <p><strong>Correo Asignado:</strong> {user.assigned_email || "No asignado"}</p>
            <p><strong>Puntaje:</strong> {user.score}</p>
            <p><strong>Estado de Pago:</strong> {user.payment_status}</p>

            {/* Renderizar WebData */}
            <p><strong>Datos Web:</strong></p>
            <ul>
              {user.webData.map((web, index) => (
                <li key={index}>
                  <p>Nombre: {web.webName}</p>
                  <p>Enlace: <a href={web.LinkWeb} className="text-blue-500">{web.LinkWeb}</a></p>
                  <p>Verificado: {web.verificationWeb ? "Sí" : "No"}</p>
                  <p>Fecha: {web.horafechaWeb}</p>
                </li>
              ))}
            </ul>

            {/* Renderizar SendData */}
            <p><strong>Datos de Envío:</strong></p>
            <ul>
              {user.sendData.map((send, index) => (
                <li key={index}>
                  <p>Enlace de Envío: <a href={send.LinkSend} className="text-blue-500">{send.LinkSend}</a></p>
                  <p>Verificado: {send.verificationSend ? "Sí" : "No"}</p>
                  <p>Fecha: {send.horafechaSend}</p>
                </li>
              ))}
            </ul>

            {/* Renderizar ProjectData */}
            <p><strong>Datos del Proyecto:</strong></p>
            <ul>
              {user.projectData.map((project, index) => (
                <li key={index}>
                  <p>Enviado: {project.sendProject ? "Sí" : "No"}</p>
                  <p>Verificado: {project.verificationProject ? "Sí" : "No"}</p>
                  <p>Fecha: {project.horafechaProject}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
