import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectStatsInfo } from '../../redux/Statistics/statisticsSelectors';
import { List, Item, WeightTitle, DataTitle } from './ScaleChart.styled';
import {
  TitleContainer,
  ChartsTitle,
  ChartsSubtitle,
  ChartsCaption,
  Scale,
} from './LineChart.styled';

const ScaleChart = ({ dataFormat }) => {
  const [weight, setWeight] = useState([]);
  // const [average, setAverage] = useState([]);

  const info = useSelector(selectStatsInfo);

  useEffect(() => {
    if (Object.keys(info).length === 0) {
      return;
    }

    const infoArray = [];
    const averageValue = [];

    if (Object.keys(info).length !== 0) {
      const keys = Object.keys(info);
      for (const key of keys) {
        if (key === 'weight') {
          const value = [];

          if (!dataFormat) {
            for (const entry of info[key]) {
              value.push(entry.amount);
            }

            const total = value.reduce((previousValue, number) => {
              return previousValue + number;
            }, 0);
            let totalAverageValue = Math.round(total / value.length);
            averageValue.push(totalAverageValue);
            setWeight(info[key]);
          }

          if (dataFormat) {
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
              console.log(entry);
              const entryMonth = new Date(entry._id).getMonth() + 1;
              // if (!entry.amount) {
              //   console.log('ffffffff');
              //   return;
              // }

              const average = (entry.amount / entry.count).toFixed(2);

              if (!average) {
                return console.log('NaN');
              }

              const newInfo = {
                _id: monthShortName[entryMonth],
                amount: average,
              };

              console.log(newInfo);
              value.push(entry.average);
              infoArray.push(newInfo);

              return;
            }

            const total = value.reduce((previousValue, number) => {
              return previousValue + number;
            }, 0);
            let totalAverageValue = Math.round(total / value.length);
            averageValue.push(totalAverageValue);

            setWeight(infoArray);
          }
        }
      }
    }
  }, [dataFormat, info]);

  return (
    <>
      <TitleContainer>
        <ChartsTitle>Weight</ChartsTitle>
        <ChartsSubtitle>
          Average value: <ChartsCaption>68 kg</ChartsCaption>
        </ChartsSubtitle>
      </TitleContainer>
      <Scale>
        <List>
          {weight.map(({ _id, amount }) => {
            return (
              <Item key={`${_id}+${amount}`}>
                <WeightTitle>{amount}</WeightTitle>
                <DataTitle>{_id}</DataTitle>
              </Item>
            );
          })}
        </List>
      </Scale>
    </>
  );
};

export default ScaleChart;
