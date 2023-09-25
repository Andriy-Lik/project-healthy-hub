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

export const BodyParametersLogo = styled.img`
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

export const BodyParametersContainer = styled.div`
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

export const BodyParametersHeadline = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  font-family: Poppins;
`;

export const BodyParametersText = styled.p`
  color: #b6b6b6;
  font-weight: 400;
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 32px;
  line-height: 32px;
`;

export const BodyParametersWrapper = styled.div`
  width: 212px;
`;

export const BodyParametersForm = styled.form`
  display: block;
  margin-top: 8px;
`;

export const BodyParametersLabel = styled.label`
  color: '#FFFF';
`;

export const BodyParametersInput = styled.input`
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
  margin-bottom: 24px;
`;

export const BodyParametersButton = styled(Link)`
  background-color: #e3ffa8;
  border-radius: 12px;
  width: 212px;
  padding: 8px;
  font-size: 14px;
  font-family: Poppins;
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
