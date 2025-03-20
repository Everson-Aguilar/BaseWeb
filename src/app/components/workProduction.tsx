"use client"; // Indica que este código se ejecuta en el cliente (Next.js con React)



// 📌 Interfaz que define la estructura de un proyecto
interface ProjectItem {
  title: string;
  description: string;
  price: string;
  deadline: string;
  category: string;
  status: string;
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

// 📌 Componente principal que representa la vista del freelancer
const FreelancerView: React.FC = () => {
  // 📌 Maneja la solicitud de un proyecto
  const handleAddClick = (project: ProjectItem) => {
    console.log("Project requested:", project);
    console.log("Project status:", project.status);
  };

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
    </div>
  );
};

export default FreelancerView;
