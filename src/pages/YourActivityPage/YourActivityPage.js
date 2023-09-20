import React from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BackgroundContainer,
  YourActivityLogo,
  YourActivityContainer,
  YourActivityHeadline,
  YourActivityText,
  YourActivityForm,
  YourActivityButton,
  // YourActivityBackButton,
  YourActivityInput,
} from './YourActivityPage.styled';
import YourActivityBackButton from 'components/BackButtons/YourActivityBackButton/YourActivityBackButton';
import SelectGenderLogoPic from '../../images/YourActivityLogoPic.png';

const YourActivityPage = () => {
  const location = useLocation();
  const locationRef = useRef(location);
  return (
    <div>
      <BackgroundContainer>
        <YourActivityLogo src={SelectGenderLogoPic} alt="Select Gender Logo" />
        <YourActivityContainer>
          <YourActivityHeadline>Your Activity</YourActivityHeadline>
          <YourActivityText>
            To correctly calculate calorie and water intake
          </YourActivityText>
          <div style={{ width: 444 }}>
            <YourActivityForm>
              <label style={{ color: '#FFFF' }}>
                <YourActivityInput type="radio" name="goal" value="Lose Fat" />
                1.2 - if you do not have physical activity and sedentary work
              </label>
              <br />
              <label style={{ color: '#FFFF' }}>
                <YourActivityInput type="radio" name="goal" value="Maintain" />
                1,375 - if you do short runs or light gymnastics 1-3 times a
                week
              </label>
              <br />
              <label style={{ color: '#FFFF' }}>
                1.55 - if you play sports with average loads 3-5 times a week
                <YourActivityInput type="radio" name="goal" value="Maintain" />
              </label>

              <br />
              <label style={{ color: '#FFFF' }}>
                1,725 ​​- if you train fully 6-7 times a week
                <YourActivityInput type="radio" name="goal" value="Maintain" />
              </label>
              <br />
              <label style={{ color: '#FFFF' }}>
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
                <YourActivityInput type="radio" name="goal" value="Maintain" />
              </label>
              <br />
              <YourActivityButton>Next</YourActivityButton>
              <br />
              <YourActivityBackButton location={locationRef.current}/>
            </YourActivityForm>
          </div>
        </YourActivityContainer>
      </BackgroundContainer>
    </div>
  );
};

export default YourActivityPage;
