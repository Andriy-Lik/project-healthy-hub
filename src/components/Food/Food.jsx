import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/authSelectors';

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
import {
  selectConsumedProteinPerDay,
  selectConsumedCarbonohidratesPerDay,
  selectConsumedFatPerDay
} from 'redux/Statistics/statisticsSelectors';
import { calcRemainder, calcSurplus } from 'helpers/calculations';

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
  const excessConsumptionCarbonohidrates = calcSurplus(
    carbohydrateGoal,
    consumedCarbonohidrates
  );
  const warningCarbonohidrates = consumedCarbonohidrates > carbohydrateGoal;

  const consumedProtein = useSelector(selectConsumedProteinPerDay);
  const leftConsumedProtein = calcRemainder(
    proteinGoal,
    consumedProtein
  );
  const excessConsumptionProtein = calcSurplus(
    proteinGoal,
    consumedProtein
  );
  const warningProtein = consumedProtein > proteinGoal;

  const consumedFat = useSelector(selectConsumedFatPerDay);
  const leftConsumedFat = calcRemainder(
    fatGoal,
    consumedFat
  );
  const excessConsumptionFat = calcSurplus(
    fatGoal,
    consumedFat
  );
  const warningFat = consumedFat > fatGoal;
  
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
                <Counter>{warningCarbonohidrates ? "excess:" : "left:" } <span style={{color: `${warningCarbonohidrates && "#E74A3B"}`}}>{warningCarbonohidrates ? excessConsumptionCarbonohidrates : leftConsumedCarbonohidrates }</span></Counter>
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
                <Counter>{warningProtein ? "excess:" : "left:" } <span style={{color: `${warningProtein && "#E74A3B"}`}}>{warningProtein ? excessConsumptionProtein : leftConsumedProtein }</span></Counter>
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
                <Counter>{warningFat ? "excess:" : "left:" } <span style={{color: `${warningFat && "#E74A3B"}`}}>{warningFat ? excessConsumptionFat : leftConsumedFat }</span></Counter>
              </CounterList>
            </CardText>
          </Card>
        </CardList>
      </InfoBox>
    </Wrapper>
  );
};

export default Food;