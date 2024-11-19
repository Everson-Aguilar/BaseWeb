import React, { FC, useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Datos de localización de ejemplo
const locations = [
  { id: 1, lat: 43.8486, lng: 18.3564, label: 'Bosnia y Herzegovina' },
  { id: 2, lat: 46.6034, lng: 1.8883, label: 'Francia' },
  { id: 3, lat: 23.6978, lng: 120.9605, label: 'Taiwán' },
  { id: 4, lat: 6.4238, lng: -66.5897, label: 'Venezuela' },
  { id: 5, lat: 37.0902, lng: -95.7129, label: 'Estados Unidos' },
  { id: 6, lat: 51.1657, lng: 10.4515, label: 'Alemania' },
];

const MapComponent: FC = () => {
  const [isClient, setIsClient] = useState(false); // Estado para verificar si es cliente
  const mapRef = useRef<HTMLDivElement>(null); // Referencia al contenedor del mapa

  // Verifica si estamos en el cliente
  useEffect(() => {
    setIsClient(true); // Establece que estamos en el cliente cuando el componente se monta
  }, []);

  // Solo inicializa el mapa en el cliente
  useEffect(() => {
    if (isClient && mapRef.current) {
      // Inicializa el mapa solo en el cliente
      const map = L.map(mapRef.current).setView([20.505, -0.01], 2); // Centro y nivel de zoom

      // Capa de tiles con estilo oscuro
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
      }).addTo(map);

      // Añadir los marcadores con un icono predeterminado
      locations.forEach((location) => {
        const markerIcon = L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // Icono del marcador
          iconSize: [25, 41], // Tamaño del icono
          iconAnchor: [12, 41], // Puntero del icono
          popupAnchor: [0, -41], // Ubicación del popup
        });

        L.marker([location.lat, location.lng], { icon: markerIcon })
          .addTo(map)
          .bindPopup(location.label); // Asocia un popup con el marcador
      });
    }
  }, [isClient]); // Se ejecuta cuando `isClient` es `true`

  return (
    <div
      ref={mapRef}
      style={{ height: '800px', width: '100%' }} // Estilo del mapa
    />
  );
};

export default MapComponent;
