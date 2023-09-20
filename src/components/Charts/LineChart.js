import { useState, useEffect } from 'react';

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

const beckendArrayMonth = [
  { data: '1', water: '2100', calories: '1550' },
  { data: '2', water: '1500', calories: '1850' },
  { data: '3', water: '2100', calories: '1550' },
  { data: '4', water: '1700', calories: '1850' },
  { data: '5', water: '1500', calories: '1550' },
  { data: '6', water: '2100', calories: '1500' },
  { data: '7', water: '1700', calories: '1850' },
  { data: '8', water: '1950', calories: '1550' },
  { data: '9', water: '1950', calories: '1850' },
  { data: '10', water: '2100', calories: '1850' },
  { data: '11', water: '1700', calories: '1550' },
  { data: '12', water: '1700', calories: '1850' },
  { data: '13', water: '1950', calories: '1650' },
  { data: '14', water: '2100', calories: '1650' },
  { data: '15', water: '1700', calories: '1850' },
  { data: '16', water: '1650', calories: '1650' },
  { data: '17', water: '1700', calories: '1850' },
  { data: '18', water: '1500', calories: '1850' },
  { data: '19', water: '1650', calories: '1850' },
  { data: '20', water: '2100', calories: '1550' },
  { data: '21', water: '1700', calories: '1850' },
  { data: '22', water: '1700', calories: '1850' },
  { data: '23', water: '1700', calories: '1850' },
  { data: '24', water: '2100', calories: '1850' },
  { data: '25', water: '1700', calories: '1550' },
  { data: '26', water: '1700', calories: '1600' },
  { data: '27', water: '1700', calories: '1850' },
  { data: '28', water: '2100', calories: '1600' },
  { data: '29', water: '1900', calories: '1850' },
  { data: '30', water: '1900', calories: '1600' },
];

const beckendArrayYear = [
  { data: 'January', water: '1700', calories: '1850' },
  { data: 'February', water: '1800', calories: '1600' },
  { data: 'March', water: '1950', calories: '1650' },
  { data: 'April', water: '1700', calories: '1950' },
  { data: 'May', water: '1850', calories: '2000' },
  { data: 'June', water: '1700', calories: '1850' },
  { data: 'July', water: '1950', calories: '1750' },
  { data: 'August', water: '2000', calories: '1700' },
  { data: 'September', water: '1700', calories: '1900' },
  { data: 'October', water: '2100', calories: '1550' },
  { data: 'November', water: '2150', calories: '1600' },
  { data: 'December', water: '1900', calories: '1650' },
];

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
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const LineChart = ({ dataFormat, type }) => {
  const [waterData, setWaterData] = useState([]);
  const [calData, setCalData] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    if (dataFormat) {
      const yearTime = beckendArrayYear.map(time => time.data);
      const yearInfoWater = beckendArrayYear.map(info => info.water);
      const yearInfoCal = beckendArrayYear.map(info => info.calories);

      setWaterData(yearInfoWater);
      setCalData(yearInfoCal);
      setTime(yearTime);
    }
    if (!dataFormat) {
      const monthTime = beckendArrayMonth.map(time => time.data);
      const monthInfoWater = beckendArrayMonth.map(info => info.water);
      const monthInfoCal = beckendArrayMonth.map(info => info.calories);

      setWaterData(monthInfoWater);
      setCalData(monthInfoCal);
      setTime(monthTime);
    }
  }, [dataFormat, type]);

  const water = {
    labels: time,
    datasets: [
      {
        data: waterData,
        borderColor: '#E3FFA8',
        borderWidth: 1,
        pointRadius: 0,
        tension: 0.5,
      },
    ],
  };
  const cal = {
    labels: time,
    datasets: [
      {
        data: calData,
        borderColor: '#E3FFA8',
        borderWidth: 1,
        pointRadius: 0,
        tension: 0.5,
      },
    ],
  };

  return (
    <>
      {type === 'water' ? (
        <Line options={options} data={water} />
      ) : (
        <Line options={options} data={cal} />
      )}
    </>
  );
};

export default LineChart;