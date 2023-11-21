import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: ${props => props.theme.colors.black2};
  border-radius: ${props => props.theme.radii.normal};
  @media screen and (${props => props.theme.mq.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    right: 148px;
    width: 392px;
    padding-bottom: 0;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    right: 248px;
    width: 392px;
    padding-bottom: 0;
  }
`;

export const Modal = styled.div`
  @media screen and (${props => props.theme.mq.mobile}) {
    padding: 24px 10px 0 10px;
    width: 300px;
    height: auto;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    padding: 20px 84px 40px 24px;
    width: 392px;
    height: auto;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    padding: 20px 84px 40px 24px;
    width: 392px;
    height: auto;
  }
`;

export const CloseBtn = styled.button`
  width: 16px;
  height: 16px;
  background: inherit;
  border: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 32px;
  top: 20px;
  cursor: pointer;
  @media screen and (${props => props.theme.mq.mobile}) {
    display: none;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    display: flex;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    display: flex;
  }
`;

export const ModalTitle = styled.h3`
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.m};
  margin-bottom: 8px;
`;

export const ModalText = styled.p`
  color: ${props => props.theme.colors.gray};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.xs};
  margin-bottom: 16px;
  @media screen and (${props => props.theme.mq.mobile}) {
    max-width: 284px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    max-width: none;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    max-width: none;
  }
`;

export const ModalForm = styled.form`
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 100%;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 166px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 166px;
  }
`;

export const TargetWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const TargetImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const ImgBorder = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  margin-right: 12px;
  border: 1px solid ${props => props.theme.colors.gray1};
  border-radius: ${props => props.theme.radii.normal};
`;

export const TargetText = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

export const ModalBtn = styled.button`
  height: 36px;
  width: 100%;
  border: none;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.greenLite};
  color: ${props => props.theme.colors.black2};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  &:hover {
    font-weight: ${props => props.theme.fontWeights.semiBold};
  }
`;

export const CancelBtn = styled.button`
  height: 20px;
  width: 192px;
  border: none;
  border-radius: ${props => props.theme.radii.normal};
  background-color: inherit;
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  margin-top: 24px;
  &:hover {
    font-weight: ${props => props.theme.fontWeights.medium};
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    display: none;
  }
`;
