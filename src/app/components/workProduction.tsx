"use client";

import { useEffect, useState } from "react";
import Contact from "./el_guias";

// Definición del tipo de datos para los proyectos
// Cada proyecto tiene un ID, título, descripción, precio, tiempo, categoría y verificación
export type Project = {
  _id: string;
  title: string;
  description: string;
  price: string;
  time: string;
  category: string;
  verification: boolean; // Agregado por defecto en false
};

export default function ProjectPage() {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [Visible, setVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    if (Visible) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch("/api/carry_out");
          const result = await res.json();
          console.log("Respuesta de la API (fetchData):", result);
          
          if (res.ok && result.success) {
            setData(result.data.map((proj: Project) => ({ ...proj, verification: proj.verification ?? false })));
          } else {
            setAlertMessage(result.message || "No se pudo obtener los datos");
          }
        } catch (error) {
          setAlertMessage("Error al obtener datos");
          console.error("Error al obtener datos:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [Visible]);

  const handleAccept = async (project: Project) => {
    const email_ID = sessionStorage.getItem("email_ID");
    if (!email_ID) {
      setAlertMessage("No se encontró el email_ID en sessionStorage");
      return;
    }

    try {
      const response = await fetch("/api/sendProjects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...project, email_ID, verification: project.verification ?? false }),
      });

      const result = await response.json();
      console.log("Respuesta de la API (handleAccept):", result);

      if (response.ok && result.success) {
        setAlertMessage("Proyecto enviado con éxito");
      } else {
        setAlertMessage(result.message || "Ya te postulaste al proyecto");
      }
    } catch (error) {
      console.error("Error al postularse al proyecto:", error);
      setAlertMessage("Ya te postulaste al proyecto");
    }
  };

  return (
    <div>
      <nav><Contact/></nav>
      
      <div className="absolute w-full md:w-[1100px] z-20">
        <button
          className= "   bg-subtitle text-neutral-200 p-8 pl-36 hover:bg-lime-500"
          onClick={() => setVisible(!Visible)}
        >
          {Visible ? "Ocultar Proyectos" : "Mostrar Proyectos"}
        </button>

        {Visible && (
          <div className="flex-row md:flex border-b-8 border-t-8 border-subtitle">
            <div className="w-full md:w-1/2 bg-subtitle flex justify-center items-center">
              <div className="h-80 w-80 bg-colorBase"></div>
            </div>
            
            {loading ? (
              <p>Cargando...</p>
            ) : (
              <ul className="space-y-5 bg-neutral-200 w-full p-5 h-fill h-[750px] overflow-scroll">
                {data.map((item) => (
                  <li
                    className="bg-neutral-200 p-2 rounded-2xl shadow-2xl border-b-4 border-neutral-500 min-h-50 max-h-50 overflow-scroll"
                    key={item._id}
                  >
                    <strong className="border-b-2 font-Staatliches text-3xl">
                      * {item.title}
                    </strong>{" "}
                    - {item.price}
                    <p>{item.description}</p>
                    <p><strong>Categoría:</strong> {item.category}</p>
                    <p><strong>Fecha límite:</strong> {item.time}</p>
                    <p><strong>Verificación:</strong> {item.verification ? "Sí" : "No"}</p>
                    
                    <button
                      className="mt-2 bg-subtitle text-neutral-200 p-2 rounded hover:bg-lime-500"
                      onClick={() => handleAccept(item)}
                    >
                      Aceptar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {alertMessage && (
          <div className="fixed inset-0 backdrop-blur-2xl flex justify-center items-center">
            <div className="p-6 text-center w-full">
              <p className="text-5xl font-semibold">{alertMessage}...</p>
              <button
                className="mt-4 bg-subtitle text-white px-4 py-2 rounded hover:bg-subtitle"
                onClick={() => setAlertMessage(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
