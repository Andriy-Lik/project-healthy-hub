import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// import { selectStatsInfo } from '../../redux/Statistics/statisticsSelectors';
import { List, Item, WeightTitle, DataTitle } from './ScaleChart.styled';

const ScaleChart = ({ dataFormat }) => {
  const [weight, setWeight] = useState([]);
  // const [average, setAverage] = useState([]);

  // const info = useSelector(selectStatsInfo);

  useEffect(() => {
    const info = {
      weight: [
        { weight: 70, createdAt: '2023-04-11T10:40:02.360Z' },
        { weight: 70, createdAt: '2023-04-11T10:40:02.360Z' },
        { weight: 71, createdAt: '2023-05-12T10:40:10.729Z' },
        { weight: 72, createdAt: '2023-05-13T10:40:15.384Z' },
        { weight: 70, createdAt: '2023-06-14T10:40:19.389Z' },
        { weight: 70, createdAt: '2023-06-11T10:40:02.360Z' },
        { weight: 71, createdAt: '2023-07-12T10:40:10.729Z' },
        { weight: 72, createdAt: '2023-07-13T10:40:15.384Z' },
        { weight: 70, createdAt: '2023-07-14T10:40:19.389Z' },
        { weight: 70, createdAt: '2023-08-11T10:40:02.360Z' },
        { weight: 71, createdAt: '2023-08-12T10:40:10.729Z' },
        { weight: 72, createdAt: '2023-08-13T10:40:15.384Z' },
        { weight: 70, createdAt: '2023-08-14T10:40:19.389Z' },
        { weight: 69, createdAt: '2023-09-11T10:40:02.360Z' },
        { weight: 70, createdAt: '2023-09-12T10:40:10.729Z' },
        { weight: 72, createdAt: '2023-09-13T10:40:15.384Z' },
        { weight: 70, createdAt: '2023-09-14T10:40:19.389Z' },
      ],
    };

    if (Object.keys(info).length === 0) {
      return;
    }

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const infoArray = [];
    const averageValue = [];

    if (Object.keys(info).length !== 0) {
      const keys = Object.keys(info);
      for (const key of keys) {
        if (key === 'weight') {
          const value = [];

          if (!dataFormat) {
            for (const entry of info[key]) {
              const entryDate = new Date(entry.createdAt);
              const entryMonth = entryDate.getMonth() + 1;

              if (entryMonth === currentMonth) {
                const newNew = {
                  createdAt: entryDate.getDate(),
                  weight: entry.weight,
                };
                value.push(Math.round(entry.weight));
                infoArray.push(newNew);
              }
            }

            const total = value.reduce((previousValue, number) => {
              return previousValue + number;
            }, 0);
            let totalAverageValue = Math.round(total / value.length);
            averageValue.push(totalAverageValue);
            infoArray.sort((a, b) => a.createdAt - b.createdAt);
          }

          if (dataFormat) {
            const groupedData = {};
            const monthShortName = {
              1: 'January',
              2: 'February',
              3: 'March',
              4: 'April',
              5: 'May',
              6: 'June',
              7: 'July',
              8: 'August',
              9: 'September',
              10: 'October',
              11: 'November',
              12: 'December',
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
                groupedData[entryMonth].totalConsumption += entry.weight;
                groupedData[entryMonth].count++;
              }
            }
            for (const month in groupedData) {
              const totalConsumption = groupedData[month].totalConsumption;
              const count = groupedData[month].count;
              const average = totalConsumption / count;

              const newNew = {
                createdAt: monthShortName[month],
                weight: Math.round(average),
              };

              value.push(Math.round(average));
              infoArray.push(newNew);
            }

            const total = value.reduce((previousValue, number) => {
              return previousValue + number;
            }, 0);
            let totalAverageValue = Math.round(total / value.length);
            averageValue.push(totalAverageValue);
            infoArray.sort((a, b) => a.createdAt - b.createdAt);
          }
        }
      }
    }

    // setAverage(averageValue);
    setWeight(infoArray);
  }, [dataFormat]);

  return (
    <List>
      {weight.map(({ weight, createdAt }) => {
        return (
          <Item key={`${weight}+${createdAt}`}>
            <WeightTitle>{weight}</WeightTitle>
            <DataTitle>{createdAt}</DataTitle>
          </Item>
        );
      })}
    </List>
  );
};

export default ScaleChart;
