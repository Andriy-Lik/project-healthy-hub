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

          <div>
            <SelectGenderForm>
              <ul>
                <li style={{color: '#FFFF', marginTop: 24, marginBottom: 12}}>
                  Gender
                </li>
                <li style={{ color: '#FFFF'}}>
                  <SelectGenderInput type="radio" name="gender" value="Male" style={{marginRight: 8}} />
                  Male
                </li>
                <li style={{color: '#FFFF'}}>
                  <SelectGenderInput
                    type="radio"
                    name="gender"
                    value="Female"
                    style={{marginRight: 8}} 
                  />
                  Female
                </li>
                <li style={{color: '#FFFF', marginBottom: 12}}>Your age</li>
                <SelectGenderInput  style={{height:  36, width: 212, color: '#B6B6B6', fontSize: 14, fontWeight: 400, lineHeight: 20, paddingLeft: 10}} placeholder='Enter your age'/>
              </ul>

              <Link
                style={{
                  backgroundColor: '#E3FFA8',
                  borderRadius: 12,
                  width: 192,
                  padding: 8,
                  fontSize: 14,
                  fontFamily: 'Poppins',
                }}
                to={'/body-parameters'}
              >
                Next
              </Link>
              <SelectGenderBackButton location={locationRef.current} />
            </SelectGenderForm>
          </div>
        </SelectGenderContainer>
      </BackgroundContainer>
    </div>
  );
};

export default SelectGenderPage;
