import styled from "styled-components";
import { Form } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.black};

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin: 24px auto 20px;
    align-items: center;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 444px;
    margin: 40px auto 366px;
    align-items: center;
  }

  @media (min-width: 1440px) {
    width: 1140px;
    flex-direction: row;
    justify-content: space-between;
    margin: 40px auto 86px;
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
`;

export const ContentBox = styled.div`

  @media (min-width: 320px) and (max-width: 833px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 444px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    width: 444px;
    margin-top: 80px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-bottom: 16px;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.2;

  @media (min-width: 320px) and (max-width: 833px) {
    font-size: ${p => p.theme.fontSizes.l2};
    line-height: 1.25;
    text-align: center;
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
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.33;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    text-align: center;
  }
`;

export const GoalForm = styled(Form)` 
  margin-top: 0;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin-bottom: 24px;

  @media (min-width: 834px) and (max-width: 1439px)  {
    display: flex;
    justify-content: space-between;
    width: 380px;
    margin: 0 auto 24px;
  }
`

export const Item = styled.li`
  display: flex;
  color: ${p => p.theme.colors.white};

  @media (min-width: 320px) and (max-width: 833px) {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ItemText = styled.span`
  margin-left: 4px;
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;
`;

export const NextButton = styled.button`
  width: 300px;
  height: 36px;
  padding: 8px 10px;
  font-family: ${p => p.theme.fontFamily.poppins}
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.greenLite};

  @media (min-width: 834px) and (max-width: 1439px) {
    display: block;
    width: 380px;
    margin: 0 auto 20px;
  }

  @media (min-width: 1440px) {
    width: 212px;
  }
`;

export const BackButton = styled.button`
  color: ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.black};
  width: 192px;
  padding: 0;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;

  @media (min-width: 1440px) {
    margin-left: 10px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    margin: 0 auto;
  }
`;