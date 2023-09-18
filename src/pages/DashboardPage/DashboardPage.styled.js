import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardSection = styled.section`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};

  @media screen and (${props => props.theme.mq.mobile}) {
    padding-top: 16px;
    padding-bottom: 60px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    padding-top: 24px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    padding-top: 20px;
    padding-bottom: 40px;
  }
`;

export const DashboardContainer = styled.div`
  margin: 0 auto;
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 320px;
    padding: 0 10px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 834px;
    padding: 0 27px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const MainHeaderBlock = styled.div`
  display: flex;
`;

export const BackLink = styled(NavLink)`
  display: flex;
  @media screen and (${props => props.theme.mq.mobile}) {
    margin-right: 8px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    margin-right: 12px;
  }
`;

export const ArrowReturn = styled.img`
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 16px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 24px;
  }
`;

export const Header = styled.h1`
  font-weight: ${props => props.theme.fontWeights.medium};

  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: 24px;
    line-height: 1.25;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.2;
  }
`;

export const Button = styled.button`
  margin-left: 12px;
  padding: 0;
  border: ${props => props.theme.borders.none};
  background-color: inherit;
`;

export const ArrowDown = styled.img`
  width: 16px;
`;

export const ArrowTop = styled.img`
  width: 16px;
  transform: rotate(180deg);
`;

export const ModalButton = styled.button`
  position: absolute;
  background-color: ${props => props.theme.colors.black2};
  border: ${props => props.theme.borders.none};
  color: white;
  padding: 16px 0 16px 12px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 4px 14px 0px #e3ffa833;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-weight: ${props => props.theme.fontWeights.regular};
  text-align: left;

  @media screen and (${props => props.theme.mq.mobile}) {
    display: none;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    display: inline-block;
    top: 164px;
    left: 63px;
    width: 212px;
    height: 64px;
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.45;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    top: 160px;
    left: 70px;
  }
`;

export const SecondHeader = styled.h3`
  font-weight: ${p => p.theme.fontWeights.medium};

  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.38;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.33;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 6px;
`;

export const ChartsTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.regular};
  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.44;
    margin-right: 58px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.45;
    margin-right: 40px;
  }
`;

export const ChartsSubtitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.43;
  margin-right: 8px;
`;

export const ChartsCaption = styled.span`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.43;
  color: ${props => props.theme.colors.gray};
`;

export const LineChartBlock = styled.div`
  display: flex;
  @media screen and (${props => props.theme.mq.mobile}) {
    flex-direction: column;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const ChartGrid = styled.div`
  @media screen and (${props => props.theme.mq.mobile}) {
    &:not(:last-child) {
      margin-bottom: 27px;
    }
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

export const Chart = styled.div`
  background-color: ${props => props.theme.colors.black2};
  border-radius: ${props => props.theme.radii.normal};
  height: 382px;
  @media screen and (${props => props.theme.mq.mobile}) {
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 780px;
    padding: 25px 31px 24px 14px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 676px;
    padding: 25px 20px 24px 14px;
  }
`;

export const ScaleChartBlock = styled.div`
  @media screen and (${props => props.theme.mq.mobile}) {
    margin-top: 27px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    margin-top: 40px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    margin-top: 20px;
  }
`;

export const Scale = styled.div`
  background-color: ${props => props.theme.colors.black2};
  border-radius: ${props => props.theme.radii.normal};
  height: 110px;

  @media screen and (${props => props.theme.mq.mobile}) {
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 780px;
    padding: 24px 20px 44px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1372px;
    padding: 24px 24px 36px;
  }
`;
