"use client"; // Indica que este es un componente de cliente en Next.js

import { useEffect, useState } from "react";
import Contact from "./el_guias"; // Importa el componente Contact

// Define el tipo de datos para un proyecto
export type Project = {
  title: string;
  description: string;
  price: string;
  time: string;
  category: string;
  verification: boolean;
};

export default function ProjectPage() {
  // Estado para almacenar los proyectos obtenidos de la API
  const [data, setData] = useState<Project[]>([]);
  // Estado para manejar la carga de datos
  const [loading, setLoading] = useState(true);
  // Estado para controlar la visibilidad de los proyectos
  const [Visible, setVisible] = useState(false);
  // Estado para mostrar mensajes de alerta
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    if (Visible) {
      // Función para obtener datos de la API
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch("/api/carry_out"); // Llamada a la API
          const result = await res.json();
          console.log("Respuesta de la API (fetchData):", result);

          if (res.ok && result.success) {
            // Mapea los datos recibidos y asigna un valor por defecto a "verification" si no está definido
            setData(
              result.data.map(({ _id, ...proj }: any) => ({
                ...proj,
                verification: proj.verification ?? false,
              }))
            );
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
      fetchData(); // Llama a la función para obtener los datos
    }
  }, [Visible]); // Se ejecuta cuando cambia el estado Visible

  // Función para aceptar un proyecto
  const handleAccept = async (project: Project) => {
    const email_ID = sessionStorage.getItem("email_ID");
    if (!email_ID) {
      setAlertMessage("No se encontró el email_ID en sessionStorage");
      return;
    }

    // Obtener proyectos almacenados localmente
    const storedProjects = JSON.parse(localStorage.getItem(`acceptedProjects_${email_ID}`) || "[]");
    if (!storedProjects.includes(project.title)) {
      storedProjects.push(project.title);
      localStorage.setItem(`acceptedProjects_${email_ID}`, JSON.stringify(storedProjects));
    }

    try {
      // Enviar el proyecto a la API
      const response = await fetch("/api/sendProjects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...project, email_ID }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Error al enviar los datos");
      }
      setAlertMessage("Proyecto guardado y enviado correctamente");
    } catch (error) {
      setAlertMessage("Error al enviar el proyecto");
      console.error("Error al enviar el proyecto:", error);
    }
  };

  // Función para filtrar los proyectos ya aceptados
  const getFilteredProjects = () => {
    const email_ID = sessionStorage.getItem("email_ID");
    if (!email_ID) return data;

    const storedProjects: string[] = JSON.parse(localStorage.getItem(`acceptedProjects_${email_ID}`) || "[]");
    return data.filter((project) => !storedProjects.includes(project.title));
  };

  return (
    <div>
      <nav>
        <Contact /> {/* Renderiza el componente Contact */}
      </nav>
      <div className="absolute w-full md:w-[1100px] z-20">
        <button
          className="bg-subtitle text-neutral-200 p-8 pl-36 z-0 hover:bg-lime-500"
          onClick={() => setVisible(!Visible)} // Cambia la visibilidad de los proyectos
        >
          {Visible ? "Ocultar Proyectos" : "Mostrar Proyectos"}
        </button>

        {Visible && (
          <div className="flex-row md:flex border-b-8 border-t-8 border-subtitle">
            <div className="w-full md:w-1/2 bg-subtitle flex justify-center items-center">
              <div className="h-80 w-80 bg-colorBase"></div> {/* Espacio visual vacío */}
            </div>

            {loading ? (
              <p>Cargando...</p> // Muestra un mensaje mientras carga la API
            ) : (
              <ul className="space-y-5 bg-neutral-200 w-full p-5 h-fill h-[750px] overflow-scroll">
                {getFilteredProjects().map((item, index) => (
                  <li
                    className="bg-neutral-200 p-2 rounded-2xl shadow-2xl border-b-4 border-neutral-500 min-h-50 max-h-50 overflow-scroll"
                    key={index}
                  >
                    <strong className="border-b-2 font-Staatliches text-3xl">
                      * {item.title}
                    </strong>{" "}
                    - {item.price}
                    <p>{item.description}</p>
                    <p>
                      <strong>Categoría:</strong> {item.category}
                    </p>
                    <p>
                      <strong>Fecha límite:</strong> {item.time}
                    </p>
                    <p>
                      <strong>Verificación:</strong> {item.verification ? "Sí" : "No"}
                    </p>

                    <button
                      className="mt-2 bg-subtitle text-neutral-200 p-2 rounded hover:bg-lime-500"
                      onClick={() => handleAccept(item)} // Aceptar proyecto
                    >
                      Aceptar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Mensaje de alerta si existe */}
        {alertMessage && (
          <div className="fixed inset-0 backdrop-blur-2xl flex justify-center items-center">
            <div className="p-6 text-center w-full">
              <p className="text-5xl font-semibold">{alertMessage}...</p>
              <button
                className="mt-4 bg-subtitle text-white px-4 py-2 rounded hover:bg-subtitle"
                onClick={() => setAlertMessage(null)} // Cerrar mensaje de alerta
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
