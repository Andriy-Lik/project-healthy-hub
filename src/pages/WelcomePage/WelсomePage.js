import React from 'react';
import {
  BackgroundContainer,
  WelcomeLogo,
  PerksContainer,
  WelcomeHeadline,
  WelcomeText,
  WelcomeNavigationsButtonList,
  WelcomeNavigationsButtonSignUp,
  WelcomeNavigationsButtonSignIn,
  // SignInActivated,
  // SignUpInactive,
  WelcomePagePerksList,
  WelcomePagePerksWrapper,
  WelcomePagePerksListBullets,
  Perks,
} from './WelcomePage.styled';
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';
import bullets from '../../images/welcome-page-perks-bullets.png';
// import SignInPage from 'pages/SignInPage';

const WelcomePage = () => {
  return (
    <BackgroundContainer>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
      </style>

      <PerksContainer>
        <WelcomeLogo src={welcomeLogoPic} alt="Reg Logo" />
        <WelcomeHeadline>Set goals and achieve them</WelcomeHeadline>
        <WelcomeText>
          The service will help you set goals and follow them.
        </WelcomeText>

        <WelcomeNavigationsButtonList>
          <WelcomeNavigationsButtonSignUp
            to={'/signin'}
          >
            Sign in
          </WelcomeNavigationsButtonSignUp>
          <WelcomeNavigationsButtonSignIn
            to={'/signup'}
          >
            Sign up
          </WelcomeNavigationsButtonSignIn>
        </WelcomeNavigationsButtonList>

        <WelcomePagePerksList>
          <WelcomePagePerksWrapper>
            <WelcomePagePerksListBullets
              src={bullets}
              alt="bullets for list"
            />
            <Perks>Set goals</Perks>
          </WelcomePagePerksWrapper>

          <WelcomePagePerksWrapper>
            <WelcomePagePerksListBullets
              src={bullets}
              alt="bullets for list"
            />
            <Perks>Watch your calories</Perks>
          </WelcomePagePerksWrapper>

          <WelcomePagePerksWrapper>
            <WelcomePagePerksListBullets
              src={bullets}
              alt="bullets for list"
            />
            <Perks>Keep track of your water intake</Perks>
          </WelcomePagePerksWrapper>

          <WelcomePagePerksWrapper>
            <WelcomePagePerksListBullets
              src={bullets}
              alt="bullets for list"
            />
            <Perks>Control your weight</Perks>
          </WelcomePagePerksWrapper>
        </WelcomePagePerksList>
      </PerksContainer>
    </BackgroundContainer>
  );
};

export default WelcomePage;
