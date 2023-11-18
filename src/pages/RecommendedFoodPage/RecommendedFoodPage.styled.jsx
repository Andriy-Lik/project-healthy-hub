import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};

  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (${props => props.theme.mq.tablet}) {
    padding-top: 24px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    padding-top: 20px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;

export const HeaderPage = styled.header`
  display: flex;
  margin-bottom: 16px;
`;

export const BackLink = styled(NavLink)`
    display: flex;  
    margin-right: 8px;
 
  @media screen and (${props => props.theme.mq.tablet}) {
    margin-right: 12px;
  }
`;

export const ArrowReturn = styled.img`
  width: 16px;  
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 24px;
  }
`;

export const TitlePage = styled.h1`
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 30px;
  letter-spacing: 0em;

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

   @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`;

export const BannerThumb = styled.div`
  margin-bottom: 24px;
  width: 300px;
  height: 312px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
    height: 396px;   
  }
 
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 536px;
    height: 560px;
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const RecommendedFoodList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (${props => props.theme.mq.desktop}) {    
    width: calc((100% - 44px) / 2);
  }
`;
