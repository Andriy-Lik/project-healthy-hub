import {
  LabelWithRadio,
  RadioInput,
  RadioMark,
} from './CustomRadioButton.style';
import React from 'react';

const CustomRadioButton = ({ name, value, selectedValue, text }) => {
  return (
    <>
      <LabelWithRadio>
        <RadioInput
          type="radio"
          name={name}
          value={value}
          checked={selectedValue === value}
        />
        <RadioMark />
        {text}
      </LabelWithRadio>
    </>
  );
};

export default CustomRadioButton;
