"use client"; // Indica que este código se ejecuta en el cliente (Next.js con React)

import React, { useState } from "react";

// 📌 Interfaz que define la estructura de un proyecto
interface ProjectItem {
  title: string; // Título del proyecto
  description: string; // Descripción detallada del proyecto
  price: string; // Precio del proyecto
  deadline: string; // Fecha límite para completar el proyecto
  category: string; // Categoría del proyecto (ej. Diseño, Desarrollo, etc.)
  status: string; // Estado del proyecto (ej. "pending", "completed")
}

// 📌 Lista de proyectos de ejemplo (esto se podría cargar desde una API en el futuro)
const projects: ProjectItem[] = [
  {
    title: "Project 1",
    description: "This is an advanced graphic design project with modern techniques.",
    price: "$100",
    deadline: "2024-08-01",
    category: "Design",
    status: "pending",
  },
  {
    title: "Project 2",
    description: "Development of a web application using React, TypeScript, and Node.js.",
    price: "$200",
    deadline: "2024-08-15",
    category: "Development",
    status: "pending",
  },
];

// 📌 Interfaz que define la estructura de un enlace o envío
interface LinkItem {
  title: string; // Título del enlace o envío
  url: string; // URL del enlace o recurso
  date: string; // Fecha en que se agregó el enlace
  status: string; // Estado del enlace (ej. "pending", "approved")
}

// 📌 Componente principal que representa la vista del freelancer
const FreelancerView: React.FC = () => {
  // 📌 Estado para almacenar enlaces y envíos
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [submissions, setSubmissions] = useState<LinkItem[]>([]);

  // 📌 Maneja la adición de nuevos enlaces o envíos
  const handleFormSubmit = (e: React.FormEvent, type: "links" | "submissions", url: string, title: string) => {
    e.preventDefault(); // Previene la recarga de la página al enviar el formulario

    const newItem: LinkItem = {
      title: title || "Untitled", // Si no se proporciona un título, se usa "Untitled"
      url, // URL ingresada por el usuario
      date: new Date().toISOString(), // Se genera la fecha actual en formato ISO
      status: "pending", // Estado inicial del enlace o envío
    };

    console.log(`New ${type} added:`, newItem);
    console.log("New item status:", newItem.status);

    // 📌 Se actualiza el estado correspondiente (links o submissions)
    if (type === "links") {
      setLinks((prev) => [...prev, newItem]);
    } else {
      setSubmissions((prev) => [...prev, newItem]);
    }
  };

  // 📌 Maneja la solicitud de un proyecto
  const handleAddClick = (project: ProjectItem) => {
    console.log("Project requested:", project);
    console.log("Project status:", project.status);
  };

  // 📌 Renderiza una sección para agregar enlaces o envíos
  const renderSection = (sectionTitle: string, type: "links" | "submissions") => (
    <div className="bg-subtitle md:w-1/2 p-3 m-1">
      <h2 className="font-BebasNeue text-2xl text-colorBase">{sectionTitle}</h2>
      <form 
        onSubmit={(e) => {
          const form = e.target as HTMLFormElement;
          const url = (form.elements.namedItem("url") as HTMLInputElement).value;
          const title = (form.elements.namedItem("title") as HTMLInputElement)?.value || "";
          handleFormSubmit(e, type, url, title);
          form.reset(); // Limpia el formulario después de enviar
        }}
      >
        <input className="bg-colorBase border-r-2 border-subtitle p-1 w-1/3" type="text" name="title" placeholder="Title" required />
        <input className="bg-colorBase p-1 w-1/3" type="url" name="url" placeholder="Link" required />
        <button className="hover:scale-x-110 text-message hover:bg-lime-400 bg-colorBase p-3 rounded-xl m-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );

  return (
    <div className="p-5">
      {/* 📌 Sección de proyectos */}
      <h1 className="font-BebasNeue text-8xl text-colorBase">Projects</h1>
      <h2 className="font-BebasNeue text-3xl text-colorBase">Production</h2>

      {/* 📌 Se muestran los proyectos disponibles */}
      {projects.map((project, index) => (
        <div className="relative bg-subtitle p-5 md:w-1/2 mb-1" key={index}>
          <h2 className="font-BebasNeue text-3xl text-colorBase">{project.title}</h2>
          <p><strong className="text-colorBase">Description:</strong> {project.description}</p>
          <p><strong className="text-colorBase">Price:</strong> {project.price}</p>
          <p><strong className="text-colorBase">Deadline:</strong> {project.deadline}</p>
          <p><strong className="text-colorBase">Category:</strong> {project.category}</p>
          <p><strong className="text-colorBase">Status:</strong> {project.status}</p>
          <button className="text-message hover:scale-x-110 hover:bg-lime-400 absolute right-0 z-10 top-0 bg-colorBase p-3 rounded-xl m-2" 
            onClick={() => handleAddClick(project)}>
            Request
          </button>
        </div>
      ))}

      {/* 📌 Sección de exploración con formularios para agregar enlaces y envíos */}
      <section className="mt-5">
        <h2 className="font-BebasNeue text-3xl text-colorBase">Exploration</h2>
        {renderSection("Links", "links")}
        {renderSection("Submissions", "submissions")}
      </section>
    </div>
  );
};

export default FreelancerView;
