import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  BackgroundContainer,
  SelectGenderLogo,
  SelectGenderContainer,
  SelectGenderHeadline,
  SelectGenderText,
  SelectGenderForm,
  // SelectGenderButton,
  // SelectGenderBackButton,
  SelectGenderInput,
} from './SelectGenderPage.styled';
import SelectGenderBackButton from 'components/BackButtons/SelectGenderBackButton/SelectGenderBackButton';
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

          <div style={{ width: 254 }}>
            <SelectGenderForm>
              <label
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 20,
                  fontFamily: 'Poppins',
                }}
              >
                <SelectGenderInput type="radio" name="goal" value="Lose Fat" />
                Male
              </label>

              <label
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 20,
                  fontFamily: 'Poppins',
                }}
              >
                <SelectGenderInput type="radio" name="goal" value="Maintain" />
                Female
              </label>

              <label style={{ color: 'white' }}>
                {' '}
                Your age
                <SelectGenderInput />
              </label>
              <Link style={{backgroundColor: '#E3FFA8', borderRadius: 12, width: 192, padding: 8, fontSize: 14, fontFamily: 'Poppins'}} to={'/body-parameters'}>Next</Link>
              <SelectGenderBackButton location={locationRef.current} />
            </SelectGenderForm>
          </div>
        </SelectGenderContainer>
      </BackgroundContainer>
    </div>
  );
};

export default SelectGenderPage;
