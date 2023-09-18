import {
  DashboardSection,
  DashboardContainer,
  HeaderBlock,
  MainHeaderBlock,
  ArrowReturn,
  Header,
  ArrowDown,
  SecondHeader,
  TitleContainer,
  ChartsTitle,
  ChartsSubtitle,
  ChartsCaption,
  LineChartBlock,
  ChartGrid,
  Chart,
  ScaleChartBlock,
  Scale,
} from './DashboardPage.styled';

import arrowDown from '../../images/icons/arrow-down.svg';
import arrowRight from '../../images/icons/arrow-right.svg';
import LineChart from 'components/Charts/LineChart';
// import ScaleChart from 'components/Charts/ScaleChart';

const DashboardPage = () => {
  const calories = 1700;
  const water = 1600;
  const weight = 68;
  return (
    <DashboardSection>
      <DashboardContainer>
        <HeaderBlock>
          <MainHeaderBlock>
            <ArrowReturn src={arrowRight} alt="arrow right" />
            <Header>Last month</Header>
            <ArrowDown src={arrowDown} alt="arrow down" />
          </MainHeaderBlock>
          <SecondHeader>November</SecondHeader>
        </HeaderBlock>
        <LineChartBlock>
          <ChartGrid>
            <TitleContainer>
              <ChartsTitle>Calories</ChartsTitle>
              <ChartsSubtitle>Average value:</ChartsSubtitle>
              <ChartsCaption>{calories} kg</ChartsCaption>
            </TitleContainer>
            <Chart>
              <LineChart />
            </Chart>
          </ChartGrid>
          <ChartGrid>
            <TitleContainer>
              <ChartsTitle>Water</ChartsTitle>
              <ChartsSubtitle>Average value:</ChartsSubtitle>
              <ChartsCaption>{water} ml</ChartsCaption>
            </TitleContainer>
            <Chart>
              <LineChart />
            </Chart>
          </ChartGrid>
        </LineChartBlock>
        <ScaleChartBlock>
          <TitleContainer>
            <ChartsTitle>Weight</ChartsTitle>
            <ChartsSubtitle>Average value:</ChartsSubtitle>
            <ChartsCaption>{weight} kg</ChartsCaption>
          </TitleContainer>
          <Scale>jgjgjggjgjgjgjgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Scale>
        </ScaleChartBlock>
      </DashboardContainer>
    </DashboardSection>
  );
};

export default DashboardPage;