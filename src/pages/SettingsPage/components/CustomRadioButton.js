import {
  LabelWithRadio,
  RadioInput,
  RadioMark,
} from './CustomRadioButton.style';

const CustomRadioButton = ({ id, text }) => {
  return (
    <>
      <LabelWithRadio>
        <RadioInput id={id} />
        <RadioMark />
        {text}
      </LabelWithRadio>
    </>
  );
};

export default CustomRadioButton;
