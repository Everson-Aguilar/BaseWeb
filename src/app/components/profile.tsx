"use client";

import { useState } from "react";

interface Freelancer {
  id: number;
  usuario: string;
  nombre_completo: string;
  email: string;
  portafolio: string;
  software: string[];
  anos_experiencia: number;
  calificacion: number;
  proyectos_completados: number;
  descripcion: string;
  idiomas: string[];
  ubicacion: string;
  disponibilidad: string;
  especialidades: string[];
}

const FreelancerProfile = () => {
  const [editable, setEditable] = useState(false);
  const [freelancer, setFreelancer] = useState<Freelancer>({
    id: 1,
    usuario: "juanperez",
    nombre_completo: "Juan Pérez",
    email: "juan@example.com",
    portafolio: "https://juan3d.com",
    software: ["Blender", "Maya"],
    anos_experiencia: 5,
    calificacion: 4.8,
    proyectos_completados: 12,
    descripcion: "Modelador 3D especializado en entornos realistas y diseño modular.",
    idiomas: ["Español", "Inglés"],
    ubicacion: "España",
    disponibilidad: "Tiempo completo",
    especialidades: ["Modelado 3D", "Texturizado", "Optimización para juegos"],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFreelancer((prev) => ({
      ...prev,
      [name]: ["especialidades", "software", "idiomas"].includes(name)
        ? value.split(",").map((item) => item.trim())
        : value,
    }));
  };

  return (
    <>
      
        {editable ? (
          <div className="p-5">
            {Object.keys(freelancer).map((key) =>
              ["id", "usuario", "anos_experiencia", "calificacion", "proyectos_completados"].includes(key) ? null : (
                <div key={key}>
                  <label className="block text-sm font-bold mb-1">
                    {key.replace("_", " ").toUpperCase()}
                  </label>
                  {key === "descripcion" ? (
                    <textarea
                      name={key}
                      value={freelancer[key as keyof Freelancer] as string}
                      onChange={handleChange}
                      maxLength={300}
                      rows={4}
                      className="w-full p-2 border rounded-md"
                    />
                  ) : (
                    <input
                      type="text"
                      name={key}
                      value={
                        Array.isArray(freelancer[key as keyof Freelancer])
                          ? (freelancer[key as keyof Freelancer] as string[]).join(", ")
                          : (freelancer[key as keyof Freelancer] as string)
                      }
                      onChange={handleChange}
                      maxLength={
                        key === "email" ? 100 :
                        key === "portafolio" ? 150 :
                        key === "ubicacion" || key === "disponibilidad" ? 50 :
                        key === "especialidades" || key === "software" || key === "idiomas" ? 100 : undefined
                      }
                      className="w-full p-2 border rounded-md"
                    />
                  )}
                  <span className="block text-xs text-gray-500 mt-1">
                    {key === "descripcion"
                      ? "Máximo 300 caracteres"
                      : key === "email"
                      ? "Máximo 100 caracteres"
                      : key === "portafolio"
                      ? "Máximo 150 caracteres"
                      : key === "ubicacion" || key === "disponibilidad"
                      ? "Máximo 50 caracteres"
                      : key === "especialidades" || key === "software" || key === "idiomas"
                      ? "Máximo 100 caracteres"
                      : ""}
                  </span>
                </div>
              )
            )}
            <button onClick={() => setEditable(false)} className="bg-subtitle text-white px-4 py-2 rounded-md">
              Guardar
            </button>
          </div>
        ) : (
          <section className="space-y-4 border-4  p-5 m-5">
            <h2 className="text-8xl text-colorBase shadow-inner-md font-BebasNeue p-5 border-b-4 ">{freelancer.nombre_completo}</h2>
            <p className="text-colorBase border-4 p-5 h-36 shadow-inner-md">{freelancer.descripcion}</p>

            <section className=" space-y-2 font-Staatliches shadow-lg p-5 ">
            <p className="text-subtitle ">
              <strong className="font-VT323 text-3xl">-Email:</strong> {freelancer.email}
            </p>
            <p className="text-subtitle">
              <strong className="font-VT323 text-3xl">-Portafolio:</strong>{" "}
              <a href={freelancer.portafolio} className="text-subtitle underline">
                {freelancer.portafolio}
              </a>
            </p>
            <p className="text-subtitle ">
              <strong className="font-VT323 text-3xl">-Ubicación:</strong> {freelancer.ubicacion}
            </p>
            <p className="text-subtitle">
              <strong className="font-VT323 text-3xl">-Años de experiencia:</strong> {freelancer.anos_experiencia}
            </p>
            <p className="text-subtitle">
              <strong className="font-VT323 text-3xl">-Calificación:</strong> {freelancer.calificacion} / 5
            </p>
            <p className="text-subtitle">
              <strong className="font-VT323 text-3xl">-Proyectos Completados:</strong> {freelancer.proyectos_completados}
            </p>
            <p className="text-subtitle">
              <strong className="font-VT323 text-3xl">-Especialidades:</strong> {freelancer.especialidades.join(", ")}
            </p>
            <p className="text-subtitle">
              <strong className="font-VT323 text-3xl">-Software:</strong> {freelancer.software.join(", ")}
            </p>
            <p className="text-subtitle">
              <strong className="font-VT323 text-3xl">-Idiomas:</strong> {freelancer.idiomas.join(", ")}
            </p>
            <p className="text-subtitle">
              <strong className="font-VT323 text-3xl">-Disponibilidad:</strong> {freelancer.disponibilidad}
            </p>



            </section>


            <button onClick={() => setEditable(true)} className="bg-subtitle text-white px-4 py-2 rounded-md">
              Editar
            </button>
          </section>
        )}
      
    </>
  );
};

export default FreelancerProfile;
