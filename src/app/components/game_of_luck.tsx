import React, { useState, useEffect } from 'react';

// Definir un tipo para los participantes
type Participant = {
  id: number;
  name: string;
};

const RuletaVida: React.FC = () => {
  // Lista de participantes en formato JSON directamente en el código
  const participants: Participant[] = [
    { id: 1, name: "Participante 1" },
    { id: 2, name: "Participante 2" },
    { id: 3, name: "Participante 3" },
    { id: 4, name: "Participante 4" },
    { id: 5, name: "Participante 5" },
    { id: 6, name: "Participante 6" },
    { id: 7, name: "Participante 7" },
    { id: 8, name: "Participante 8" },
    { id: 9, name: "Participante 9" },
    { id: 10, name: "Participante 10" }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // Lista de participantes seleccionados
  const selectedParticipantIds = [5, 4, 6]; // Cambia estos valores para seleccionar los participantes con los ids correspondientes
  const selectedColor = 'bg-orange-400'; // Color similar para los dos seleccionados
  const primaryColor = 'bg-blue-500'; // Color diferente para la casilla principal (la primera seleccionada)

  // Cambiar el índice de manera secuencial
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % participants.length);
    }, 500); // Cambiar cada medio segundo (500 ms)

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [participants.length]);

  return (
    <section className="bg-trend h-fill text-1xl p-5 mt-5 text-colorBase">
      <h2 className="text-4xl text-orange-400 font-BebasNeue">JUGADORES</h2>
      <section>
        <section className="w-full text-1xl p-5">
          <ul className="flex flex-wrap gap-5">
            {/* Mostrar la lista de participantes */}
            {participants.map((participant, index) => (
              <li
                className={`flex justify-center items-center border-2 p-5 w-40 h-40 
                  ${index === currentIndex ? 'bg-green-500' : ''} 
                  ${selectedParticipantIds[0] === participant.id ? primaryColor : ''}
                  ${selectedParticipantIds.includes(participant.id) && selectedParticipantIds[0] !== participant.id ? selectedColor : ''}`}
                key={participant.id}
              >
                {participant.name}
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section className='flex'>

        <div className=' rounded-sm flex justify-center items-center w-32 bg-orange-400'>{selectedParticipantIds}</div>
        <div>a</div>
        <div>a</div>



      </section>


    </section>
  );
};

export default RuletaVida;
