import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 558px; 
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.black2};  
  border-radius: ${p => p.theme.radii.normal};  
  transform: translate(-50%, -50%) scale(1);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;

  @media screen and (${ p => p.theme.mq.tablet}) {
    width: 676px;
    height: 408px;
    padding: 24px;
  };
`;

export const ModalTitle = styled.h1`
  margin-bottom: 24px;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 30px;
  letter-spacing: 0em;  
  color: ${p => p.theme.colors.white};

  @media screen and (${ p => p.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  };
`;

export const WrapperFormTitle = styled.div`
  display: flex; 
  gap: 12px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 26px;
  letter-spacing: 0em;  
  color: ${p => p.theme.colors.white};
  
  @media screen and (${ p => p.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 32px;
  };
`;

export const FormFormic = styled(Form)`  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  max-height: 300px; 
  margin-bottom: 16px;

   @media screen and (${ p => p.theme.mq.tablet}) {
   max-height: 200px;
  };  
`

export const ProductList = styled.ul`
  padding: 6px;
  overflow-y: auto;
  height: calc(100% - 44px);
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (${ p => p.theme.mq.tablet}) {
    gap: 24px;
  };
  
  &::-webkit-scrollbar {
    width: 10px;  
  };

  &::-webkit-scrollbar-track {
    background-color: ${ p => p.theme.colors.gray};
    border-radius: ${ p => p.theme.radii.normal};
  };

  &::-webkit-scrollbar-thumb {
    background-color: ${ p => p.theme.colors.gray1};
    border-radius: ${ p => p.theme.radii.normal};
    border: 1px solid ${ p => p.theme.colors.gray};

    &:hover {
      background-color: ${ p => p.theme.colors.greenLite};
    }

  };
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (${ p => p.theme.mq.tablet}) {
    flex-direction: row;
  };

  & > div {
    width: 100%;

     @media screen and (${ p => p.theme.mq.tablet}) {
    width: calc((100% - 12px) / 5);
  };
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(Field)`  
  padding: 8px 10px;
  width: 100%;  
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.black2};  
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${p => p.theme.colors.white};  

  &::placeholder {
    color: ${p => p.theme.colors.gray};
  };
`;

export const ErrorMsg = styled(ErrorMessage)`
  padding: 0 5px;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 12px;
  letter-spacing: 0em;
  color: ${p => p.theme.colors.error};  
`;

export const BtnAddNewProduct = styled.button`
  border:  ${p => p.theme.borders.none};
  background-color: transparent;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;  
  color: ${p => p.theme.colors.greenLite};
  cursor: pointer; 
`;

export const ContainerForBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${ p => p.theme.mq.tablet}) {
    flex-direction: row-reverse;
  };
`;

export const BtnConfirm = styled.button`
  padding: 8px 10px;  
  width: 100%;
  background-color: ${p => p.theme.colors.greenLite};
  color: ${p => p.theme.colors.black2};
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.normal};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;

  @media screen and (${ p => p.theme.mq.tablet}) {
    width: 212px;
  };
`;

export const BtnCancel = styled.button`  
  padding: 8px 10px;
  width: 100%;
  background-color: transparent;  
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.normal};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${p => p.theme.colors.gray};
  cursor: pointer;

  &:hover {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  }

  @media screen and (${ p => p.theme.mq.tablet}) {
    width: 212px;
  };
`;

