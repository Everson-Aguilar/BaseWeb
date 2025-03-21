"use client"; // Indica que este componente se ejecuta en el cliente.

import { useEffect, useState } from "react";

// Definimos el tipo de datos que esperamos de la API
type Product = {
  _id: string;
  title: string;
  description: string;
  price: string;
  time: string;
  category: string;
};

export default function ProductPage() {
  // Estado para almacenar los datos recibidos de la API
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener los datos desde la API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/carry_out"); // Llamando a la API
        const result = await res.json();
        if (result.success) {
          setData(result.data);
        } else {
          setError("No se pudo obtener los datos");
        }
      } catch (error) {
        setError("Error al obtener datos");
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Obtener los datos al montar el componente
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="space-y-5">
          {data.map((item) => (
            <li className="bg-subtitle p-2 rounded-2xl" key={item._id}>
              <strong className="border-b-2 font-Staatliches">* {item.title}</strong> - ${item.price}
              <p>{item.description}</p>
              <p><strong>Categoría:</strong> {item.category}</p>
              <p><strong>Fecha límite:</strong> {item.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
