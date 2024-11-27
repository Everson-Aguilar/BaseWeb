import { useState, useEffect } from 'react';
import Image from 'next/image';



// Definir las dimensiones del mapa
const mapDimensions = {
  width: 1000, // Ancho del mapa real (en kilómetros o grados)
  height: 500, // Alto del mapa real (en kilómetros o grados)
};

// Tipo para coordenadas
type Coordinates = {
  x: number;
  y: number;
};

const MyComponent: React.FC = () => {
  const [points, setPoints] = useState<Coordinates[]>([]);
  const [isClickable, setIsClickable] = useState(false); // Estado para habilitar/deshabilitar clic

  // Leer datos del archivo JSON al cargar el componente
  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await fetch('/json_data/coordenadas.json'); // Ruta al archivo JSON en la carpeta public
        const data = await response.json();
        setPoints(data.points); // Asegúrate de que el JSON tenga un array "points"
      } catch (error) {
        console.error('Error al cargar puntos:', error);
      }
    };

    fetchPoints();
  }, []);

  // Manejar clics en el mapa solo si isClickable es true
  const handleMapClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isClickable) return; // Si no es clickeable, no hace nada

    const rect = (event.target as HTMLDivElement).getBoundingClientRect();
    const x = event.clientX - rect.left; // Coordenada x relativa al mapa
    const y = event.clientY - rect.top; // Coordenada y relativa al mapa

    setPoints([...points, { x, y }]);
  };

  // Descargar puntos como archivo JSON
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify({ points }, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'savedPoints.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="overflow-auto">
      <div
        className="relative w-[1000px] h-[500px] cursor-pointer"
        onClick={handleMapClick}
      >
        <Image
          src="/DiseñoWeb/WebRecursos/mapa/map.png"
          alt="Mapa"
          width={mapDimensions.width}
          height={mapDimensions.height}
          className="object-cover"
        />

        {/* Renderizar los puntos creados */}
        {points.map((point, index) => (
          <div
            key={index}
            className="absolute w-2.5 h-2.5 bg-lime-400 rounded-full"
            style={{
              top: `${(point.y / mapDimensions.height) * 100}%`,
              left: `${(point.x / mapDimensions.width) * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Botón para descargar puntos como JSON 
      <button
        onClick={handleDownload}
        className="mt-4 p-2 text-sm bg-trend text-colorBase rounded shadow"
      >
        Descargar Coordenadas
      </button>*/}
    </div>
  );
};

export default MyComponent;
