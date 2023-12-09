import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Container = styled.div`
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

export const Image = styled.img`
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

export const ContentBox = styled.div`
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

export const Title = styled.h1`
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

export const Text = styled.p`
  color: #b6b6b6;
  font-weight: 400;
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 20px;
  line-height: 32px;
  width: 280px;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 310px;
    text-align: center;
    align-self: center;
    align-text: center;
  }

  @media (min-width: 1439px) {
    width: 310px;
  }
`;

export const Button = styled.button`
  background-color: #e3ffa8;
  text-align: center;
  margin-top: 16px;
  border-radius: 12px;
  width: 330px;
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

export const FormWrapper = styled.div`
  width: 328px;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 400px;
  }
`;

export const ActivityForm = styled(Form)`
  margin-top: 1px;
`;

export const FormList = styled.ul`
  color: #ffff;
`;

export const FormListWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const FormListOption = styled.li`
  color: #ffff;
  font-size: 14px;
`;

export const Input = styled(Field)`
  color: #ffffff;
  margin-bottom: 16px;
`;

export const YourActivityBackButton = styled.button`
  background-color: #050505;
  border: none;
  font-size: 14px;
  color: #ffffff;
  margin-left: 16px;
`;
