import React from 'react';

const construcciones = ({ cantidad }) => {
  // Función para generar posiciones aleatorias
  const posicionAleatoria = () => ({
    left: `${Math.random() * 90}%`,  // Posición horizontal aleatoria
    top: `${Math.random() * 90}%`,   // Posición vertical aleatoria
  });

  // Array para almacenar los treboles
  const edificios = [];

  // Generar treboles según la cantidad especificada
  for (let i = 0; i < cantidad; i++) {
    edificios.push(
      <div key={i} className="absolute h-2 w-2  opacity-80 bg-blue-600 z-10"  style={posicionAleatoria()}>
       
      </div>
    );
  }

  return (
    <div>
      {edificios}
    </div>
  );
};

export default construcciones;
