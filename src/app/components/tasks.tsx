"use client"; // Indica que este componente es un "cliente" en Next.js y se ejecuta en el navegador.

import React, { useState } from "react";
import Image from "next/image";

// Definimos el componente funcional AdminPanel
const AdminPanel: React.FC = () => {
  // Estados para manejar los valores de los inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false); // Estado para indicar si se está enviando el formulario

  // Función para manejar cambios en el input de precio y permitir solo números
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Reemplaza cualquier carácter que no sea un número
    setPrice(value ? `$${value}` : ""); // Agrega el símbolo de dólar si hay un valor
  };

  // Función para enviar la tarea al backend
  const handleAddClick = async () => {
    setLoading(true); // Activa el estado de carga

    // 🔹 Validar que todos los campos estén llenos antes de enviar
    if (!title || !description || !price || !time || !category) {
      alert("⚠️ Todos los campos deben estar llenos.");
      setLoading(false);
      return;
    }

    const newItem = { title, description, price, time, category }; // Se crea un objeto con los datos del formulario

    try {
      // Se envía la solicitud al backend usando fetch
      const response = await fetch("/api/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        alert("✅ Tarea publicada con éxito");
        // Resetea los estados después de enviar la tarea
        setTitle("");
        setDescription("");
        setPrice("");
        setTime("");
        setCategory("");
      } else {
        alert("❌ Error al publicar la tarea");
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
      alert("❌ Error al enviar los datos");
    } finally {
      setLoading(false); // Se desactiva el estado de carga
    }
  };

  return (
    <div className="relative shadow-xl border-subtitle overflow-scroll h-fill border-2 p-5">
      {/* Botón flotante */}
      <div className="absolute bg-subtitle shadow-inner-md right-5 h-10 w-10 border-subtitle rounded-full border-2 flex justify-center items-center">
        <span className="text-7xl"></span>
      </div>

      {/* Botón para agregar tarea */}
      <div className="absolute z-20 bg-subtitle right-5 top-36 h-10 w-24 shadow-xl rounded-sm hover:scale-105 hover:bg-colorBase flex justify-center items-center">
        <button className="text-xl" onClick={handleAddClick} disabled={loading}>
          {loading ? "Enviando..." : "AGREGAR"}
        </button>
      </div>

      {/* Logo o imagen de fondo */}
      <figure className="h-64 relative shadow-inner-md md:w-72 w-64 text-xl border-subtitle rounded-full border-2 flex items-center justify-center">
        <Image
          src="/DiseñoWeb/logogris.svg"
          alt="ver"
          layout="fill"
          objectFit="fill"
        />
      </figure>

      {/* Input para el título */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value.slice(0, 35).toUpperCase())} // Convierte el título en mayúsculas y limita a 35 caracteres
        placeholder="Título de la tarea"
        className="text-4xl font-BebasNeue bg-transparent border-none outline-none w-full text-center opacity-70"
      />

      {/* Textarea para la descripción */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value.slice(0, 220))} // Limita la descripción a 220 caracteres
        placeholder="Descripción detallada de la tarea"
        className="font-Notable border-2 p-1 h-[100px] border-subtitle text-base bg-transparent outline-none w-full text-center opacity-70"
      />

      {/* Campo para ingresar el precio */}
      <div className="flex items-center justify-between mb-4">
        <label className="text-sm text-subtitle">Precio:</label>
        <input
          type="text"
          value={price}
          onChange={handlePriceChange}
          placeholder="$0"
          className="font-Acme text-2xl bg-transparent border-none outline-none w-3/4 text-center opacity-70"
        />
      </div>

      {/* Campo para seleccionar la fecha de finalización */}
      <div className="flex items-center justify-between mb-4">
        <label className="text-sm text-subtitle">Fecha de Finalización:</label>
        <input
          type="date"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="font-BebasNeue bg-transparent border-none outline-none w-3/4 text-center opacity-70"
        />
      </div>

      {/* Campo para ingresar la categoría */}
      <div className="flex items-center justify-between mb-4">
        <label className="text-sm text-subtitle">Categoría:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value.slice(0, 50))} // Limita la categoría a 50 caracteres
          placeholder="Ejemplo: Modelado 3D, Renderizado"
          className="font-BebasNeue bg-subtitle p-5 text-xl text-center border-none outline-none w-3/4 opacity-70"
        />
      </div>
    </div>
  );
};

export default AdminPanel; 
