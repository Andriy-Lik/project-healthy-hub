import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecommendedFoodSection = styled.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
    width: 100%;
    /* margin-top: 20px; */
  }

  @media screen and (min-width: 1440px) {
    display: inline-flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.poppins};
  color: ${props => props.theme.colors.white};
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const FoodCardsWrap = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SeeMoreButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-top: 16px;
`;
