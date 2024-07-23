import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import credentials from 'admin.json'; // Ajusta la ruta según tu estructura de carpetas

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username === credentials.username && password === credentials.hash) {
      try {
        const response = await fetch('/api/verificacion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ verificacion: true }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Respuesta de la API:', data);
          // Redirige a la página deseada en caso de éxito
          router.push('/pages/Admin/');
        } else {
          setError('Error en la verificación');
        }
      } catch (error) {
        console.error('Error al enviar los datos a la API:', error);
        setError('Error al conectar con el servidor');
      }
    } else {
      setError('Usuario o contraseña incorrectos');
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
