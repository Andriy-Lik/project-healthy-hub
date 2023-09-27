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
  CounerList,
  Couner,
} from './Food.styled';

import DoughnutForCalorie from 'components/Charts/DoughnutChartForCalorie';
import DoughnutChartForCarbonohidrates from 'components/Charts/DoughnutChartForCarbonohidrates';
import DoughnutChartForProtein from 'components/Charts/DoughnutChartForProtein';
import DoughnutChartForFat from 'components/Charts/DoughnutChartForFat';
import { selectUser } from 'redux/Auth/authSelectors';


const Food = () => {

  const userInfo = useSelector(selectUser);
  
  console.log("food_userInfo: ", userInfo)

  
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
              <CounerList>
                {/* лічильник мета для вуглеводів */}
                <Couner>Goal: <span>170</span></Couner>
                {/* лічильник залишилось для вуглеводів */}
                <Couner>left: <span>34</span></Couner>
              </CounerList>
            </CardText>
          </Card>
          <Card>
            <ChartBox>
              <DoughnutChartForProtein />
            </ChartBox>
            <CardText>
              <CardTitle>Protein</CardTitle>
              <CounerList>
                {/* лічильник мета для протеїнів */}
                <Couner>Goal: <span>127,5</span></Couner>
                {/* лічильник залишилось для протеїнів */}
                <Couner>left: <span>8</span></Couner>
              </CounerList>
            </CardText>
          </Card>
          <Card>
            <ChartBox>
              <DoughnutChartForFat />
            </ChartBox>
            <CardText>
              <CardTitle>Fat</CardTitle>
              <CounerList>
                {/* лічильник мета для жирів */}
                <Couner>Goal: <span>56</span></Couner>
                {/* лічильник залишилось для жирів */}
                <Couner>left: <span>11,2</span></Couner>
              </CounerList>
            </CardText>
          </Card>
        </CardList>
      </InfoBox>
    </Wrapper>
  );
};

export default Food;