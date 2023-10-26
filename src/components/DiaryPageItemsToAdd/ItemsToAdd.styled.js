import styled from 'styled-components';

export const Card = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  color: ${props => props.theme.colors.white};

  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const CarbonohidratesWrap = styled.p`
  width: 164px;
`;

export const ProteinWrap = styled.p`
  width: 92px;
`;

export const FatWrap = styled.p`
  width: 66px;
`;

export const Value = styled.span`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
`;


