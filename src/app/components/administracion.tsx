import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el formulario si es necesario
  };

  return (
    <div className="flex justify-center items-center  h-full p-16">
      <form
        className="w-full sm:w-96 flex  items-center  bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <label className="text-sm font-medium text-gray-700 mb-2 w-full text-left" htmlFor="username">
          Usuario:
        </label>
        <input
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <label className="text-sm font-medium text-gray-700 mb-2 w-full text-left" htmlFor="password">
          Contraseña:
        </label>
        <input
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
