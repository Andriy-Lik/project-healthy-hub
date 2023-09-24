import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// import { selectStatsInfo } from '../../redux/Statistics/statisticsSelectors';
// import { getStats } from '../../redux/Statistics/statisticsOperations';

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
  // const [average, setAverage] = useState([]);

  // const info = useSelector(selectStatsInfo);

  useEffect(() => {
    const info = {
      water: [
        {
          water: 2000,
          createdAt: '2021-07-18T10:40:39.412Z',
        },
        {
          water: 2200,
          createdAt: '2021-07-18T10:40:39.412Z',
        },
        {
          water: 2000,
          createdAt: '2022-07-18T10:40:39.412Z',
        },
        {
          water: 2300,
          createdAt: '2022-07-18T10:40:39.412Z',
        },
        {
          water: 1100,
          createdAt: '2023-07-18T10:40:39.412Z',
        },
        {
          water: 1400,
          createdAt: '2023-07-19T10:45:31.168Z',
        },
        {
          water: 1200,
          createdAt: '2023-07-20T10:45:36.891Z',
        },
        {
          water: 1800,
          createdAt: '2023-07-21T10:45:45.298Z',
        },
        {
          water: 1600,
          createdAt: '2023-07-22T10:45:52.200Z',
        },
        {
          water: 1500,
          createdAt: '2023-08-18T10:40:39.412Z',
        },
        {
          water: 1450,
          createdAt: '2023-08-19T10:45:31.168Z',
        },
        {
          water: 1415,
          createdAt: '2023-08-20T10:45:36.891Z',
        },
        {
          water: 2100,
          createdAt: '2023-08-21T10:45:45.298Z',
        },
        {
          water: 2100,
          createdAt: '2023-08-22T10:45:52.200Z',
        },
        {
          water: 2300,
          createdAt: '2023-09-01T10:31:44.390Z',
        },
        {
          water: 1200,
          createdAt: '2023-09-02T10:32:14.271Z',
        },
        {
          water: 1400,
          createdAt: '2023-09-03T10:37:49.924Z',
        },
        {
          water: 1450,
          createdAt: '2023-09-04T10:38:00.932Z',
        },
        {
          water: 1500,
          createdAt: '2023-09-05T10:38:05.314Z',
        },
        {
          water: 1900,
          createdAt: '2023-09-06T10:38:07.292Z',
        },
        {
          water: 1800,
          createdAt: '2023-09-07T10:38:14.494Z',
        },
        {
          water: 1400,
          createdAt: '2023-09-08T10:38:24.320Z',
        },
        {
          water: 1375,
          createdAt: '2023-09-09T10:38:30.660Z',
        },
        {
          water: 1350,
          createdAt: '2023-09-10T10:39:57.559Z',
        },
        {
          water: 1400,
          createdAt: '2023-09-11T10:40:02.360Z',
        },
        {
          water: 1250,
          createdAt: '2023-09-12T10:40:10.729Z',
        },
        {
          water: 1300,
          createdAt: '2023-09-13T10:40:15.384Z',
        },
        {
          water: 1350,
          createdAt: '2023-09-14T10:40:19.389Z',
        },
        {
          water: 1400,
          createdAt: '2023-09-15T10:40:25.729Z',
        },
        {
          water: 1425,
          createdAt: '2023-09-16T10:40:30.223Z',
        },
        {
          water: 1450,
          createdAt: '2023-09-17T10:40:35.055Z',
        },
        {
          water: 1475,
          createdAt: '2023-09-18T10:40:39.412Z',
        },
        {
          water: 1450,
          createdAt: '2023-09-19T10:45:31.168Z',
        },
        {
          water: 1415,
          createdAt: '2023-09-20T10:45:36.891Z',
        },
        {
          water: 1475,
          createdAt: '2023-09-21T10:45:45.298Z',
        },
        {
          water: 1500,
          createdAt: '2023-09-22T10:45:52.200Z',
        },
      ],
    };

    if (Object.keys(info).length === 0) {      
      return;
    }

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const infoArray = [];
    const timesArray = [];
    const averageValue = [];   

    if (Object.keys(info).length !== 0) {
      const keys = Object.keys(info);

      for (const key of keys) {
        if (key === 'water') {
          if (!dataFormat) {
            for (const entry of info[key]) {
              const entryDate = new Date(entry.createdAt);
              const entryMonth = entryDate.getMonth() + 1;

              if (entryMonth === currentMonth) {
                timesArray.push(entryDate.getDate());
                infoArray.push(entry.water);
              }
            }
          }

          if (dataFormat) {
            const groupedData = {};
            const monthShortName = {
              1: 'Jan',
              2: 'Feb',
              3: 'Mar',
              4: 'Apr',
              5: 'May',
              6: 'June',
              7: 'July',
              8: 'Aug',
              9: 'Sep',
              10: 'Oct',
              11: 'Nov',
              12: 'Dec',
            };

            for (const entry of info[key]) {
              const entryDate = new Date(entry.createdAt);
              const entryMonth = entryDate.getMonth() + 1;
              const entryYear = entryDate.getFullYear();

              if (entryYear === currentYear) {
                if (!groupedData[entryMonth]) {
                  groupedData[entryMonth] = {
                    totalConsumption: 0,
                    count: 0,
                  };
                }

                groupedData[entryMonth].totalConsumption += entry.water;
                groupedData[entryMonth].count++;
              }
            }

            for (const month in groupedData) {
              const totalConsumption =
                groupedData[month].totalConsumption;
              const count = groupedData[month].count;
              const average = totalConsumption / count;

              // timesArray.push(parseInt(month));
              timesArray.push(monthShortName[month]);              
              infoArray.push(Math.round(average));
            }
          }
        }
      }
    }

    const total = infoArray.reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    let totalAverageValue = Math.round(total / timesArray.length);
    averageValue.push(totalAverageValue);

    setInformation(infoArray);
    setTime(timesArray);
    // setAverage(averageValue);
  }, [dataFormat, type]);


  let caption = type === 'water' ? 'L' : 'K';
  const options = {
    responsive: true,
    scales: {
      x: {
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
        label: 'calories',
        borderColor: '#E3FFA8',
        borderWidth: 1,
        pointRadius: 0,
        tension: 0.5,
        drawActiveElementsOnTop: true,
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;
