import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1. Self-taught', value: 1000 },
  { name: '2. Workshops', value: 400 },
  { name: '3. Professional Training', value: 700 },
  { name: '4. Mentors', value: 500 },
];

const CircularDiagram = () => {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%" // Centra el gráfico
          cy="50%" // Centra el gráfico
          outerRadius={150}
          innerRadius={100} // Hace que el gráfico sea tipo "donut"
          stroke="#fff" // Bordes blancos
          strokeWidth={2} // Ancho del borde
          fill="none" // Sin color de relleno
          labelLine={false} // Desactiva las líneas de etiqueta
          label={({ name, cx, cy, midAngle, innerRadius, outerRadius }) => {
            // Calcula la posición del texto en el centro del segmento
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) / 2; // Posición en el centro del segmento
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="#fff" // Color del texto (blanco)
                fontSize={14}
                textAnchor="middle" // Centra el texto
                dominantBaseline="middle" // Alinea el texto verticalmente
              >
                {name} {/* Muestra solo el nombre */}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="none" /> // Sin color de relleno
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CircularDiagram;
