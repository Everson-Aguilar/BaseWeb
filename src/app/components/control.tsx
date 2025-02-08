import React, { useState } from 'react';

const User: React.FC = () => {
  const freelancers = [
    {
      id: 1,
      fullName: "Juan Pérez",
      username: "juanperez",
      email: "juan@example.com",
      password: "123456",
      specialty: "Modelado 3D",
      portfolio: "https://juan3d.com",
      software: ["Blender", "Maya"],
      experienceYears: 5,
      socialLinks: ["https://linkedin.com/in/juanperez"],
      rating: 4.8,
      completedProjects: 12,
    },
    {
      id: 2,
      fullName: "Maria López",
      username: "marialopez",
      email: "maria@example.com",
      password: "abcdef",
      specialty: "Texturizado",
      portfolio: "https://mariatx.com",
      software: ["Substance Painter", "Photoshop"],
      experienceYears: 3,
      socialLinks: ["https://linkedin.com/in/marialopez"],
      rating: 4.5,
      completedProjects: 8,
    },
  ];

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      <h2 className="text-colorBase">CONTROL</h2>
      <h3 className="font-Notable text-xl text-colorBase">Usuarios</h3>
      <div className="w-full border-b-2 border-colorBase">
        <div className='text-colorBase'>Freelancer Data</div>
        <div className="w-full border-b-2 border-colorBase"></div>
        {freelancers.map((freelancer) => (
          <div key={freelancer.id} className="mb-4 p-2 border-colorBase border-b">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(freelancer.id)}>
              <h4 className="font-BebasNeue text-lg text-colorBase">{freelancer.fullName} - {freelancer.specialty}</h4>
              <span className='text-xl bg-subtitle text-colorBase  p-3 rounded-md'>{expandedId === freelancer.id ? "Ocultar" : "Ver"}</span>
            </div>
            {expandedId === freelancer.id && (
              <ul className="font-BebasNeue text-lg text-colorBase mt-2">
                <li><strong>ID:</strong> {freelancer.id}</li>
                <li><strong>Usuario:</strong> {freelancer.username}</li>
                <li><strong>Email:</strong> {freelancer.email}</li>
                <li><strong>Portafolio:</strong> <a href={freelancer.portfolio} target="_blank" rel="noopener noreferrer">{freelancer.portfolio}</a></li>
                <li><strong>Software:</strong> {freelancer.software.join(", ")}</li>
                <li><strong>Años de Experiencia:</strong> {freelancer.experienceYears}</li>
                <li><strong>Redes Sociales:</strong> {freelancer.socialLinks.join(", ")}</li>
                <li><strong>Calificación:</strong> {freelancer.rating}</li>
                <li><strong>Proyectos Completados:</strong> {freelancer.completedProjects}</li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
