import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #050505;
  display: flex;

  @media (min-width: 320px) and (max-width: 833px) {
    flex-direction: column;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    flex-direction: column;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Image = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
    margin-bottom: 60px;
  }

  @media (min-width: 1440px) {
    width: 592px;
    margin: 40px 104px 72px 0;
  }
`;

export const ContentBox = styled.div`
  width: 444px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin: auto;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.2;

  @media (min-width: 320px) and (max-width: 833px) {
    font-size: ${p => p.theme.fontSizes.l2};
    line-height: 1.25;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    text-align: center;
    align-self: center;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;
  color: ${p => p.theme.colors.gray};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.45;

  @media (min-width: 320px) and (max-width: 833px) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.33;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    text-align: center;
  }
`;

export const FormWrapper = styled.div`

  @media (min-width: 320px) and (max-width: 833px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 222px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 184px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 212px;
  margin-bottom: 20px;
  padding: 7px 10px;
  color: ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.black2};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  border-radius: ${p => p.theme.radii.normal};

  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }
`;

export const FormButton = styled.button`
  width: 212px;
  margin-top: 20px;
  padding: 8px;
  background-color: ${p => p.theme.colors.greenLite};
  text-align: center;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.43;  

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }
`;

export const ForgotPasswordLink = styled(Link)`
  color: ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.black};
  border: none;
  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.43;
  
  
  @media (min-width: 320px) and (max-width: 833px) {
    text-align: center;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;

  @media (min-width: 320px) and (max-width: 833px) {
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
  }

  @media (min-width: 834px) {
    flex-direction: row;
  }
`;

export const SignUpText = styled.p`
  color: ${p => p.theme.colors.gray};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.43;

  @media (min-width: 320px) and (max-width: 833px) {
    margin-bottom: 16px;
  }

  @media (min-width: 834px) {
    margin-right: 16px;
  }
`;

export const SignUpLink = styled(Link)`
  background-color:${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};

  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.43;

  @media (min-width: 834px) {
    margin: 0;
  }
`;
