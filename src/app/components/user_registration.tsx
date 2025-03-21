import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    email: "",
    portafolio: "",
    software: "",
    años_experiencia: "",
   
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...formData, 
          software: formData.software.split(",").map((s) => s.trim()) // Convierte software en array
        }),
      });

      if (response.ok) {
        setMessage("  Usuario registrado con éxito.");
        setFormData({
          usuario: "",
          email: "",
          portafolio: "",
          software: "",
          años_experiencia: "",
          
        });
      } else {
        setMessage("Error al registrar usuario.");
      }
    } catch (error) {
      setMessage("Error en la conexión con el servidor.");
    }
  };

  return (
    <section className=" flex flex-row  gap-1 justify-center items-center align-middle " >

        
      
      <form className="m-3 space-y-4  "   onSubmit={handleSubmit}>

      <div className=" border-t-2 shadow-xl "></div>

        <input className="p-1 bg-neutral-200" type="text" name="usuario" placeholder="Usuario" value={formData.usuario} onChange={handleChange} required />
        <input className="p-1 bg-neutral-200" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input className="p-1 bg-neutral-200" type="text" name="portafolio" placeholder="Portafolio" value={formData.portafolio} onChange={handleChange} />
        <input className="p-1 bg-neutral-200" type="text" name="software" placeholder="Software (separado por comas)" value={formData.software} onChange={handleChange} />
        <input className="p-1 bg-neutral-200" type="number" name="años_experiencia" placeholder="Años de experiencia" value={formData.años_experiencia} onChange={handleChange} />
        <button className="bg-subtitle p-2 rounded-2xl m-3  border-neutral-200 border-2 text-neutral-200 hover:bg-lime-500 shadow-xl " type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default Register;
