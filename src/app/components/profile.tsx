"use client";

import { useState, useEffect } from "react";
import Explorer_task from "./explorer_tasks";
import ProjectsInterest from "./Projects _of_interest";

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
    verificationWeb: boolean; // false por defecto
    horafechaWeb: string; // hora del envio y fecha
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
  const [freelancers, setFreelancers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email_ID, setEmail_ID] = useState<string | null>(() => {
    return sessionStorage.getItem("email_ID");
  });

  useEffect(() => {
    if (email_ID) return;

    const fetchEmail = async () => {
      try {
        const response = await fetch("/api/live");
        const data = await response.json();
        if (data.email) {
          setEmail_ID(data.email);
          sessionStorage.setItem("email_ID", data.email);
        }
      } catch (err) {
        setError("Error obteniendo el email");
      }
    };

    fetchEmail();
  }, [email_ID]);

  useEffect(() => {
    if (!email_ID) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin_users");
        if (!response.ok) throw new Error("Error al obtener los datos");

        const data = await response.json();
        setFreelancers(
          data.freelancers.filter((user: User) => user.email === email_ID)
        );
      } catch (err) {
        setError("Error al obtener los datos de usuarios");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [email_ID]);

  useEffect(() => {
    let isMounted = true;

    const deleteData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (isMounted) {
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
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="relative flex-row md:flex text-subtitle bg-neutral-200 h-full w-screen">
      <section className="shadow-xl p-5 h-screen overflow-scroll w-full md:w-1/3 min-w-60">
        <h2 className="font-BebasNeue text-5xl border-colorBase border-b-2">Perfil</h2>
        <ul>
          {freelancers.map((user) => (
            <li key={user._id} className="space-y-3">
              <p className="text-3xl"><strong>Puntaje:</strong> {user.score}</p>
              <p><strong>Estado de Pago:</strong> {user.payment_status}</p>
              <p><strong>Usuario:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Software:</strong> {user.software}</p>
              <p><strong>Años de Experiencia:</strong> {user.years_experience}</p>
              <p><strong>Portafolio:</strong> {user.portfolio}</p>
              <p><strong>Correo Asignado:</strong> {user.assigned_email || "No asignado"}</p>
              <h3 className="font-bold">Datos Web:</h3>
              {user.webData.map((web, index) => (
                <p key={index}>{web.webName} - {web.LinkWeb} - {web.verificationWeb ? "Verificado" : "No verificado"} - {web.horafechaWeb}</p>
              ))}
              <h3 className="font-bold">Datos de Envío:</h3>
              {user.sendData.map((send, index) => (
                <p key={index}>{send.LinkSend} - {send.verificationSend ? "Verificado" : "No verificado"} - {send.horafechaSend}</p>
              ))}
              <h3 className="font-bold">Datos de Proyectos:</h3>
              {user.projectData.map((project, index) => (
                <p key={index}>{project.sendProject ? "Enviado" : "No enviado"} - {project.verificationProject ? "Verificado" : "No verificado"} - {project.horafechaProject}</p>
              ))}
            </li>
          ))}
        </ul>
      </section>
      <div className="w-full">
        <Explorer_task />
      </div>
      <div><ProjectsInterest /></div>
    </section>
  );
};

export default UsersList;