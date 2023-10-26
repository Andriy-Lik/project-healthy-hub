import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Image,
  ContentBox,
  Title,
  Text,
  BtnBox,
  BtnSignUp,
  BtnSignIn,
  List,
  Item,
  ItemImg,
  ItemText,
} from './WelcomePage.styled';
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';
import bullets from '../../images/WelcomePageImg/bullets.png';

const WelcomePage = () => {
  return (
    <Container>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
      </style>
      <Image src={welcomeLogoPic} alt="Reg Logo" />
      <ContentBox>
        <Title>Set goals and achieve them</Title>
        <Text>
          The service will help you set goals and follow them.
        </Text>

        <BtnBox>
          <BtnSignUp>
            <Link to={'/signin'}>
              Sign in
            </Link>
          </BtnSignUp>

          <BtnSignIn>
            <Link to={'/signup'}>
              Sign up
            </Link>
          </BtnSignIn>
        </BtnBox>

        <List>
          <Item>
            <ItemImg src={bullets} alt="bullets for list" />
            <ItemText>Set goals</ItemText>
          </Item>

          <Item>
            <ItemImg src={bullets} alt="bullets for list" />
            <ItemText>Watch your calories</ItemText>
          </Item>

          <Item>
            <ItemImg src={bullets} alt="bullets for list" />
            <ItemText>Keep track of your water intake</ItemText>
          </Item>

          <Item>
            <ItemImg src={bullets} alt="bullets for list" />
            <ItemText>Control your weight</ItemText>
          </Item>
        </List>
      </ContentBox>
    </Container>
  );
};

export default WelcomePage;