import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getStats } from '../../redux/Statistics/statisticsOperations';
import { selectStatsIsLoading } from '../../redux/Statistics/statisticsSelectors';
import Loader from '../../components/Loader';

import {
  DashboardSection,
  DashboardContainer,
  HeaderBlock,
  MainHeaderBlock,
  BackLink,
  ArrowReturn,
  Header,
  Button,
  ToggleButton,
  Arrow,
  SecondHeader,
  LineChartBlock,
  ChartGrid,
  ScaleChartBlock,
} from './DashboardPage.styled';

import arrowDown from '../../images/icons/arrow-down.svg';
import arrowRight from '../../images/icons/arrow-right.svg';
import LineChart from 'components/Charts/LineChart';
import ScaleChart from 'components/Charts/ScaleChart';
import { monthName } from '../../constants/monthName';

const DashboardPage = () => {
  const [showYear, setShowYear] = useState(false);
  const [timeToggleBtn, setTimeToggleBtn] = useState(false);
  const [period, setPeriod] = useState('month');

  const isLoading = useSelector(selectStatsIsLoading);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStats(period));
  }, [dispatch, period]);

  const toggleBtn = () => {
    setTimeToggleBtn(timeToggleBtn => !timeToggleBtn);
  };

  const handleChange = () => {
    setShowYear(showYear => !showYear);
    setPeriod(prevTime => (prevTime === 'month' ? 'year' : 'month'));
    toggleBtn();
  };

  const currentMonth = monthName.full[new Date().getMonth() + 1];
  const currentYear = new Date().getFullYear();

  return (
    <DashboardSection>
      <DashboardContainer>
        {isLoading && <Loader />}
        <HeaderBlock>
          <MainHeaderBlock>
            <BackLink
              onClick={() => dispatch(getStats('today'))}
              to={backLinkLocationRef.current}
            >
              <ArrowReturn src={arrowRight} alt="arrow right" />
            </BackLink>
            <Header>{showYear ? 'Last year' : 'Last month'}</Header>
            <Button onClick={toggleBtn}>
              <Arrow
                src={arrowDown}
                alt="arrow"
                style={{
                  transform: timeToggleBtn ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Button>
            {timeToggleBtn && (
              <ToggleButton onClick={handleChange}>
                {showYear ? 'Last month' : 'Last year'}
              </ToggleButton>
            )}
          </MainHeaderBlock>
          <SecondHeader>
            {showYear ? `${currentYear}` : `${currentMonth}`}
          </SecondHeader>
        </HeaderBlock>
        <LineChartBlock>
          <ChartGrid>
            <LineChart dataFormat={showYear} type={'calories'} />
          </ChartGrid>
          <ChartGrid>
            <LineChart dataFormat={showYear} type={'water'} />
          </ChartGrid>
        </LineChartBlock>
        <ScaleChartBlock>
          <ScaleChart dataFormat={showYear} />
        </ScaleChartBlock>
      </DashboardContainer>
    </DashboardSection>
  );
};

export default DashboardPage;
