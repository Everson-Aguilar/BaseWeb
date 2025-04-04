"use client";

import React, { useState } from "react";

// Datos iniciales simulados
const initialLinks = [
  {
    id: 1,
    description: "Página freelancer",
    url: "https://chatgpt.com/c/67a66cbf-b390-800a-b036-e932584dfae8",
    status: "pendiente",
    date: "2025-02-07T14:30:00Z",
  },
];

const initialEnvios = [
  {
    id: 101,
    description: "Postulación a trabajo",
    url: "https://chatgpt.com/c/abcd1234",
    status: "pendiente",
    date: "2025-02-07T14:35:00Z",
  },
];

const Verification: React.FC = () => {
  const [links, setLinks] = useState(initialLinks);
  const [envios, setEnvios] = useState(initialEnvios);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState<"links" | "envios">("links");

  // Agregar un nuevo elemento
  const addNewItem = () => {
    if (!description || !url) return;

    const newItem = {
      id: Date.now(),
      description,
      url,
      status: "pendiente",
      date: new Date().toISOString(),
    };

    if (type === "links") {
      setLinks((prev) => [...prev, newItem]);
    } else {
      setEnvios((prev) => [...prev, newItem]);
    }

    setDescription("");
    setUrl("");
  };

  // Actualizar el estado del elemento
  const updateStatus = (id: number, type: "links" | "envios", newStatus: string) => {
    if (type === "links") {
      setLinks((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );
    } else {
      setEnvios((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );
    }
  };

  // Simular el envío de datos
  const handleSend = (id: number, type: "links" | "envios") => {
    const item = type === "links" ? links.find((link) => link.id === id) : envios.find((envio) => envio.id === id);
    if (item) {
      console.log("Envío de estado:", JSON.stringify(item, null, 2));
    }
  };

  // Renderizar secciones de elementos
  const renderSection = (title: string, items: typeof initialLinks, type: "links" | "envios") => (
    <div>
      <h3 className="font-Notable text-2xl text-colorBase">{title}</h3>
      <div className="w-full border-b-2 border-colorBase"></div>
      <div className="h-60 text-base text-colorBase font-Acme overflow-scroll">
        {items.map((item) => (
          <div key={item.id} className="border-2 border-colorBase my-2">
            <div className="relative overflow-hidden bg-colorBase flex text-black w-full h-6">
              <div>{item.url}</div>
              <div className="absolute right-0 bg-colorBase w-44 text-end pr-1 flex justify-center items-center">
                <label className="text-rose-950 font-BebasNeue text-lg mr-2">
                  <input
                    type="radio"
                    name={`status-${type}-${item.id}`}
                    value="denegado"
                    checked={item.status === "denegado"}
                    onChange={() => updateStatus(item.id, type, "denegado")}
                  />
                  Denegado
                </label>
                <label className="text-lime-600 font-BebasNeue text-lg">
                  <input
                    type="radio"
                    name={`status-${type}-${item.id}`}
                    value="permitido"
                    checked={item.status === "permitido"}
                    onChange={() => updateStatus(item.id, type, "permitido")}
                  />
                  Permitido
                </label>
              </div>
            </div>
            <div className="text-xs text-gray-500 px-2">Fecha: {new Date(item.date).toLocaleString()}</div>
            <button
              onClick={() => handleSend(item.id, type)}
              className="text-1xl font-BebasNeue p-1 rounded-md m-1 hover:bg-orange-500 text-xl bg-subtitle"
            >
              enviar $
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="full">
      <h2 className="text-colorBase">VERIFICACIÓN</h2>

      {/* Formulario de entrada */}
      <div className="p-4 border rounded-lg bg-gray-800 text-white mb-4">
        <h3 className="font-Notable text-lg mb-2">Agregar Nuevo</h3>
        <div className="mb-2">
          <label className="block text-sm">Descripción</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 text-black rounded-md"
            placeholder="Ejemplo: Portafolio"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm">URL</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-2 text-black rounded-md"
            placeholder="https://ejemplo.com"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm">Tipo</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "links" | "envios")}
            className="w-full p-2 text-black rounded-md"
          >
            <option value="links">Links</option>
            <option value="envios">Envíos</option>
          </select>
        </div>
        <button onClick={addNewItem} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded">
          Agregar
        </button>
      </div>

      {/* Secciones de elementos */}
      {renderSection("Links", links, "links")}
      {renderSection("Envíos", envios, "envios")}
    </section>
  );
};

export default Verification;
