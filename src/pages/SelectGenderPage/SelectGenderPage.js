import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setNewUserAge, setNewUserGender } from 'redux/Auth/authSlice';
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
import { LabelWithRadio, RadioMark, RadioInput } from 'components/CustomRadioButton/CustomRadioButton.style';
import SelectGenderBackButton from 'components/BackButtons/SelectGenderBackButton/SelectGenderBackButton';
import SelectGenderLogoPic from '../../images/SelectGenderLogoPic.png';

const SelectGenderPage = () => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const parsedAge = parseInt(age, 10);

  const handleNewUserGenderAgeData = event => {
    event.preventDefault();
    console.log(`gender: ${gender}, age: ${age}`);
    dispatch(setNewUserGender(gender));
    dispatch(setNewUserAge(parsedAge));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'age') {
      setAge(value);
    }
  };
  const location = useLocation();
  const locationRef = useRef(location);

  return (
    <div>
      <BackgroundContainer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>
        <SelectGenderLogo src={SelectGenderLogoPic} alt="Select Gender Logo" />
        <SelectGenderContainer>
          <SelectGenderHeadline>Select gender, Age</SelectGenderHeadline>
          <SelectGenderText>
            Choose a goal so that we can help you effectively
          </SelectGenderText>

          <div>
            <SelectGenderForm
              onSubmit={handleNewUserGenderAgeData}
              autoComplete="off"
            >
              <ul>
                <li style={{ color: '#FFFF', marginTop: 24, marginBottom: 12 }}>
                  Gender
                </li>
                <li
                  style={{ color: '#FFFF', display: 'flex', marginBottom: 16 }}
                >
                  <LabelWithRadio>
                    <RadioInput
                      type="radio"
                      name="answer"
                      value="Male"
                      checked={gender === 'Male'}
                      onChange={() => setGender('Male')}
                    />
                    <RadioMark></RadioMark>
                  </LabelWithRadio>
                  Male
                </li>
                <li
                  style={{ color: '#FFFF', display: 'flex', marginBottom: 24 }}
                >
                  <LabelWithRadio>
                    <RadioInput
                      type="radio"
                      name="answer"
                      value="Female"
                      checked={gender === 'Female'}
                      onChange={() => setGender('Female')}
                    />
                    <RadioMark></RadioMark>
                  </LabelWithRadio>
                  Female
                </li>
                <li style={{ color: '#FFFF', marginBottom: 12 }}>Your age</li>
                <SelectGenderInput
                  style={{
                    height: 36,
                    color: '#B6B6B6',
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 20,
                    paddingLeft: 10,
                  }}
                  placeholder="Enter your age"
                  name="age"
                  onChange={handleInputChange}
                />
              </ul>
              {/* <SelectGenderButton>Next</SelectGenderButton> */}
              <SelectGenderButton type="submit">
                <Link to={'/body-parameters'}>Next</Link>
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
