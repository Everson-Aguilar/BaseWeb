import React, { useState } from "react";
import credentials from "admin.json"; // Ajusta la ruta según tu estructura de carpetas

const Login: React.FC = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica de autenticación simple
    if (username === credentials.username && password === credentials.hash) {
      alert("Inicio de sesión exitoso");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
