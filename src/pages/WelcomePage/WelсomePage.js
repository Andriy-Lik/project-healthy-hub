import React from 'react';
import { Link } from 'react-router-dom';
import {
  BackgroundContainer,
  WelcomeLogo,
  PerksContainer,
  WelcomeHeadline,
  WelcomeText,
  // SignInActivated,
  // SignUpInactive,
  WelcomePagePerksList,
  Perks,
} from './WelcomePage.styled';
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';
import bullets from '../../images/welcome-page-perks-bullets.png';
// import SignInPage from 'pages/SignInPage';

const WelcomePage = () => {
  return (
    <div>
      <BackgroundContainer>
        <WelcomeLogo src={welcomeLogoPic} alt="Reg Logo" />
        <PerksContainer>
          <WelcomeHeadline>Set goals and achieve them</WelcomeHeadline>
          <WelcomeText>
            The service will help you set goals and follow them.
          </WelcomeText>
          <Link style={{backgroundColor: '#E3FFA8', marginTop: 24, borderRadius: 12, width: 192, padding: 8, fontSize: 14, fontFamily: 'Poppins'}} to={'/signin'}>Sign in</Link>
          <Link style={{backgroundColor: '#050505', border: 'none', fontSize: 14, color: '#FFFFFF', marginLeft: 16}} to={'/signup'}>Sign up</Link>

          <WelcomePagePerksList>
            <div style={{ display: 'flex' }}>
              <img src={bullets} alt="bullets for list" style={{height: 10, marginTop: 5}} />
              <Perks>Set goals</Perks>
            </div>

            <div style={{ display: 'flex' }}>
              <img src={bullets} alt="bullets for list" style={{height: 10, marginTop: 5}}/>
              <Perks>Watch your calories</Perks>
            </div>

            <div style={{ display: 'flex' }}>
              <img src={bullets} alt="bullets for list" style={{height: 10, marginTop: 5}}/>
              <Perks>Keep track of your water intake</Perks>
            </div>

            <div style={{ display: 'flex' }}>
              <img src={bullets} alt="bullets for list"  style={{height: 10, marginTop: 5}}/>
              <Perks>Control your weight</Perks>
            </div>
          </WelcomePagePerksList>
        </PerksContainer>
      </BackgroundContainer>
    </div>
  );
};

export default WelcomePage;
