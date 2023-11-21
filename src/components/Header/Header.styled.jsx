import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.black2};
  
  @media screen and (${props => props.theme.mq.mobile}) {
    padding-top: 18px;
    padding-bottom: 18px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    padding-top: 26px;
    padding-bottom: 26px;
  } 
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const LogoBox = styled.div`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};

  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: ${props => props.theme.fontSizes.s};
    display: flex;
    align-items: center;
  }
`;

export const MenuBox = styled.div`
  margin-left: 8px;
  @media screen and (${props => props.theme.mq.tablet}) {
    display: none;
  }
`;

export const MenuImg = styled.img`
  width: 16px;
`;

export const Info = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 513px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 604px;
  }
`;

export const InfoOptions = styled.div`
  display: flex;
`;

export const InfoBlock = styled.div`
  background-color: inherit;
  border: none;
  cursor: pointer;

  @media screen and (${props => props.theme.mq.mobile}) {
    display: none;
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    display: flex;
    &:nth-child(1) {
      margin-right: 40px;
    }
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    display: flex;
    &:nth-child(1) {
      margin-right: 80px;
    }
  }
`;

export const IconContainer = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.01);
  border: 1px solid ${props => props.theme.colors.gray1};
  border-radius: ${div => div.theme.radii.normal};
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3px 0 3px 0;
`;

export const InfoBlockName = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const InfoBlockText = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  display: flex;
  align-items: center;
`;

export const ArrowSvg = styled.img`
  width: 14px;
  margin-left: 12px;
`;

export const WeightKg = styled.span`
  color: ${p => p.theme.colors.gray};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  margin-left: 4px;
  margin-right: 6px;
`;

export const EditSvg = styled.img`
  width: 16px;
`;

export const UserBlock = styled.div`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  display: flex;
  align-items: center;
`;

export const AvaImg = styled.img`
  width: 28px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: -8px;
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 24px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 28px;
  }
`;

export const Unauthorized = styled.div`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  display: flex;
  align-items: center;
  gap: 6px;
  @media screen and (${props => props.theme.mq.mobile}) {
    margin-right: 10px;
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    margin-right: 27px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    margin-right: 34px;
  }
`;

export const DefaultLink = styled(Link)`
  color: ${p => p.theme.colors.white};
`;

export const ActiveLink = styled(Link)`
  color: ${p => p.theme.colors.greenLite};
`;
