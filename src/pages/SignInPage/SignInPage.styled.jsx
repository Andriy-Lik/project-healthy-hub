import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackgroundContainer = styled.div`
  background-color: #050505;
  display: flex;
  margin: auto;

  @media (min-width: 320px) and (max-width: 833px) {
    flex-direction: column;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    flex-direction: center;
  }

  @media (min-width: 1439px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const SignInLogo = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1439px) {
    margin-right: 80px;
    margin-left: 0;
  }
`;

export const SignInContainer = styled.div`
  max-width: 444px;
  margin-top: 120px;
  margin-left: 104px;

  @media (min-width: 320px) and (max-width: 833px) {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1439px) {
    width: 444px;
    margin-left: 0;
    margin-right: 120px;
  }
`;

export const SignInHeadline = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  font-family: Poppins;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 100%;
    text-align: center;
    align-self: center;
  }
`;

export const SignInText = styled.p`
  color: #b6b6b6;
  font-weight: 400;
  font-size: 22px;
  margin-top: 16px;
  line-height: 32px;
  width: 280px;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 360px;
    text-align: center;
    align-self: center;
    align-text: center;
  }

  @media (min-width: 1439px) {
    width: 460px;
  }
`;

export const SignInFormWrapper = styled.div`
  width: 212px;
`;

export const SignInForm = styled.form`
  display: block;
  margin-top: 8px;
  margin-top: 8px;
  align-self: center;
  margin-right: auto;
  margin-left: auto;
  align-text: center;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }
`;

export const SignInInput = styled.input`
  border: 1px solid #e3ffa8;
  border-radius: 12px;
  background-color: #0f0f0f;
  width: 268px;
  height: 36px;
  color: #b6b6b6;
  padding-left: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 8px;
  margin-top: 16px;
  align-self: center;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }
`;

export const SignInButton = styled.button`
  background-color: #e3ffa8;
  text-align: center;
  margin-top: 16px;
  border-radius: 12px;
  width: 268px;
  padding: 8px;
  font-size: 14px;
  font-family: Poppins;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }
`;

export const ForgotYourPassword = styled.button `
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #b6b6b6;
  background-color: #050505;
  border: none;
  margin-top: 20px;
  margin-left: 40px;
  align-text: center;
  width: 192px;

  
  @media (min-width: 834px) and (max-width: 1439px) {
    margin-left: 110px;
  }
`;

export const SignUpSuggestionButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;

  @media (min-width: 834px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 60px;
  }
`;

export const SignUpSuggestion = styled.p`
  color: #b6b6b6;

  @media (min-width: 834px) {
    margin-right: 20px;
  }
`;

export const SignUpLink = styled(Link)`
  background-color: #050505;
  color: #ffffff;
  border: none;
  margin-top: 20px;
  margin-bottom: 40px;

  @media (min-width: 834px) {
    margin: 0;
  }
`;
