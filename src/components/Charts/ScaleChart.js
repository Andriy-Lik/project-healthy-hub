import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectStatsInfo } from '../../redux/Statistics/statisticsSelectors';
import { monthName } from '../../constants/monthName';
import {
  List,
  Item,
  WeightTitle,
  DataTitle,
  TitleContainer,
  ChartsTitle,
  ChartsSubtitle,
  ChartsCaption,
  Scale,
} from './ScaleLineCharts.styled';

const ScaleChart = ({ dataFormat }) => {
  const [weight, setWeight] = useState([]);
  const [average, setAverage] = useState(0);

  const info = useSelector(selectStatsInfo);

  useEffect(() => {
    if (Object.keys(info).length === 0) {
      return;
    }

    const infoArray = [];

    if (Object.keys(info).length !== 0) {
      const keys = Object.keys(info);
      for (const key of keys) {
        if (key === 'weight') {
          const value = [];

          if (!dataFormat) {
            for (const entry of info[key]) {
              if (entry.count) {
                return;
              }
              // const average = (entry.amount / entry.count).toFixed(1);

              value.push(entry.amount);
              // value.push(Number(average));
            }
            setWeight(info[key]);
          }

          if (dataFormat) {
            for (const entry of info[key]) {
              const entryMonth = new Date(entry._id).getMonth() + 1;

              if (!entry.count) {
                return;
              }

              const average = (entry.amount / entry.count).toFixed(1);

              if (average) {
                const newInfo = {
                  _id: monthName.full[entryMonth],
                  amount: average,
                };
                infoArray.push(newInfo);
                value.push(Number(average));
              }
            }
            setWeight(infoArray);
          }

          if (value.length > 0) {
            const total = Math.round(
              value.reduce((previousValue, number) => {
                return previousValue + number;
              }, 0) / value.length
            );
            setAverage(total);
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
          Average value: <ChartsCaption>{average} kg</ChartsCaption>
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

ScaleChart.propTypes = {
  dataFormat: PropTypes.bool.isRequired,
};

export default ScaleChart;
