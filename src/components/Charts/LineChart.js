import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectStatsInfo } from '../../redux/Statistics/statisticsSelectors';
import { monthName } from '../../constants/monthName';

import {
  TitleContainer,
  ChartsTitle,
  ChartsSubtitle,
  ChartsCaption,
  Chart,
  ChartLabelBlock,
  ChartLabelContent,
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
  const [average, setAverage] = useState(0);

  const info = useSelector(selectStatsInfo);

  useEffect(() => {
    if (Object.keys(info).length === 0) {
      return;
    }

    const infoArray = [];
    const timesArray = [];

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

    if (infoArray.length > 0) {
      const total = Math.round(
        infoArray.reduce((previousValue, number) => {
          return previousValue + number;
        }, 0) / infoArray.length
      );
      setAverage(total);
    }

    setInformation(infoArray);
    setTime(timesArray);
  }, [info, dataFormat, type]);

  let caption = type === 'water' ? 'L' : 'K';
  const yScaleMax = Math.max(...information) + 1000;

  const options = {
    interaction: {
      mode: 'index',
      intersect: false,
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: context => {
          const { chart, tooltip } = context;
          let tooltipEl = chart.canvas.parentNode.querySelector('div');
          let tooltipTitle = chart.canvas.parentNode.querySelector('#value');

          if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

          tooltipEl.style.opacity = 1;
          tooltipEl.style.left = positionX + tooltip.caretX + 'px';
          tooltipEl.style.top = positionY + tooltip.caretY - '84' + 'px';
          tooltipTitle.textContent =
            context.tooltip.dataPoints[0].formattedValue;
        },
      },
    },
    indexAxis: 'x',
    scales: {
      x: {
        alignToPixels: true,
        beginAtZero: false,
        offset: true,
        ticks: {
          color: '#B6B6B6',
          padding: 6,
          font: {
            family: 'Poppins',
            size: 10,
          },
        },
        grid: {
          display: true,
          color: '#292928',
          offset: true,
        },
      },
      y: {
        alignToPixels: true,
        beginAtZero: true,
        min: 0,
        max: yScaleMax,
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
          padding: 8,
          font: {
            family: 'Poppins',
            size: 10,
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
  };

  const data = {
    labels: time,
    datasets: [
      {
        data: information,
        borderColor: '#E3FFA8',
        borderWidth: 1,
        pointRadius: 0,
        pointHoverBackgroundColor: '#E3FFA8',
        hitRadius: 5,
        pointHoverRadius: 5,
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
        <ChartLabelBlock>
          <ChartLabelContent>
            <p id="value"></p>
            <span>{type === 'water' ? 'milliliters' : 'calories'}</span>
          </ChartLabelContent>
        </ChartLabelBlock>
      </Chart>
    </>
  );
};

LineChart.propTypes = {
  dataFormat: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default LineChart;
