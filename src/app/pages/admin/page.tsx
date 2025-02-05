"use client";

import React, { useState } from "react";

type Props = {
  text: string;
};

const Admin: React.FC<Props> = ({ text }) => {
  const [title, setTitle] = useState("TITULADO");
  const [description, setDescription] = useState("Descripcion");
  const [price, setPrice] = useState("$");
  const [time, setTime] = useState("Tiempo");
  const [category, setCategory] = useState("Categoria");
  const [image, setImage] = useState("img");

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Solo números
    setPrice(`$${value}`);
  };

  const handleAddClick = () => {
    console.log("Información agregada:");
    console.log("Título:", title);
    console.log("Descripción:", description);
    console.log("Precio:", price);
    console.log("Tiempo:", time);
    console.log("Categoría:", category);
    console.log("Imagen:", image);
  };

  return (
    <main className="p-5 h-screen w-screen">
      <section className="font-BebasNeue text-5xl border-subtitle h-fill border-2 p-5">
        <span className="text-colorBase"> ADMINISTRACION</span>
        <section className="md:flex h-5/6 gap-5">
          <div className="p-5 w-full mb-5 md:w-1/3 bg-colorBase h-[700px]">
            <div className="relative shadow-xl border-subtitle overflow-hidden h-full border-2 p-5">
              <div className="absolute bg-subtitle right-5 h-10 w-10  border-subtitle rounded-full border-2 flex justify-center items-center">
                <span className="text-7xl"></span>
              </div>

              {/* Botón AGREGAR */}
              <div className="absolute  z-20 bg-subtitle right-5 top-36 h-10 w-24 shadow-xl rounded-sm hover:scale-105 hover:bg-colorBase border-subtitle border-2 flex justify-center items-center">
                <button className="text-xl" onClick={handleAddClick}>
                  AGREGAR
                </button>
              </div>

              <div className="md:h-72 md:w-72 h-64 w-64 text-xl  border-subtitle border-2 flex items-center justify-center">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="font-BebasNeue bg-transparent text-center border-none outline-none w-full opacity-70"
                />
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value.slice(0, 35).toUpperCase())}
                className="text-4xl font-BebasNeue bg-transparent border-none outline-none w-full text-center opacity-70"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value.slice(0, 220))}
                className="font-Notable border-2 p-1 h-[100px] border-subtitle text-base bg-transparent outline-none w-full text-center opacity-70 "
              />

              {/* Precio con etiqueta */}
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm text-subtitle">Precio:</label>
                <input
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  className="font-Acme text-2xl bg-transparent border-none outline-none w-3/4 text-center opacity-70"
                />
              </div>

              {/* Fecha de finalización con etiqueta */}
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm text-subtitle">Fecha de Finalización:</label>
                <input
                  type="date"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="font-BebasNeue bg-transparent border-none outline-none w-3/4 text-center opacity-70"
                />
              </div>

              {/* Categoría con etiqueta */}
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm text-subtitle">Categoría:</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value.slice(0, 50))}
                  className="font-BebasNeue bg-subtitle p-5 text-xl text-center border-none outline-none w-3/4 opacity-70"
                />
              </div>
            </div>
          </div>
          <div className="p-5 w-full mb-5 md:w-1/3 bg-zinc-800 h-[700px]">b</div>
          <div className="p-5 w-full mb-5 md:w-1/3 bg-zinc-800 h-[700px]">c</div>
        </section>
      </section>
    </main>
  );
};

export default Admin;
