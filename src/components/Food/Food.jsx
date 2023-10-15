import { useSelector } from 'react-redux';

import {
  Wrapper,
  Title,
  InfoBox,
  MainChartBox,
  CardList,
  Card,
  ChartBox,
  CardText,
  CardTitle,
  CounterList,
  Counter,
} from './Food.styled';

import DoughnutForCalorie from 'components/Charts/DoughnutChartForCalorie';
import DoughnutChartForCarbonohidrates from 'components/Charts/DoughnutChartForCarbonohidrates';
import DoughnutChartForProtein from 'components/Charts/DoughnutChartForProtein';
import DoughnutChartForFat from 'components/Charts/DoughnutChartForFat';
import { selectUser } from 'redux/Auth/authSelectors';


const Food = () => {
  
  const { carbohydrate, fat, protein} = useSelector(selectUser);
  
  return (
    <Wrapper>
      <Title>Food</Title>
      <InfoBox>
        <MainChartBox>
          <DoughnutForCalorie />
        </MainChartBox>
        <CardList>
          <Card>
            <ChartBox>
              <DoughnutChartForCarbonohidrates />
            </ChartBox>
            <CardText>
              <CardTitle>Carbonohidrates</CardTitle>
              <CounterList>
                {/* лічильник мета для вуглеводів */}
                <Counter>Goal: <span>{carbohydrate}</span></Counter>
                {/* лічильник залишилось для вуглеводів */}
                <Counter>left: <span>34</span></Counter>
              </CounterList>
            </CardText>
          </Card>
          <Card>
            <ChartBox>
              <DoughnutChartForProtein />
            </ChartBox>
            <CardText>
              <CardTitle>Protein</CardTitle>
              <CounterList>
                {/* лічильник мета для протеїнів */}
                <Counter>Goal: <span>{protein}</span></Counter>
                {/* лічильник залишилось для протеїнів */}
                <Counter>left: <span>8</span></Counter>
              </CounterList>
            </CardText>
          </Card>
          <Card>
            <ChartBox>
              <DoughnutChartForFat />
            </ChartBox>
            <CardText>
              <CardTitle>Fat</CardTitle>
              <CounterList>
                {/* лічильник мета для жирів */}
                <Counter>Goal: <span>{fat}</span></Counter>
                {/* лічильник залишилось для жирів */}
                <Counter>left: <span>11,2</span></Counter>
              </CounterList>
            </CardText>
          </Card>
        </CardList>
      </InfoBox>
    </Wrapper>
  );
};

export default Food;