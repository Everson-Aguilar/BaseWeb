import React, { useState, useEffect } from "react";
import Assistant from "./assistant";

const Game01 = () => {
  const casillas = Array.from({ length: 10 }, (_, index) => index + 1);

  const [openCasillas, setOpenCasillas] = useState<{ [key: number]: boolean }>({});
  const [formValues, setFormValues] = useState<{ [key: number]: string }>({});
  const [blockedCasillas, setBlockedCasillas] = useState<{ [key: number]: number | null }>({});
  const [nextAllowed, setNextAllowed] = useState<number>(1);
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const toggleCasilla = (index: number) => {
    if (blockedCasillas[index]) return;

    if (index !== nextAllowed) {
      setHighlighted(nextAllowed);
      setTimeout(() => setHighlighted(null), 1000);
      return;
    }

    setOpenCasillas((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleInputChange = (index: number, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleSubmit = async (index: number, event: React.FormEvent) => {
    event.preventDefault();

    const linkValue = formValues[index]?.trim();
    if (!linkValue) {
      alert("El campo no puede estar vacío");
      return;
    }

    const email_ID = sessionStorage.getItem("email_ID");
    if (!email_ID) {
      alert("No hay usuario autenticado");
      return;
    }

    const expirationTime = Date.now() + 24 * 60 * 60 * 1000;

    const sendData = {
      LinkSend: linkValue,
      verificationSend: false,
      horafechaSend: new Date().toISOString(),
      email_ID,
    };

    try {
      const response = await fetch("/api/sends/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }

      setBlockedCasillas((prev) => ({
        ...prev,
        [index]: expirationTime,
      }));

      setNextAllowed(index + 1);
      setOpenCasillas((prev) => ({
        ...prev,
        [index]: false,
      }));
    } catch (error) {
      alert("Hubo un problema al enviar los datos");
      console.error(error);
    }
  };

  return (
    <div className="flex-row items-center space-y-10">
      <div className="flex flex-wrap gap-2 justify-center items-start text-center w-full">
        {casillas.map((casilla) => (
          <div key={casilla} className="flex flex-col items-center">
            <div
              onClick={() => toggleCasilla(casilla)}
              className={`cursor-pointer flex justify-center items-center md:h-20 md:w-20 h-20 w-20 border-2 border-colorBase transition-transform duration-500 ease-in-out 
                 ${blockedCasillas[casilla] ? "bg-colorBase text-neutral-200 cursor-not-allowed p-10" 
                 : highlighted === casilla ? "bg-lime-500 animate-pulse" 
                 : "bg-neutral-200 hover:bg-lime-500 hover:scale-110"}`}
            >
              {blockedCasillas[casilla] ? "Enviado" : "$2.000"}
            </div>

            {openCasillas[casilla] && !blockedCasillas[casilla] && (
              <div className="mt-2 p-4 bg-subtitle shadow-lg border rounded-lg w-64">
                <p className="font-bold mb-2">Contenedor {casilla}</p>
                <form onSubmit={(event) => handleSubmit(casilla, event)} className="flex flex-col space-y-2">
                  <input
                    type="text"
                    placeholder="Ingresa un enlace"
                    value={formValues[casilla] || ""}
                    onChange={(e) => handleInputChange(casilla, e.target.value)}
                    className="p-2 border rounded-md bg-neutral-200"
                  />
                  <button type="submit" className="px-4 py-2 bg-colorBase text-neutral-200 rounded-md hover:bg-lime-500 transition">
                    Enviar
                  </button>
                </form>
                <button onClick={() => toggleCasilla(casilla)} className="mt-2 px-4 py-1 text-white rounded-md">
                  X
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <Assistant />
      </div>
    </div>
  );
};

export default Game01;