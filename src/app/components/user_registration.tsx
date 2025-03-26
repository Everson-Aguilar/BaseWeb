import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    // tipo de informacion datos basicos
    username: "",
    password: "",
    email: "",
    portfolio: "",
    software: "",
    years_experience: "",

    // tipo de informacion datos estadisticos
    assigned_email: "",           // Correo asignado (vacío al principio)
    projects_added: [],           // Proyectos agregados (vacío al principio)
    pending_send: [],             // Envío pendiente (vacío al principio)   // Registro pendiente (por defecto en "pendiente")
    score: 0,                     // Puntaje inicial
    payment_status: "pending",    // Estado de pago (por defecto "pendiente")
  });

  const [message, setMessage] = useState("");
  
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("User successfully registered!");
        setFormData({
          username: "",
          password: "",
          email: "",
          portfolio: "",
          software: "",
          years_experience: "",
          assigned_email: "",
          projects_added: [],
          pending_send: [],
    
          score: 0,
          payment_status: "pending",
        });
      } else {
        setMessage("Error registering user.");
      }
    } catch (error) {
      setMessage("Error connecting to the server.");
    }
  };

  return (
    <section className="flex flex-row gap-1 justify-center items-center align-middle">
      <form className="m-3 space-y-4" onSubmit={handleSubmit}>
        <div className="border-t-2 shadow-xl"></div>

        <input
          className="p-1 bg-neutral-200"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <div className="relative">
          <input
            className="p-1 bg-neutral-200 w-full pr-10"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"} 
          </button>
        </div>

        <input
          className="p-1 bg-neutral-200"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-1 bg-neutral-200"
          type="text"
          name="portfolio"
          placeholder="Portfolio"
          value={formData.portfolio}
          onChange={handleChange}
        />
        <input
          className="p-1 bg-neutral-200"
          type="text"
          name="software"
          placeholder="Software"
          value={formData.software}
          onChange={handleChange}
        />
        <input
          className="p-1 bg-neutral-200"
          type="number"
          name="years_experience"
          placeholder="Years of Experience"
          value={formData.years_experience}
          onChange={handleChange}
        />
        <button
          className="bg-subtitle p-2 rounded-2xl m-3 border-neutral-200 border-2 text-neutral-200 hover:bg-lime-500 shadow-xl"
          type="submit"
        >
          Register
        </button>
      </form>
      {message && (
        <p className="text-xs border-2 border-lime-500 text-lime-500 p-3">
          {message}
        </p>
      )}
    </section>
  );
};

export default Register;
