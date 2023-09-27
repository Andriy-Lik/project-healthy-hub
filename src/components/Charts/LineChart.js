import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectStatsInfo } from '../../redux/Statistics/statisticsSelectors';
import { monthName } from '../../constants/monthName';

import {
  TitleContainer,
  ChartsTitle,
  ChartsSubtitle,
  ChartsCaption,
  Chart,
} from './ScaleLineCharts.styled.js';

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

const LineChart = ({ dataFormat, type }) => {
  const [time, setTime] = useState([]);
  const [information, setInformation] = useState([]);
  const [average, setAverage] = useState([]);

  const info = useSelector(selectStatsInfo);

  useEffect(() => {
    if (Object.keys(info).length === 0) {
      return;
    }

    const infoArray = [];
    const timesArray = [];
    const averageValue = [];

    if (Object.keys(info).length !== 0) {
      const keys = Object.keys(info);

      for (const key of keys) {
        if (key === type) {
          if (!dataFormat) {
            for (const entry of info[key]) {
              timesArray.push(entry._id);
              infoArray.push(entry.amount);
            }
          }

          if (dataFormat) {
            for (const entry of info[key]) {
              const entryMonth = new Date(entry._id).getMonth() + 1;

              const average = entry.amount / entry.count;

              timesArray.push(monthName.short[entryMonth]);
              infoArray.push(Math.round(average));
            }
          }
        }
      }
    }
    const total = Math.round(
      infoArray.reduce((previousValue, number) => {
        return previousValue + number;
      }, 0) / timesArray.length
    );
    averageValue.push(total);

    setInformation(infoArray);
    setTime(timesArray);
    setAverage(averageValue);
  }, [info, dataFormat, type]);

  let datasetsLabel = type === 'water' ? 'milliliters' : 'calories';
  let caption = type === 'water' ? 'L' : 'K';

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: false,
        offset: true,
        ticks: {
          color: '#B6B6B6',
        },
        grid: {
          display: true,
          color: '#292928',
          offset: true,
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 3000,
        ticks: {
          alignToPixels: true,
          major: {
            enabled: true,
          },
          color: '#B6B6B6',
          stepSize: 1000,
          callback: function (value, index, ticks) {
            if (String(value).length === 1) {
              return value;
            }
            return String(value).slice(0, 1) + `${caption}`;
          },
        },
        border: {
          display: false,
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

  const data = {
    labels: time,
    datasets: [
      {
        data: information,
        label: `${datasetsLabel}`,
        borderColor: '#E3FFA8',
        borderWidth: 1,
        pointRadius: 1,
        tension: 0.5,
        drawActiveElementsOnTop: true,
      },
    ],
  };

  return (
    <>
      <TitleContainer>
        <ChartsTitle>{type === 'water' ? 'Water' : 'Calories'}</ChartsTitle>
        <ChartsSubtitle>
          Average value:{' '}
          <ChartsCaption>
            {average} {type === 'water' ? 'ml' : 'cal'}
          </ChartsCaption>
        </ChartsSubtitle>
      </TitleContainer>
      <Chart>
        <Line options={options} data={data} />
      </Chart>
    </>
  );
};

export default LineChart;
