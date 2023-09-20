import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartForCarbonohidrates = () => {
  const data = {
    datasets: [
      {
        data: [136, 34], // 136 - спожито вуглеводів, 34 - залишилось спожити
        backgroundColor: ['#FFC4F7', '#292928'],
        // borderRadius: 12,
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

  return <Doughnut data={data} options={options} plugins={[textCenter]} />;
};

export default DoughnutChartForCarbonohidrates;
