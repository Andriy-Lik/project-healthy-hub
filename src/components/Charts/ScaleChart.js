import { useState, useEffect } from 'react';

import { List, Item, WeightTitle, DataTitle } from './ScaleChart.styled';

const beckendArrayMonth = [
  { data: '01.02.2023', weight: '65' },
  { data: '02.02.2023', weight: '69' },
  { data: '03.02.2023', weight: '65' },
  { data: '04.02.2023', weight: '70' },
  { data: '05.02.2023', weight: '69' },
  { data: '06.02.2023', weight: '69' },
  { data: '07.02.2023', weight: '71.5' },
  { data: '08.02.2023', weight: '67' },
  { data: '09.02.2023', weight: '65' },
  { data: '10.02.2023', weight: '65' },
  { data: '11.02.2023', weight: '68' },
  { data: '12.02.2023', weight: '65' },
  { data: '13.02.2023', weight: '65' },
  { data: '14.02.2023', weight: '65' },
  { data: '15.02.2023', weight: '65' },
  { data: '16.02.2023', weight: '70.5' },
  { data: '17.02.2023', weight: '65' },
  { data: '18.02.2023', weight: '65' },
  { data: '19.02.2023', weight: '65' },
  { data: '20.02.2023', weight: '65' },
  { data: '21.02.2023', weight: '65' },
  { data: '22.02.2023', weight: '65' },
  { data: '23.02.2023', weight: '70.5' },
  { data: '24.02.2023', weight: '69' },
  { data: '25.02.2023', weight: '68' },
  { data: '26.02.2023', weight: '69' },
  { data: '27.02.2023', weight: '70.5' },
  { data: '28.02.2023', weight: '69' },
  { data: '29.02.2023', weight: '67.5' },
  { data: '30.02.2023', weight: '66' },
  { data: '31.02.2023', weight: '65' },
];

const beckendArrayYear = [
  { data: 'January', weight: '65' },
  { data: 'February', weight: '69' },
  { data: 'March', weight: '65' },
  { data: 'April', weight: '70' },
  { data: 'May', weight: '69' },
  { data: 'June', weight: '69' },
  { data: 'July', weight: '71.5' },
  { data: 'August', weight: '67' },
  { data: 'September', weight: '65' },
  { data: 'October', weight: '65' },
  { data: 'November', weight: '68' },
  { data: 'December', weight: '65' },
];

const ScaleChart = ({ dataFormat }) => {
  const [weight, setWeight] = useState([]);

  useEffect(() => {
    if (dataFormat) {
      setWeight(beckendArrayYear);
    }
    if (!dataFormat) {
      setWeight(beckendArrayMonth);
    }
  }, [dataFormat]);

  return (
    <List>
      {weight.map(({ data, weight }) => {
        const number = data.split('.').slice(0, 1);
        return (
          <Item key={data}>
            <WeightTitle>{weight}</WeightTitle>
            <DataTitle>{number}</DataTitle>
          </Item>
        );
      })}
    </List>
  );
};

export default ScaleChart;
