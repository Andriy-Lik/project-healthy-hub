import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
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
