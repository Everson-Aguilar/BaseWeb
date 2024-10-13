import { useRouter } from "next/navigation";
import React, { useState } from "react";
import credentials from "admin.json"; // Ajusta la ruta según tu estructura de carpetas

// css

import "../css/header.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username === credentials.username && password === credentials.hash) {
      try {
        const response = await fetch("/api/verificacion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ verificacion: true }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Respuesta de la API:", data);
          // Redirige a la página deseada en caso de éxito
          router.push("/pages/Admin/");
        } else {
          setError("Error en la verificación");
        }
      } catch (error) {
        console.error("Error al enviar los datos a la API:", error);
        setError("Error al conectar con el servidor");
      }
    } else {
      setError("credenciales incorrectas");
    }
  };

  return (
    <div className="relative p-1 mb-1 min-w-[412px] flex  overflow-scroll justify-end text-sm font-sans text-title items-start h-full   ">
      <form
        className="  sesion_mobil  flex-row  items-center justify-center mr-28"
        onSubmit={handleSubmit}
      >
        <label className=" mr-7  mb-1 " htmlFor="username">
          Usuario:
        </label>

        <input
          className="bg-base  border-message border-2 h-5   mb-1 w-40 rounded-lg p-1  mr-5"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div>
          <label className="   mr-1 mb-1 " htmlFor="password">
            Contraseña:
          </label>
          <input
            className="  bg-base  border-message border-2  mb-1  h-5  w-40 rounded-lg p-1  mr-5"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p>{error}</p>}
        </div>
        <div>
          {" "}
          <button className="sesion bg-trend p-2 rounded-lg "  type="submit">
            Iniciar sesión
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default Login;
