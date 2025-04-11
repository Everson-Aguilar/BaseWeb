"use client";

import dynamic from "next/dynamic";

// Carga dinámica para evitar errores SSR
const ProfileFreelancer = dynamic(() => import("../../components/profile"), { ssr: false });
const Session_expired = dynamic(() => import("../../components/session_expired"), { ssr: false });

const Profile = () => {
  return (
    <>
      <section>
        <Session_expired />
      </section>

      <section className="md:flex flex-row h-full">
        <section className="w-full md:w-1/3">
          <ProfileFreelancer />
        </section>
      </section>

      <section className="text-trend p-5">
        <h2 className="text-2xl font-BebasNeue">Actualización</h2>
        <p>
          Se estarán generando nuevas tareas de forma continua para fomentar la
          colaboración dentro del sistema. De esta manera, podremos construir un
          entorno beneficioso para ambas partes, incluso de forma remota.
        </p>
      </section>
    </>
  );
};

export default Profile;

