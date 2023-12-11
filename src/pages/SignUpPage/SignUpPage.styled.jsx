import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field, Form } from 'formik';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto 60px;
  background-color: #050505;

  @media (min-width: 320px) and (max-width: 833px) {
    flex-direction: column;
    align-items: center;
    margin: 24px auto 40px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin-bottom: 24px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
    margin-bottom: 60px;
  }

  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-right: 104px;
    margin-bottom: 12px;
  }
`;

export const ContentBox = styled.div`
  width: 444px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 320px) and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  color: #ffffff;
  font-family: Poppins;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.2;

  @media (min-width: 320px) and (max-width: 833px) {
    text-align: center;
    font-size: 24px;
    line-height: 1.25;
  }
  
  @media (min-width: 834px) and (max-width: 1439px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  width: 444px;
  margin-bottom: 24px;
  color: #b6b6b6;
  font-family: Poppins;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.45;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    font-size: 18px;
    line-height: 1.33;
    text-align: center;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    text-align: center;
  }

  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) and (max-width: 1439px) {
    align-self: center;
  }
`;

export const Input = styled(Field)`
  width: 300px;
  height: 36px;
  margin-bottom: 20px;
  padding: 10px 8px;
  border: 1px solid #e3ffa8;
  border-radius: 12px;
  background-color: #0f0f0f;
  color: #b6b6b6;

  &:nth-child(3) {
    margin-bottom: 40px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    width: 212px;
  }
`;

export const FormButton = styled.button`
  padding: 8px;
  text-align: center;
  background-color: #e3ffa8;
  border-radius: 12px;

  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin-bottom: 48px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
    margin-bottom: 206px;
  }

  @media (min-width: 1440px) {
    width: 212px;
    margin-bottom: 168px;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 320px) and (max-width: 833px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    justify-content: center;
  }
`;

export const QuestionText = styled.p`
  color: #b6b6b6;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;

  @media (min-width: 320px) and (max-width: 833px) {
    margin-bottom: 16px;
  }

  @media (min-width: 834px) {
    margin-right: 20px;
  }
`;

export const SignInLink = styled(Link)`
  background-color: #050505;
  color: #ffffff;
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  border: none;
`;