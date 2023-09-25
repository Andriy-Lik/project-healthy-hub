import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackgroundContainer = styled.div`
  background-color: #050505;
  display: flex;

  @media (min-width: 320px) and (max-width: 833px) {
    display: block;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    display: block;
  }
`;

export const SignInLogo = styled.img`
  margin-left: 150px;
  margin-top: 40px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin: auto;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
    margin: auto;
  }
`;

export const SignInContainer = styled.div`
  max-width: 444px;
  margin-top: 120px;
  margin-left: 104px;
  display: block;

  @media (min-width: 320px) and (max-width: 833px) {
    margin: auto;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    margin: auto;
  }
`;

export const SignInHeadline = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  font-family: Poppins;
`;

export const SignInText = styled.p`
  color: #b6b6b6;
  font-weight: 400;
  font-size: 22px;
  margin-top: 16px;
  line-height: 32px;
`;

export const SignInFormWrapper = styled.div`
  width: 212px;
`;

export const SignInForm = styled.form`
  display: block;
  margin-top: 8px;
`;

export const SignInInput = styled.input`
  border: 1px solid #e3ffa8;
  border-radius: 12px;
  background-color: #0f0f0f;
  width: 212px;
  height: 36px;
  color: #b6b6b6;
  padding-left: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 8px;
  margin-top: 16px;
`;

export const SignInButton = styled.button`
  background-color: #e3ffa8;
  margin-top: 16px;
  border-radius: 12px;
  width: 212px;
  padding: 8px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  text-align: center;
`;

export const ForgotYourPassword = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #b6b6b6;
  background-color: #050505;
  border: none;
  margin-top: 20px;
  margin-left: 25px;
`;

export const SignUpSuggestionButtonWrapper = styled.div`
  display: 'flex';
  margintop: 212px;
  marginbottom: 60px;
`;

export const SignUpSuggestion = styled.p`
  color: #b6b6b6;
`;

export const SignUpLink = styled(Link)`
  margin-left: 16px;
  line-height: 20px;
  font-weight: 500;
  background-color: #050505;
  color: #ffffff;
  border: none;
`;
