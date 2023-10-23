import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`;

export const Title = styled.h3`  
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
  gap: 20px;
  flex-grow: 1;
`;

export const Card = styled.div`
  display: flex;
  gap: 20px;   
`;

export const WaterTracker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 6px;
  width: 80px;
  height: 192px;
  padding: 8px;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.black};
  border: ${props => props.theme.borders.normal} ${props => props.theme.colors.gray1};
  border-radius: ${props => props.theme.radii.normal};   
`;

export const CounterOfConsumedWaterInPercentage = styled.span`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: 22px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.violet};
`;

export const Chart = styled.span`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.violet};  
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;  
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardTitle = styled.h4`
  margin-bottom: 12px;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 22px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.white};
`;

export const CounterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

   @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
`;

export const CounterOfConsumedWaterInMl = styled.p`
  display: flex;
  gap: 8px;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 28px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 34px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.white};

  & > span {
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.gray};
  } 
`;

export const CounterOfWaterLeftToDrinkInMl = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.gray};
  
  & > span {
    color: ${props => props.theme.colors.white};
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.greenLite};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.black2};
  cursor: pointer;
`;

