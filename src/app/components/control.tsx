
import React from 'react';

const User: React.FC = () => {




    const freelancerData: {
        fullName: string;
        username: string;
        email: string;
        password: string;
        specialty: string;
        portfolio: string;
        software: string[];
        experienceYears: number;
        socialLinks: string[];
        rating: number;
        completedProjects: number;
      } = {
        fullName: "",
        username: "",
        email: "",
        password: "",
        specialty: "",
        portfolio: "",
        software: [],
        experienceYears: 0,
        socialLinks: [],
        rating: 0,
        completedProjects: 0,
      };










  return <div> 

<h2 className="text-colorBase">CONTROL</h2>
<h3 className="font-Notable text-2xl text-colorBase">Usuarios</h3>

<div className="w-full border-b-2 border-colorBase"></div>
    
     </div>;
};

export default User;
