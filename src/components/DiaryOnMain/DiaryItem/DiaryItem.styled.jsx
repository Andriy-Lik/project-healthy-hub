import styled from 'styled-components';

export const CardWrap = styled.li`
  @media screen and (${ p => p.theme.mq.tablet}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`;

export const TitleWrap = styled.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};  

  @media screen and (${ p => p.theme.mq.tablet}) {
    margin-bottom: 0px;
  }
`;

export const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 24px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 20px;

  @media screen and (${ p => p.theme.mq.tablet}) {
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const CarbonohidratesWrap = styled.p`
  min-width: 190px;
`;

export const ProteinWrap = styled.p`
  width: 110px;
`;

export const FatWrap = styled.p`
  width: 60px;
`;

export const Value = styled.span`
  color: ${props => props.theme.colors.gray};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const DiaryImage = styled.img`
  width: 36px;
  height: 36px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${props => props.theme.colors.greenLite};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`;
