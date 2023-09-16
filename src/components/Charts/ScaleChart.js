// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   indexAxis: 'x',
//   maintainAspectRatio: true,
//   scales: {
//     y: {
//       display: true,
//       beginAtZero: true,
//       lineWidth: 0,
//       //   max: 1,
//       //   ticks: {
//       //     stepSize: 100,
//       //   },
//     },
//   },

//   plugins: {
//     legend: {
//       display: false,
//     },
//   },
// };

// const labels = [
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '10',
//   '11',
//   '12',
//   '13',
//   '14',
//   '15',
//   '16',
//   '17',
//   '18',
//   '19',
//   '20',
//   '21',
//   '22',
//   '23',
//   '24',
//   '25',
//   '26',
//   '27',
//   '28',
//   '29',
//   '30',
// ];

// const weightMonth = [
//   65, 68, 70, 70, 71, 64, 63, 64, 65, 64, 63, 64, 65, 64, 63, 64, 65, 64, 63,
//   64, 65, 64, 63, 64, 65, 65, 64, 63, 64, 65,
// ];

// const data1 = {
//   labels,
//   datasets: [
//     {
//       data: [
//         { x: 1, y: 0 },
//         { x: 2, y: 0 },
//         { x: 3, y: 0 },
//       ],
//       fill: false,
//       showLine: true,
//       borderColor: '#E3FFA8',
//       borderWidth: 1,
//       tension: 0.4,
//       pointRadius: 0,
//     },
//   ],
// };
// const data2 = {
//   labels: weightMonth,
//   datasets: [
//     {
//       borderColor: '#E3FFA8',
//       borderWidth: 1,
//       pointRadius: 0,
//     },
//   ],
// };

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

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

const data = [
  65, 68, 70, 70, 71, 64, 63, 64, 65, 64, 63, 64, 65, 64, 63, 64, 65, 64, 63,
  64, 65, 64, 63, 64, 65, 65, 64, 63, 64, 65,
];

const datasets = [
  {
    data: data,
    fill: false,
    showLine: true,
    borderColor: '#E3FFA8',
    borderWidth: 1,
    tension: 0.4,
    pointRadius: 0,
  },
];
const dataOne = {
  labels,
  datasets,
};

export const options = {
  responsive: true,
  scales: {
    y: {
      display: false,
      min: 50,
      max: 80,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

// const average = Math.round(_.mean(data));

// const WeightChart = () => {
//   return (
//     <div className={css.caloriesChart}>
//       <div className={css.dashboardTitle}>
//         <p className={css.chartTitle}>Weight</p>
//         <p className={css.chartSubtitle}>Average value: {average} kg</p>
//       </div>
//       <div className={css.chart}>
//         <Line options={options} data={dataOne} />
//       </div>
//     </div>
//   );
// };

const ScaleChart = () => {
  return (
    <div>
      <Line options={options} data={dataOne} />
      {/* <Line options={options} data={data2} />; */}
      {/* <Line options={options} data={data1} />; */}
    </div>
  );
};

export default ScaleChart;
