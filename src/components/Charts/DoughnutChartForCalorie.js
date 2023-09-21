import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutForCalorie = () => {
  const data = {
    labels: ['Consumed:', 'Left:'],
    datasets: [
      {
        data: [1360, 340], // 1360 - спожито калорій, 340 - залишилось спожити
        lables: ['cunsumed', 'left:'],
        backgroundColor: ['#45FFBC', '#292928'],
        // borderRadius: 12,
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = `500 32px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(data.datasets[0].data[0], xCoor, yCoor - 5);

      ctx.font = `400 14px sans-serif`;
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText('caliories', xCoor, yCoor + 20);
    },
  };

  return <Doughnut data={data} options={options} plugins={[textCenter]} />;
};

export default DoughnutForCalorie;
