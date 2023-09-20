import styled from 'styled-components';

// Стилізований компонент для контейнера з радіо кнопкою та текстом
export const LabelWithRadio = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer; /* Додати стилізацію курсору, щоб вказати на можливість вибору */
`;

// Стилізований компонент для радіо кнопки
export const RadioInput = styled.input.attrs({ type: 'radio' })`
  display: none; /* Приховати стандартний вигляд радіо кнопки */
`;

// Стилізований компонент для маркера радіо кнопки
export const RadioMark = styled.span`
  width: 12px;
  height: 12px;
  border: 1px solid rgba(182, 182, 182, 1);
  border-radius: 50%;
  margin-right: 10px;
  position: relative;

  &:hover {
    border-color: #e3ffa8;
  }

  /* Застосувати стилі, коли радіо кнопка вибрана */
  ${RadioInput}:checked + &::after {
    background-color: #e3ffa8;
  }

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    background-color: rgba(227, 255, 168, 1);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

// export const LabelWithCheckbox = styled.label`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;

// export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
//   display: none;

//   &:checked + ${CheckboxMark} {
//     background-color: #e3ffa8;
//     border-color: #e3ffa8;
//   }
// `;

// export const CheckboxMark = styled.span`
//   width: 12px;
//   height: 12px;
//   border: 1px solid rgba(182, 182, 182, 1);
//   border-radius: 3px; /* Змінив borderRadius для кращого вигляду */
//   margin-right: 10px;
//   position: relative;

//   &::after {
//     content: '';
//     width: 6px;
//     height: 6px;
//     background-color: transparent;
//     border-radius: 2px; /* Змінив borderRadius для кращого вигляду */
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// `;
