import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 518px;
  margin-right: 178px;
  margin-top: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const DiaryLink = styled(Link)`
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const CardsWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 518px;
`;
