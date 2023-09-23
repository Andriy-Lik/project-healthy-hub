import {
  LabelWithRadio,
  RadioInput,
  RadioMark,
} from './CustomRadioButton.style';
import React from 'react';

const CustomRadioButton = ({ name, value, selectedValue, onChange, text }) => {
  return (
    <>
      <LabelWithRadio>
        <RadioInput
          type="radio"
          name={name}
          value={value}
          checked={selectedValue === value}
          onChange={() => onChange()}
        />
        <RadioMark></RadioMark>
        {text}
      </LabelWithRadio>
    </>
  );
};

export default CustomRadioButton;
