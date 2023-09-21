import styled from 'styled-components';

export const SettingsPageSection = styled.section`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};

  @media screen and (${props => props.theme.mq.mobile}) {
    padding-top: 16px;
    padding-bottom: 40px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    padding-top: 24px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    padding-top: 20px;
    padding-bottom: 56px;
  }
`;

export const SettingsPageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 320px;
    padding: 0 10px;
    flex-direction: column;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 834px;
    padding: 0 27px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;

export const TopProfileSetting = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  order: 1;
  @media screen and (${props => props.theme.mq.mobile}) {
    order: 1;
  }
`;

export const H1 = styled.h1`
  font-weight: ${props => props.theme.fontWeights.medium};

  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 30px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  }
`;

export const ButtonContainer = styled.div`
  @media screen and (${props => props.theme.mq.mobile}) {
    order: 3;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    order: 2;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    order: 2;
  }
`;

export const CancelButton = styled.button`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;

  width: 192px;
  padding: 8px 12px 8px 0;
  border: none;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background-color: ${props => props.theme.colors.greenLite};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;

  width: 212px;
  border-radius: ${props => props.theme.radii.normal};
  padding: 8px;
  cursor: pointer;
`;

export const MiddleProfileSetting = styled.div`
  display: flex;

  @media screen and (${props => props.theme.mq.mobile}) {
    flex-direction: column;
    order: 2;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: column;
    order: 3;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    order: 3;
  }
`;

export const Img = styled.img`
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 300px;
    margin: 0 auto;
    margin-bottom: 24px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
    margin: 0 auto;
    margin-bottom: 24px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 536px;
    margin-right: 160px;
  }
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (${props => props.theme.mq.mobile}) {
    margin: 0 auto;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 491px;
    margin: 0 auto;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 491px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media screen and (${props => props.theme.mq.mobile}) {
    flex-direction: column;
    gap: 40px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
    gap: 60px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    gap: 60px;
  }
`;

export const SecondForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};

  padding: 8px 10px 8px 10px;
  border-radius: ${props => props.theme.radii.normal};
  border: 1px solid rgba(182, 182, 182, 1);

  &:hover {
    border-color: ${props => props.theme.colors.greenLite};
  }

  @media screen and (${props => props.theme.mq.mobile}) {
    width: 300px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 212px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 212px;
  }
`;

export const GenderLabelRadio = styled.div`
  display: flex;
  gap: 16px;
`;

export const H2 = styled.h2`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 12px;
`;
