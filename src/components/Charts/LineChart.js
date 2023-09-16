import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: true,
        color: '#292928',
      },
    },
    y: {
      beginAtZero: true,
      min: 0,
      max: 3000,
      ticks: {
        stepSize: 1000,
      },
      grid: {
        display: true,
        color: '#292928',
      },
      // offset: 'top',
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
];

const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => {
        const randomNum = 1500 + Math.random() * 100;
        return Math.round(randomNum / 100) * 100;
      }),
      borderColor: '#E3FFA8',
      borderWidth: 1,
      pointRadius: 0,
      tension: 0.5,
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;
