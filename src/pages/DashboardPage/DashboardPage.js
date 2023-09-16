import {
  DushboardContainer,
  HeaderBlock,
  MainHeader,
  SecondHeader,
  ChartsBlock,
  Li,
  ChartsContainer,
  ChartsHeader,
  ChartsTitle,
  ChartsSubtitle,
  Charts,
  ScaleBlock,
  Scale,
} from './DashboardPage.styled';

import LineChart from 'components/Charts/LineChart';

const Dashboard = () => {
  const calories = 1700;
  const water = 1600;
  const weight = 68;
  return (
    <DushboardContainer>
      <HeaderBlock>
        <MainHeader>Last month</MainHeader>
        <SecondHeader>November</SecondHeader>
      </HeaderBlock>
      <ChartsBlock>
        <Li>
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
        </Li>
        <Li>
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
        </Li>
      </ChartsBlock>
      <ScaleBlock>
        <ChartsContainer>
          <ChartsHeader>Weight</ChartsHeader>
          <ChartsContainer>
            <ChartsTitle>Average value:</ChartsTitle>
            <ChartsSubtitle>{weight} kg</ChartsSubtitle>
          </ChartsContainer>
        </ChartsContainer>
        <Scale />
      </ScaleBlock>
    </DushboardContainer>
  );
};

export default Dashboard;
