'use client'

import { useEffect } from "react";

const ClearSessionStorage = () => {
  useEffect(() => {
    // Eliminar los datos de sessionStorage de inmediato
    sessionStorage.removeItem("email_ID");
    console.log("Datos eliminados de sessionStorage.");
  }, []);

  return null; // No necesita renderizar nada
};

export default ClearSessionStorage;
