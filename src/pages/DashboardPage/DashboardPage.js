import {
  DashboardContainer,
  HeaderBlock,
  MainHeader,
  SecondHeader,
  ChartsBlock,
  ChartsList,
  ChartsContainer,
  ChartsHeader,
  ChartsTitle,
  ChartsSubtitle,
  Charts,
  ScaleBlock,
  Scale,
} from './DashboardPage.styled';

import LineChart from 'components/Charts/LineChart';
// import ScaleChart from 'components/Charts/ScaleChart';

const Dashboard = () => {
  const calories = 1700;
  const water = 1600;
  const weight = 68;
  return (
    <DashboardContainer>
      <HeaderBlock>
        <MainHeader>Last month</MainHeader>
        <SecondHeader>November</SecondHeader>
      </HeaderBlock>
      <ChartsBlock>
        <ChartsList>
          <ChartsContainer>
            <ChartsHeader>Calories</ChartsHeader>
            <ChartsContainer>
              <ChartsTitle>Average value:</ChartsTitle>
              <ChartsSubtitle>{calories} kg</ChartsSubtitle>
            </ChartsContainer>
          </ChartsContainer>
          <Charts>
            <LineChart />
          </Charts>
        </ChartsList>
        <ChartsList>
          <ChartsContainer>
            <ChartsHeader>Water</ChartsHeader>
            <ChartsContainer>
              <ChartsTitle>Average value:</ChartsTitle>
              <ChartsSubtitle>{water} ml</ChartsSubtitle>
            </ChartsContainer>
          </ChartsContainer>
          <Charts>
            <LineChart />
          </Charts>
        </ChartsList>
      </ChartsBlock>
      <ScaleBlock>
        <ChartsContainer>
          <ChartsHeader>Weight</ChartsHeader>
          <ChartsContainer>
            <ChartsTitle>Average value:</ChartsTitle>
            <ChartsSubtitle>{weight} kg</ChartsSubtitle>
          </ChartsContainer>
        </ChartsContainer>
        <Scale>{/* <ScaleChart /> */}</Scale>
      </ScaleBlock>
    </DashboardContainer>
  );
};

export default Dashboard;
