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
import {
  selectConsumedProteinPerDay,
  selectConsumedCarbonohidratesPerDay,
  selectConsumedFatPerDay
} from 'redux/Statistics/statisticsSelectors';
import { calcRemainder } from 'helpers/calculations';

const Food = () => {  
  const {
    carbohydrate: carbohydrateGoal,
    fat: fatGoal,
    protein: proteinGoal
  } = useSelector(selectUser);

  const consumedCarbonohidrates = useSelector(
    selectConsumedCarbonohidratesPerDay
  );
  const leftConsumedCarbonohidrates = calcRemainder(
    carbohydrateGoal,
    consumedCarbonohidrates
  );
  
  const consumedProtein = useSelector(selectConsumedProteinPerDay);
  const leftConsumedProtein = calcRemainder(
    proteinGoal,
    consumedProtein
  );

  const consumedFat = useSelector(selectConsumedFatPerDay);
  const leftConsumedFat = calcRemainder(
    fatGoal,
    consumedFat
  );
  
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
                <Counter>Goal: <span>{carbohydrateGoal}</span></Counter>
                {/* лічильник залишилось для вуглеводів */}
                <Counter>left: <span>{leftConsumedCarbonohidrates}</span></Counter>
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
                <Counter>Goal: <span>{proteinGoal}</span></Counter>
                {/* лічильник залишилось для протеїнів */}
                <Counter>left: <span>{leftConsumedProtein}</span></Counter>
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
                <Counter>Goal: <span>{fatGoal}</span></Counter>
                {/* лічильник залишилось для жирів */}
                <Counter>left: <span>{leftConsumedFat}</span></Counter>
              </CounterList>
            </CardText>
          </Card>
        </CardList>
      </InfoBox>
    </Wrapper>
  );
};

export default Food;