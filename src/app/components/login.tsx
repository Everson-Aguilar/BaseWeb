import { useState, useEffect } from 'react';
import Image from "next/image";

import { useRouter } from 'next/navigation'; // ✅ CORRECTO para App Router
import Registration from "./user_registration"

export default function LoginButton() {
  const router = useRouter(); // ✅ Ahora sí funciona en Next.js 14 con App Router
  const [showLogin, setShowLogin] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/admin'); // Verifica que esta ruta es correcta
        if (!response.ok) {
          throw new Error('Error al obtener los usuarios');
        }
        const data = await response.json();
        if (data.users) {
          setUsers(data.users);
        } else {
          console.error('No se encontraron usuarios');
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error fetching users:', error.message);
        }
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = () => {
    // Verifica si el array de usuarios contiene algún usuario con las credenciales correctas
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      router.push('/pages/admin/'); // ✅ Redirige correctamente en Next.js 14
    } else {
      setError(' ! Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="fixed z-40 bottom-32 right-0 m-6">

      


      <button

      


        className="bg-message hover:bg-orange-400 text-base p-2 rounded-full w-24 h-24 flex justify-center items-center duration-500 hover:scale-125 "
        onClick={() => setShowLogin(true)}
      >
        <span className='translate-y-16 font-BebasNeue text-message'>Iniciar sesión</span>

        <Image
          src="/DiseñoWeb/logogris.svg"
          alt="ver"
          layout="fill"
          objectFit="fill"
        />


      </button>

      {showLogin && (
        <div className="fixed  top-0 right-0 w-full h-full bg-black bg-opacity-50 flex  justify-center items-center">
          <div className="bg-subtitle p-5 rounded-lg shadow-lg relative w-96">
            <button
              className="absolute top-2 right-2 text-xl text-colorBase"
              onClick={() => setShowLogin(false)}
            >
              ✖
            </button>
            <p className="text-center mb-4 text-lg font-bold text-colorBase shadow-xl mt-5">Inicio de Sesión</p>
            <label className="block mb-2 text-colorBase">
              Usuario:
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="block mb-4 text-colorBase">
              Contraseña:
              <input
                type="password"
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {error && <p className="text-lime-500 text-center mb-4">{error}</p>}
            <button className="bg-subtitle p-2 rounded-2xl m-3  shadow-xl border-neutral-200 border-2 text-neutral-200 hover:bg-lime-500" onClick={handleLogin}>
              Acceder
            </button>


            <Registration/>


          </div>

          




        </div>
      )}


     


    </div>
  );
}
