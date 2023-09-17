import styled from 'styled-components';

export const DashboardContainer = styled.div`
  background-color: ${props => props.theme.colors.black};

  @media screen and (${props => props.theme.mq.mobile}) {
    padding: 0 34px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    padding: 0 34px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    padding: 0 34px;
  }
`;

export const HeaderBlock = styled.div`
  @media screen and (${props => props.theme.mq.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${props => props.theme.fontFamily.poppins};
    color: ${props => props.theme.colors.white};
    padding-top: 20px;
  }
`;

export const MainHeader = styled.h1`
  @media screen and (${props => props.theme.mq.desktop}) {
    /* font-weight: ${props => props.theme.fontWeight.medium}; */
    font-weight: 500;
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.2;
  }
`;

export const SecondHeader = styled.h3`
  @media screen and (${props => props.theme.mq.desktop}) {
    font-weight: 500;
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const ChartsContainer = styled.div`
  @media screen and (${props => props.theme.mq.desktop}) {
    display: flex;
    align-items: baseline;
  }
`;

export const ChartsList = styled.li`
  list-style: none;
  @media screen and (${props => props.theme.mq.desktop}) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const ChartsHeader = styled.h2`
  font-family: ${props => props.theme.fontFamily.poppins};
  @media screen and (${props => props.theme.mq.desktop}) {
    font-size: ${props => props.theme.fontSizes.l};
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.colors.white};
    margin: 0 40px 0 0;
  }
`;

export const ChartsTitle = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};

  @media screen and (${props => props.theme.mq.desktop}) {
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: 1.4;
    color: ${props => props.theme.colors.white};
    margin: 0 8px 0 0;
  }
`;

export const ChartsSubtitle = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};
  @media screen and (${props => props.theme.mq.desktop}) {
    font-weight: 500;
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: 1.4;
    color: ${props => props.theme.colors.gray};
    margin: 0;
  }
`;

export const ChartsBlock = styled.div`
  @media screen and (${props => props.theme.mq.desktop}) {
    display: flex;
    margin-bottom: 20px;
  }
`;

export const Charts = styled.div`
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 676px;
    height: 382px;
    padding: 25px 20px 24px 14px;
    background-color: ${props => props.theme.colors.black2};
    border-radius: ${props => props.theme.radii.normal};
    margin-top: 6px;
  }
`;

export const ScaleBlock = styled.div`
  @media screen and (${props => props.theme.mq.desktop}) {
    padding-bottom: 40px;
  }
`;

export const Scale = styled.div`
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1372px;
    height: 110px;
    background-color: ${props => props.theme.colors.black2};
    border-radius: ${props => props.theme.radii.normal};
    padding: 24px 24px 36px;
    margin-top: 6px;
  }
`;
