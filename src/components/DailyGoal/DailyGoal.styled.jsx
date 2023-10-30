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

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px; 
`;

export const CardTitle = styled.h4`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 24px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.gray};  
`;

export const Counter = styled.p`
  display: flex;
  gap: 4px;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 34px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: 38px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.white};
  
  & > span:not(:first-child) {
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.gray};
  }  
`;

