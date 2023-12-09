import styled from 'styled-components';
import { Field, Form } from 'formik';
// import { Link } from 'react-router-dom';

export const BackgroundContainer = styled.div`
  background-color: #050505;
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 833px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    display: flex;
    flex-direction: center;
    margin: auto;
  }

  @media (min-width: 1439px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
  }
`;

export const BodyParametersLogo = styled.img`
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

export const BodyParametersContainer = styled.div`
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


export const BodyParametersHeadline = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  font-family: Poppins;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 100%;
    text-align: center;
    align-self: center;
    margin-top: 16px;
  }
`;

export const BodyParametersText = styled.p`
  color: #b6b6b6;
  font-weight: 400;
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 20px;
  line-height: 32px;
  width: 280px;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
    text-align: center;
    align-self: center;
    align-text: center;
  }

  @media (min-width: 1439px) {
    width: 460px;
  }
`;

export const BodyParametersWrapper = styled.div`
  width: 212px;
`;

export const BodyParametersForm = styled(Form)`
  display: block;
  margin-top: 8px;
  width: 280px;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 212px;
  }
`;

export const BodyParametersLabel = styled.label`
  color: #FFFF;
`;

export const BodyParametersInput = styled(Field)`
  border: 1px solid #e3ffa8;
  border-radius: 12px;
  background-color: #0f0f0f;
  width: 280px;
  height: 36px;
  color: #b6b6b6;
  padding-left: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 8px;
  margin-top: 16px;
  margin-bottom: 24px;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 212px;
  }
`;

export const BodyParametersButton = styled.button`
  background-color: #e3ffa8;
  text-align: center;
  margin-top: 16px;
  border-radius: 12px;
  width: 280px;
  padding: 8px;
  font-size: 14px;
  font-family: Poppins;
  margin-bottom: 20px;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 212px;
  }
`;

export const BodyParametersBackButton = styled.button`
  background-color: #050505;
  width: 212px;
  font-size: 14px;
  border: none;
  margin-top: 10px;
  color: #ffffff;
  text-align: center;
`;

export const SignInSuggestion = styled.p`
  color: #b6b6b6;
`;

export const SignInLink = styled.button`
  background-color: #050505;
  color: #ffffff;
  border: none;
`;
