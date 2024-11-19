"use client";

import React, { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ScaleControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Definir el icono verde para los marcadores
const GreenIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41], // Tamaño del ícono
  iconAnchor: [12, 41], // Punto de anclaje del ícono
  popupAnchor: [0, -41], // Desplazamiento del popup
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Tipado para las ubicaciones
interface Location {
  id: number;
  position: [number, number]; // Tupla [latitud, longitud]
  label: string;
}

// Definir las ubicaciones específicas con latitud y longitud
const locations: Location[] = [
  { id: 1, position: [43.8486, 18.3564], label: 'Bosnia y Herzegovina' }, // Sarajevo, Bosnia y Herzegovina
  { id: 2, position: [46.6034, 1.8883], label: 'Francia' }, // Francia
  { id: 3, position: [23.6978, 120.9605], label: 'Taiwán' }, // Taiwán
  { id: 4, position: [6.4238, -66.5897], label: 'Venezuela' }, // Venezuela
  { id: 5, position: [37.0902, -95.7129], label: 'Estados Unidos' }, // Estados Unidos
  { id: 6, position: [51.1657, 10.4515], label: 'Alemania' }, // Alemania
];

const MapComponent: FC = () => {
  return (
    <MapContainer
      center={[20.505, -0.01]} // Centro inicial del mapa
      zoom={2} // Nivel de zoom inicial
      style={{ height: '800px', width: '100%' }} // Estilo del mapa
      attributionControl={false} // Eliminar el mensaje de Leaflet en la esquina
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a>'
      />

      {/* Mapeo de las ubicaciones para mostrar marcadores */}
      {locations.map((location) => (
        <Marker
          key={location.id} // Usar id para la clave única
          position={location.position} // Asignar la posición del marcador
          icon={GreenIcon} // Asignar el icono verde
        >
          <Popup>{location.label}</Popup> {/* Mostrar el nombre de la ubicación en el popup */}
        </Marker>
      ))}

      {/* Agregar control de escala */}
      <ScaleControl position="bottomright" />
    </MapContainer>
  );
};

export default MapComponent;
