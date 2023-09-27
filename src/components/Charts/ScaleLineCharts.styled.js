import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-weight: ${props => props.theme.fontWeights.regular};
  text-align: center;
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
