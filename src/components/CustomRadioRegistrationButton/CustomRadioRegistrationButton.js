import {
  LabelWithRadio,
  RadioInput,
  RadioMark,
} from './CustomRadioRegistrationButton.style';
import React from 'react';

const CustomRadioRegistrationButton = () => {
  return (
    <>
      <LabelWithRadio>
        <RadioInput
          type="radio"
        />
        <RadioMark></RadioMark>
      </LabelWithRadio>
    </>
  );
};

export default CustomRadioRegistrationButton;
