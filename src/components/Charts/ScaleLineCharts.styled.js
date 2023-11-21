import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-weight: ${props => props.theme.fontWeights.regular};
  text-align: center;
  &:not(:last-child) {
    margin-right: 13px;
  }
`;

export const WeightTitle = styled.p`
  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 16px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: 10px;
    line-height: 1.6;
    margin-bottom: 12px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 16px;
  }
`;
export const DataTitle = styled.p`
  font-size: 10px;
  line-height: 1.4;
  color: ${props => props.theme.colors.gray};
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

export const Chart = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.black2};
  border-radius: ${props => props.theme.radii.normal};
  height: 382px;

  @media screen and (${props => props.theme.mq.mobile}) {
    width: 676px;
    padding: 25px 20px 24px 14px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 780px;
    padding: 25px 31px 24px 14px;

    & canvas {
      min-width: 750px;
      min-height: auto;
      margin: 0 auto;
    }
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 676px;
    padding: 25px 20px 24px 14px;
    & canvas {
      min-width: 640px;
      min-height: auto;
    }
  }
`;

export const ChartLabelBlock = styled.div`
  width: 90px;
  height: 76px;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  padding: 8px 6px;
  border-radius: 8px;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`;

export const ChartLabelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fontFamily.poppins};
  & > p {
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.medium};
    line-height: 1.19;
  }

  & > span {
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeights.regular};
    line-height: 1.43;
    color: ${props => props.theme.colors.gray};
  }
`;

export const Scale = styled.div`
  background-color: ${props => props.theme.colors.black2};
  border-radius: ${props => props.theme.radii.normal};
  height: 110px;

  @media screen and (${props => props.theme.mq.mobile}) {
    width: 1372px;
    padding: 24px 24px 36px;
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
