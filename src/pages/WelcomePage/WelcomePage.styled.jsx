import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackgroundContainer = styled.div`
  background-color: #050505;
  display: flex;

  @media (min-width: 320px) and (max-width: 833px) {
    display: block;
    margin: auto;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    display: block;
    margin: auto;
  }
`;

export const WelcomeLogo = styled.img`
  margin-left: 150px;
  margin-top: 40px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin: auto;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }
`;

export const PerksContainer = styled.div`
  max-width: 444px;
  margin-top: 120px;
  margin-left: 104px;
  @media (min-width: 320px) and (max-width: 833px) {
    margin: auto;
    padding-left: 10px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    margin: auto;
  }
`;

export const WelcomeHeadline = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  font-family: Poppins;
  @media (min-width: 834px) and (max-width: 1439px) {
    text-align: center;
  }
`;

export const WelcomeText = styled.p`
  color: #b6b6b6;
  font-weight: 400;
  font-size: 22px;
  margin-top: 16px;
  line-height: 32px;
`;

export const SignInActivated = styled.button`
  background-color: #e3ffa8;
  margin-top: 24px;
  border-radius: 12px;
  width: 192px;
  padding: 8px;
  font-size: 14px;
  font-family: Poppins;
`;

export const SignUpInactive = styled.button`
  background-color: #050505;
  border: none;
  font-size: 14px;
  color: #ffffff;
  margin-left: 16px;
`;

export const WelcomeNavigationsButtonList = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const WelcomeNavigationsButtonSignUp = styled(Link)`
background-color: '#E3FFA8',
margin-top: 24,
border-radius: 12,
width: 192,
padding: 8,
font-size: 14,
font-family: 'Poppins',
`;

export const WelcomeNavigationsButtonSignIn = styled(Link)`
background-color: '#050505',
border: 'none',
font-size: 14,
color: '#FFFFFF',
marginLeft: 16,
`;

export const WelcomePagePerksList = styled.ul`
  margin-top: 80px;
  @media (min-width: 834px) and (max-width: 1439px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const WelcomePagePerksWrapper = styled.div`
  display: flex;
`;

export const WelcomePagePerksListBullets = styled.img`
  height: 10px;
  margin-top: 5px;
`;

export const Perks = styled.li`
  color: #ffffff;
  margin-bottom: 42px;
  margin-left: 10px;

  @media (min-width: 320px) and (max-width: 833px) {
    padding-left: 10px;
    margin-bottom: 16px;
  }
`;
