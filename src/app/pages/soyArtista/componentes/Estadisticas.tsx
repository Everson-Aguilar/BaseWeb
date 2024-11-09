import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registrar escalas y componentes globalmente
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['1', '2', '3', '4', '5'],
  datasets: [
    {
      label: 'Tendencia 2024',
      data: [238, 132, 687, 0, 0],
      backgroundColor: '#1f1f1f',
      
      

    },
  ],
};

export default function GraficoBarra() {
  return <Bar className='absolute bottom-20  ' data={data} />;
}
