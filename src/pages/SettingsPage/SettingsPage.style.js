import styled from 'styled-components';

export const SettingsPageSection = styled.main`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};

  @media screen and (${props => props.theme.mq.mobile}) {
    padding-top: 16px;
    padding-bottom: 40px;
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    padding-top: 24px;
    padding-bottom: 40px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    padding-top: 20px;
  }
`;

export const SettingsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 10px;
  width: 320px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitlePage = styled.h1`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 30px;

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  }
`;

export const ButtonContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;

  @media screen and (${props => props.theme.mq.tablet}) {
    display: none;
  }
`;

export const ButtonContainerTablet = styled.div`
  display: none;

  @media screen and (${props => props.theme.mq.tablet}) {
    display: flex;
    gap: 12px;
  }
`;

export const CancelButton = styled.button`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;

  width: 100%;
  padding: 8px 12px;
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${props => props.theme.radii.normal};
  cursor: pointer;

  &:hover {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 212px;
  }
`;

export const SaveButton = styled.button`
  background-color: ${props => props.theme.colors.greenLite};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;

  width: 212px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  border-radius: ${props => props.theme.radii.normal};
  padding: 8px;
  cursor: pointer;

  @media screen and (max-width: 833px) {
    width: 100%;
  }
`;

export const ProfileSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (${props => props.theme.mq.tablet}) {
    margin-top: 20px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 100px;
    margin-top: 16px;
  }
`;

export const BannerThumb = styled.div`
  width: 300px;
  margin-bottom: 24px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 536px;
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (${props => props.theme.mq.tablet}) {
    padding: 0 144px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    padding: 0;
    width: calc((100% - 160px) / 2);
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
  border: 1px solid ${props => props.theme.colors.gray};

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

export const AvaImg = styled.img`
  width: 36px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const H2 = styled.h2`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 12px;
`;
