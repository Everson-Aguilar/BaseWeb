import React, { useState } from "react";

// CSS
import "../css/header.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el formulario si es necesario
  };

  return (
    <div className="relative p-1 mb-1 min-w-[412px] flex overflow-scroll justify-end text-sm text-trend items-start h-full">
      <form
        className="sesion_mobil flex-row items-center justify-center mr-28"
        onSubmit={handleSubmit}
      >
        <label className="mr-7 mb-1" htmlFor="username">
          Usuario:
        </label>
        <input
          className="bg-base border-message border-2 h-5 mb-1 w-40 rounded-lg p-1 mr-5"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div>
          <label className="mr-1 mb-1" htmlFor="password">
            Contraseña:
          </label>
          <input
            className="bg-base border-message border-2 mb-1 h-5 w-40 rounded-lg p-1 mr-5"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button className="sesion bg-trend text-message p-1 rounded-lg" type="submit">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
