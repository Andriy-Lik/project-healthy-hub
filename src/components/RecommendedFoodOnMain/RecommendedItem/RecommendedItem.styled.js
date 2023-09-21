import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  column-gap: 20px;
  border-radius: 12px;
  padding: 20px 24px;
  flex-basis: calc((100% - 20px) / 2);

  background-color: ${props => props.theme.colors.black2};
`;

export const InfoWrap = styled.div`
  overflow: hidden;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-style: normal;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
  color: ${props => props.theme.colors.white};
`;

export const ValueWrap = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
`;

export const Calories = styled.p`
  font-weight: 500;
  margin-left: 6px;
  color: ${props => props.theme.colors.gray};
`;
