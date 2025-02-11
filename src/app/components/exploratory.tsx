"use client";

import React, { useState } from "react";

// Definimos los tipos para los datos
interface Item {
  id: number;
  description: string;
  url: string;
  status: string;
  date: string;
}

// Datos JSON simulados
const initialLinks: Item[] = [
  {
    id: 1,
    description: "Página freelancer",
    url: "https://chatgpt.com/c/67a66cbf-b390-800a-b036-e932584dfae8",
    status: "Esperando respuesta...",
    date: "2025-02-07T14:30:00Z",
  },
  {
    id: 2,
    description: "Página freelancer",
    url: "https://chatgpt.com/c/67a66cbf-b390-800a-b036-e932584dfae8",
    status: "Esperando respuesta...",
    date: "2025-02-07T14:30:00Z",
  },
];

const initialEnvios: Item[] = [
  {
    id: 2,
    description: "Postulación a trabajo",
    url: "https://chatgpt.com/c/abcd1234",
    status: "Esperando respuesta...",
    date: "2025-02-07T14:35:00Z",
  },
];

// Definimos los tipos de props para cada componente
interface LinksProps {
  links: Item[];
}

interface EnviosProps {
  envios: Item[];
}

const RenderLinks: React.FC<LinksProps> = ({ links }) => (
  <div>
    <h3 className="font-bold text-xl text-colorBase">Links</h3>
    <div className="w-full border-b-2 border-colorBase mb-4"></div>
    <div className="h-80 overflow-scroll">
      {links.map((item) => (
        <div key={item.id} className="border-2 border-colorBase p-2 my-2">
          <div className="text-lg font-bold text-colorBase">{item.description}</div>
          <div className="text-sm text-gray-500">URL: <a href={item.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">{item.url}</a></div>
          <div className="text-xs text-gray-500">Fecha: {new Date(item.date).toLocaleString()}</div>
          <div className="mt-2 p-2 bg-gray-200 text-black font-semibold">Estado: {item.status}</div>
        </div>
      ))}
    </div>
  </div>
);

const RenderEnvios: React.FC<EnviosProps> = ({ envios }) => (
  <div>
    <h3 className="font-bold text-xl mt-14 text-colorBase">Envíos</h3>
    <div className="w-full border-b-2 border-colorBase mb-4"></div>
    <div className="h-80 overflow-scroll">
      {envios.map((item) => (
        <div key={item.id} className="border-2 border-colorBase p-2 my-2">
          <div className="text-lg font-bold text-colorBase">{item.description}</div>
          <div className="text-sm text-gray-500">URL: <a href={item.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">{item.url}</a></div>
          <div className="text-xs text-gray-500">Fecha: {new Date(item.date).toLocaleString()}</div>
          <div className="mt-2 p-2 bg-gray-200 text-black font-semibold">Estado: {item.status}</div>
        </div>
      ))}
    </div>
  </div>
);

const Verification: React.FC = () => {
  const [links, setLinks] = useState<Item[]>(initialLinks);
  const [envios, setEnvios] = useState<Item[]>(initialEnvios);

  return (
    <>
      <h2 className="text-colorBase  ">VERIFICACIÓN</h2>
      <RenderLinks links={links} />
      <RenderEnvios envios={envios} />
    </>
  );
};

export default Verification;
