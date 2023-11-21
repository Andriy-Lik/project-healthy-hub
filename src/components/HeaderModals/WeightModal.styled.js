import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: ${div => div.theme.colors.black2};
  border-radius: ${div => div.theme.radii.normal};
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
    right: 36px;
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
    padding: 20px 24px 40px 24px;
    width: 392px;
    height: auto;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    padding: 20px 24px 40px 24px;
    width: 392px;
    height: auto;
  }
`;

export const CloseBtn = styled.button`
  background: inherit;
  border: none;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  position: absolute;
  right: 32px;
  top: 20px;
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
  color: ${h3 => h3.theme.colors.white};
  font-weight: ${h3 => h3.theme.fontWeights.medium};
  font-size: ${h3 => h3.theme.fontSizes.m};
  margin-bottom: 8px;
`;

export const ModalText = styled.p`
  color: ${p => p.theme.colors.gray};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  margin-bottom: 16px;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
`;

export const DateText = styled.p`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const DateDay = styled.p`
  color: ${p => p.theme.colors.gray};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const WeightForm = styled.form`
  @media screen and (${props => props.theme.mq.mobile}) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const WeightFormInput = styled.input`
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  &[type='number'],
  &[type='number']:hover,
  &[type='number']:focus {
    appearance: none;
    -moz-appearance: textfield;
  }

  height: 36px;
  border-radius: ${input => input.theme.radii.normal};
  border: 1px solid ${input => input.theme.colors.greenLite};
  background-color: ${input => input.theme.colors.black2};
  padding: 8px 10px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 100%;
    margin-bottom: 12px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 166px;
    margin-bottom: 0;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 166px;
    margin-bottom: 0;
  }
`;

export const WeightFormBtn = styled.button`
  height: 36px;
  border-radius: ${props => props.theme.radii.normal};
  border: none;
  background-color: ${props => props.theme.colors.greenLite};
  color: ${p => p.theme.colors.black2};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
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
