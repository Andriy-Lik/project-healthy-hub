import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { calcRemainder, calcPercent } from 'helpers/calculations';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectUser } from 'redux/Auth/authSelectors';
import { selectConsumedProteinPerDay } from 'redux/Statistics/statisticsSelectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartForProtein = () => {
  const userInfo = useSelector(selectUser);
  const goal = userInfo.protein;
  const consumed = useSelector(selectConsumedProteinPerDay);
  const leftConsumed = calcRemainder(goal, consumed);
  const consumedPercent = calcPercent(goal, consumed);

  const warning = consumed > goal;

  const notifyWarn = message => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      theme: 'dark',
      autoClose: 3000,
    });
  };

  const data = {
    datasets: [
      {
        data: [consumed, leftConsumed >= 0 ? leftConsumed : 0],
        backgroundColor: [`${warning ? '#E74A3B' : '#FFF3B7'}`, '#292928'],
        borderRadius: `${leftConsumed > 0 ? 12 : 0}`,
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
      const { ctx } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = `400 12px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText(consumedPercent + '%', xCoor, yCoor);
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

  if (warning) {
    notifyWarn(
      'Maximum protein consumption. If you continue to consume, you will not reach your goal'
    );
  }

  return (
    <>
      <ToastContainer />
      <Doughnut
        data={data}
        options={options}
        plugins={[textCenter, backgroundCircle]}
      />
    </>
  );
};

export default DoughnutChartForProtein;
