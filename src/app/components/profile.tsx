'use client'

import { useState, useEffect } from "react";

interface User {
  _id: string;
  username: string;
  email: string;
  portfolio: string;
  software: string;
  years_experience: string;
  assigned_email: string;
  projects_added: string[] | null;
  pending_send: string[] | null;
  score: number;
  payment_status: string;
}

const UsersList = () => {
  const [adminUsers, setAdminUsers] = useState<User[]>([]);
  const [freelancers, setFreelancers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email_ID, setEmail_ID] = useState<string | null>(() => {
    // Recuperar `email_ID` de sessionStorage si está disponible
    return sessionStorage.getItem("email_ID");
  });

  // Obtener el email desde la API solo si no está en sessionStorage
  useEffect(() => {
    if (email_ID) return; // Si ya está guardado, no hace falta llamar a la API

    const fetchEmail = async () => {
      try {
        const response = await fetch("/api/live");
        const data = await response.json();
        if (data.email) {
          setEmail_ID(data.email);
          sessionStorage.setItem("email_ID", data.email); // Guardar en sessionStorage
        }
      } catch (err) {
        setError("Error obteniendo el email");
      }
    };

    fetchEmail();
  }, [email_ID]);

  // Obtener los usuarios cuando el email_ID esté disponible
  useEffect(() => {
    if (!email_ID) return; // No ejecutar si no hay `email_ID`

    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin_users");
        if (!response.ok) throw new Error("Error al obtener los datos");

        const data = await response.json();

        // Filtrar solo si es necesario
        setAdminUsers(data.adminUsers.filter((user: User) => user.email === email_ID));
        setFreelancers(data.freelancers.filter((user: User) => user.email === email_ID));
      } catch (err) {
        setError("Error al obtener los datos de usuarios");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [email_ID]);

  // Eliminar los datos después de 5 segundos y limpiar `localStorage`
  useEffect(() => {
    let isMounted = true; // Variable para controlar si el componente está montado

    const deleteData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (isMounted) { // Solo elimina si el componente está montado
        try {
          const response = await fetch("/api/live", { method: "DELETE" });
          if (!response.ok) throw new Error("Error al eliminar los datos");
          console.log("Datos eliminados exitosamente");
        } catch (err) {
          console.error("Error al eliminar los datos:", err);
        }
      }
    };

    deleteData();

    // Cleanup function: asegúrate de que la eliminación no ocurra si el componente se desmonta
    return () => {
      isMounted = false;
    };
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Administradores</h2>
      <ul>
        {adminUsers.map(user => (
          <li key={user._id}>
            <p><strong>Usuario:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Software:</strong> {user.software}</p>
            <p><strong>Años de Experiencia:</strong> {user.years_experience}</p>
            <p><strong>Portafolio:</strong> {user.portfolio}</p>
            
            <p><strong>Correo Asignado:</strong> {user.assigned_email || "No asignado"}</p>
            <p><strong>Proyectos Agregados:</strong> {Array.isArray(user.projects_added) && user.projects_added.length > 0 ? user.projects_added.join(", ") : "Ninguno"}</p>
            <p><strong>Envío Pendiente:</strong> {Array.isArray(user.pending_send) && user.pending_send.length > 0 ? user.pending_send.join(", ") : "Nada pendiente"}</p>
            <p><strong>Puntaje:</strong> {user.score}</p>
            <p><strong>Estado de Pago:</strong> {user.payment_status}</p>
          </li>
        ))}
      </ul>

      <h2>Freelancers</h2>
      <ul>
        {freelancers.map(user => (
          <li key={user._id}>
            <p><strong>Usuario:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Software:</strong> {user.software}</p>
            <p><strong>Años de Experiencia:</strong> {user.years_experience}</p>
            <p><strong>Portafolio:</strong> {user.portfolio}</p>
            
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
