import styled from 'styled-components';

import LoseFatMen from '../../../images/icons/Lose-fat-image-men.svg';
import MaintakeMen from '../../../images/icons/Maintake-image-men.svg';
import muscle from '../../../images/icons/Gain-muscle.svg';

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  /* background-color: rgba(197, 197, 197, 0.2); */
  width: 100%;
  height: 100%;
  z-index: 5;
  @media screen and (${props => props.theme.mq.mobile}) {
    display: flex;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    display: flex;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    display: flex;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: ${div => div.theme.colors.black2};
  border-radius: ${div => div.theme.radii.normal};
  @media screen and (${props => props.theme.mq.mobile}) {
    right: 0;
    top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    right: 148px;
    width: 392px;
    top: 100px;
    padding-bottom: 0;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    right: 248px;
    width: 392px;
    top: 100px;
    padding-bottom: 0;
  }
`;

export const Modal = styled.div`
  @media screen and (${props => props.theme.mq.mobile}) {
    padding: 24px 10px 0 10px;
    width: 100vw;
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

export const ModalFormContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalLabel1 = styled.label`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  &:before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: '';
    width: 40px;
    height: 40px;
    border: 1px solid ${props => props.theme.colors.gray1};
    border-radius: ${props => props.theme.radii.normal};
    margin-right: 12px;
    background-image: url(${LoseFatMen});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const ModalLabel2 = styled.label`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  &:before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: '';
    width: 40px;
    height: 40px;
    border: 1px solid ${props => props.theme.colors.gray1};
    border-radius: ${props => props.theme.radii.normal};
    margin-right: 12px;
    background-image: url(${MaintakeMen});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const ModalLabel3 = styled.label`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  &:before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: '';
    width: 40px;
    height: 40px;
    border: 1px solid ${props => props.theme.colors.gray1};
    border-radius: ${props => props.theme.radii.normal};
    margin-right: 12px;
    background-image: url(${muscle});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const ModalInput1 = styled.input`
  display: none;
  &:checked + ${ModalLabel1} {
    color: ${props => props.theme.colors.violet};
    /* font-weight: bold; */
  }
  &:checked + ${ModalLabel1}:before {
    border-color: ${props => props.theme.colors.violet};
  }
`;

export const ModalInput2 = styled.input`
  display: none;
  &:checked + ${ModalLabel2} {
    color: ${props => props.theme.colors.violet};
    /* font-weight: bold; */
  }
  &:checked + ${ModalLabel2}:before {
    border-color: ${props => props.theme.colors.violet};
  }
`;

export const ModalInput3 = styled.input`
  display: none;
  &:checked + ${ModalLabel3} {
    color: ${props => props.theme.colors.violet};
    /* font-weight: bold; */
  }
  &:checked + ${ModalLabel3}:before {
    border-color: ${props => props.theme.colors.violet};
  }
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
