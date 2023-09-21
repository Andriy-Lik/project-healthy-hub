import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import {
  DashboardSection,
  DashboardContainer,
  HeaderBlock,
  MainHeaderBlock,
  BackLink,
  ArrowReturn,
  Header,
  Button,
  ModalButton,
  ArrowDown,
  ArrowTop,
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

import Modal from '../../components/Modals/DashboardModal';
import arrowDown from '../../images/icons/arrow-down.svg';
import arrowRight from '../../images/icons/arrow-right.svg';
import LineChart from 'components/Charts/LineChart';
import ScaleChart from 'components/Charts/ScaleChart';

const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showYear, setShowYear] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '');

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const clickHandler = () => {
    toggleModal();
    setShowYear(showYear => !showYear);
  };

  const calories = 1700;
  const water = 1600;
  const weight = 68;
  return (
    <DashboardSection>
      <DashboardContainer>
        <HeaderBlock>
          <MainHeaderBlock>
            <BackLink to={backLinkLocationRef.current}>
              <ArrowReturn src={arrowRight} alt="arrow right" />
            </BackLink>
            <Header>{showYear ? 'Last year' : 'Last month'}</Header>
            <Button onClick={toggleModal}>
              {showModal ? (
                <ArrowTop src={arrowDown} alt="arrow top" />
              ) : (
                <ArrowDown src={arrowDown} alt="arrow down" />
              )}
            </Button>
            {showModal && (
              <Modal onCloseModal={toggleModal}>
                <ModalButton onClick={clickHandler}>
                  {showYear ? 'Last month' : 'Last year'}
                </ModalButton>
              </Modal>
            )}
          </MainHeaderBlock>
          <SecondHeader>{showYear ? '2023' : 'November'}</SecondHeader>
        </HeaderBlock>
        <LineChartBlock>
          <ChartGrid>
            <TitleContainer>
              <ChartsTitle>Calories</ChartsTitle>
              <ChartsSubtitle>
                Average value: <ChartsCaption>{calories} kg</ChartsCaption>
              </ChartsSubtitle>
            </TitleContainer>
            <Chart>
              <LineChart dataFormat={showYear} type={'calories'} />
            </Chart>
          </ChartGrid>
          <ChartGrid>
            <TitleContainer>
              <ChartsTitle>Water</ChartsTitle>
              <ChartsSubtitle>
                Average value: <ChartsCaption>{water} ml</ChartsCaption>
              </ChartsSubtitle>
            </TitleContainer>
            <Chart>
              <LineChart dataFormat={showYear} type={'water'} />
            </Chart>
          </ChartGrid>
        </LineChartBlock>
        <ScaleChartBlock>
          <TitleContainer>
            <ChartsTitle>Weight</ChartsTitle>
            <ChartsSubtitle>
              Average value: <ChartsCaption>{weight} kg</ChartsCaption>
            </ChartsSubtitle>
          </TitleContainer>
          <Scale>
            <ScaleChart dataFormat={showYear} />
          </Scale>
        </ScaleChartBlock>
      </DashboardContainer>
    </DashboardSection>
  );
};

export default DashboardPage;
