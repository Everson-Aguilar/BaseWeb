import React, { FC, useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define un ícono personalizado para los marcadores
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const locations = [
  { id: 1, lat: 43.8486, lng: 18.3564, label: 'Bosnia y Herzegovina' },
  { id: 2, lat: 46.6034, lng: 1.8883, label: 'Francia' },
  { id: 3, lat: 23.6978, lng: 120.9605, label: 'Taiwán' },
  { id: 4, lat: 6.4238, lng: -66.5897, label: 'Venezuela' },
  { id: 5, lat: 37.0902, lng: -95.7129, label: 'Estados Unidos' },
  { id: 6, lat: 51.1657, lng: 10.4515, label: 'Alemania' },
];

const MapComponent: FC = () => {
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null); // Referencia al contenedor del mapa

  useEffect(() => {
    setIsClient(true); // Marca que el componente se está renderizando en el cliente
  }, []);

  useEffect(() => {
    if (isClient && mapRef.current) {
      const map = L.map(mapRef.current).setView([20.505, -0.01], 2);

      // Capa de tiles con estilo oscuro, sin atribución
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution: '', // Eliminar la atribución de CartoDB
      }).addTo(map);

      // Añadir los marcadores
      locations.forEach((location) => {
        L.marker([location.lat, location.lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(location.label);
      });
    }
  }, [isClient]); // Ejecutar solo cuando es cliente

  return (
    <div
      ref={mapRef}
      style={{ height: '800px', width: '100%' }}
    />
  );
};

export default MapComponent;
