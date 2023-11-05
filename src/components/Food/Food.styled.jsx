import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`;

export const Title = styled.h2`  
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 24px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.white};  
`;

export const InfoBox = styled.div`
  padding: 16px 12px;
  background-color: ${props => props.theme.colors.black2};
  border-radius: ${props => props.theme.radii.normal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  flex-grow: 1;
  
  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  };
`;

export const MainChartBox = styled.div`
  width: 168px;
  height: 168px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  gap: 12px;
`;

export const Card = styled.li`
  display: flex;  
  align-items: center;
  gap: 12px;

`;

export const ChartBox = styled.div`
  width: 48px;
  height: 48px;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;  
  flex-basis: 160px;  
  gap: 2px;
`;

export const CardTitle = styled.h4`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 24px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.white}; 
 
`;

export const CounterList = styled.div`
  display: flex;
  flex-direction: row;  
  gap: 12px;
`;

export const Counter = styled.p`
  display: flex;
  gap: 2px;
  width: calc((100% - 12px) / 2);
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.white}; 

  & > span {
    /* display: inline-block;
    width: calc((50% - 12px) / 2); */
    color: ${props => props.theme.colors.gray}; 
  };
`; 