import styled from 'styled-components';

export const LabelWithRadio = styled.label`
  display: flex;
  align-items: center;
`;

export const RadioMark = styled.span`
  width: 12px;
  height: 12px;
  border: 1px solid rgba(182, 182, 182, 1);
  border-radius: 50%;
  margin-right: 10px;
  position: relative;

  &:hover {
    border-color: ${props => props.theme.colors.greenLite};
  }

  &:after {
    content: '';
    width: 6px;
    height: 6px;
    background-color: ${props => props.theme.colors.yellow};
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RadioInput = styled.input`
  display: none;
  margin-right: 8px;

  &:checked + ${RadioMark} {
    &:after {
      opacity: 1;
    }
  }
`;
