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
  width: 338px;
  height: 280px;
  padding: 16px 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${p => p.theme.colors.black2};
  border-radius: ${p => p.theme.radii.normal};  
  transform: translate(-50%, -50%) scale(1);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;
`;
export const Title = styled.h1`
  margin-bottom: 24px;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 36px;
  letter-spacing: 0em;  
  color: ${p => p.theme.colors.white};    
  color: ${p => p.theme.colors.white};  
`;

export const FormFormic = styled(Form)`  
  width: 212px;  
`;
export const Label = styled.label`
  
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;  
  color: ${p => p.theme.colors.white};  
`;

export const Input = styled(Field)`
  margin-top: 12px;
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
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ErrorMes = styled(ErrorMessage)`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${p => p.theme.colors.error};  
`;

export const Button = styled.button`
  margin-top: 16px;
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
`;

export const ButtonTwo = styled.button`
  margin-top: 8px;
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
`;

