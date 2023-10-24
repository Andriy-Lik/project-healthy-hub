import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/authSelectors';
import { selectConsumedProteinPerDay } from 'redux/Statistics/statisticsSelectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartForProtein = () => {
  const userInfo = useSelector(selectUser);
  const proteinGoal = userInfo.protein;
  const consumedProtein = useSelector(selectConsumedProteinPerDay);
  const leftConsumedProtein = proteinGoal - consumedProtein;

  const data = {
    datasets: [
      {
        data: [consumedProtein, leftConsumedProtein], // 117.5 - спожито протеїну, 34 - залишилось спожити
        backgroundColor: ['#FFF3B7', '#292928'],
        borderRadius: 12,
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      const consumed = data.datasets[0].data[0];
      const left = data.datasets[0].data[1];
      const counterPercentage = () => {
        return Math.round((consumed * 100) / (consumed + left)) + '%';
      };

      ctx.save();
      ctx.font = `400 12px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText(counterPercentage(), xCoor, yCoor);
    },
  };

  const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius;
      const angle = Math.PI / 180;
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = 'rgba(41, 41, 40, 1)';
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

  return (
    <Doughnut
      data={data}
      options={options}
      plugins={[textCenter, backgroundCircle]}
    />
  );
};

export default DoughnutChartForProtein;
