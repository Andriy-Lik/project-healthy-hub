import React from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BackgroundContainer,
  SelectGenderLogo,
  SelectGenderContainer,
  SelectGenderHeadline,
  SelectGenderText,
  SelectGenderForm,
  SelectGenderButton,
  // SelectGenderBackButton,
  SelectGenderInput,
} from './SelectGenderPage.styled';
import SelectGenderBackButton from 'components/BackButtons/SelectGenderBackButton/SelectGenderBackButton';
import CustomRadioButton from 'pages/SettingsPage/components/CustomRadioButton';
import SelectGenderLogoPic from '../../images/SelectGenderLogoPic.png';

const SelectGenderPage = () => {
  const location = useLocation();
  const locationRef = useRef(location);

  return (
    <div>
      <BackgroundContainer>
        <SelectGenderLogo src={SelectGenderLogoPic} alt="Select Gender Logo" />
        <SelectGenderContainer>
          <SelectGenderHeadline>Select gender, Age</SelectGenderHeadline>
          <SelectGenderText>
            Choose a goal so that we can help you effectively
          </SelectGenderText>

          <div>
            <SelectGenderForm>
              <ul>
                <li style={{ color: '#FFFF', marginTop: 24, marginBottom: 12 }}>
                  Gender
                </li>
                <li style={{ color: '#FFFF' }}>
                  <CustomRadioButton />
                  Male
                </li>
                <li style={{ color: '#FFFF' }}>
                  <CustomRadioButton />
                  Female
                </li>
                <li style={{ color: '#FFFF', marginBottom: 12 }}>Your age</li>
                <SelectGenderInput
                  style={{
                    height: 36,
                    width: 212,
                    color: '#B6B6B6',
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 20,
                    paddingLeft: 10,
                  }}
                  placeholder="Enter your age"
                />
              </ul>

              <SelectGenderButton to={'/body-parameters'}>
                Next
              </SelectGenderButton>
              <SelectGenderBackButton location={locationRef.current} />
            </SelectGenderForm>
          </div>
        </SelectGenderContainer>
      </BackgroundContainer>
    </div>
  );
};

export default SelectGenderPage;
