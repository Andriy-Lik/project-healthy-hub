import React from 'react';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setNewUserActivity } from 'redux/Auth/authSlice';
import { register } from 'redux/Auth/authOperations';
import { selectUser } from 'redux/Auth/authSelectors';
import {
  BackgroundContainer,
  YourActivityLogo,
  YourActivityContainer,
  YourActivityHeadline,
  YourActivityText,
  YourActivityFormWrapper,
  YourActivityForm,
  YourActivityFormList,
  YourActivityFormListWrapper,
  YourActivityFormListOption,
  YourActivityButton,
  // YourActivityBackButton,
  // YourActivityInput,
} from './YourActivityPage.styled';
import YourActivityBackButton from 'components/BackButtons/YourActivityBackButton/YourActivityBackButton';
import CustomRadioRegistrationButton from 'components/CustomRadioRegistrationButton/CustomRadioRegistrationButton';
import SelectGenderLogoPic from '../../images/YourActivityLogoPic.png';

const YourActivityPage = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const [activity, setActivity] = useState('');
  const UserFinalData = {
    name: user.name,
    email: user.email,
    password: user.password,
    goal: user.goal,
    gender: user.gender,
    height: user.height,
    weight: user.weight,
    activity: user.activity
  }



  const handleActivityResults = async event => {
    event.preventDefault();
    dispatch(setNewUserActivity(activity));
    try {
      await dispatch(register({UserFinalData}));
    } catch (error) {
      alert('Registration error!')
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
                  <YourActivityLogo
            src={SelectGenderLogoPic}
            alt="Select Gender Logo"
          />
        <YourActivityContainer>

          <YourActivityHeadline>Your Activity</YourActivityHeadline>
          <YourActivityText>
            To correctly calculate calorie and water intake
          </YourActivityText>
          <YourActivityFormWrapper>
            <YourActivityForm onSubmit={handleActivityResults}>
              <YourActivityFormList>
                <YourActivityFormListWrapper>
                <input  type="radio" name="answer" value="1.2 - if you do not have physical activity and sedentary
                    work" checked={activity === "1.2 - if you do not have physical activity and sedentary work"} onChange={() => setActivity("1.2 - if you do not have physical activity and sedentary work")}/>
                  <CustomRadioRegistrationButton />
                  <YourActivityFormListOption style={{ color: '#FFFF', fontSize: 14 }}>

                    1.2 - if you do not have physical activity and sedentary
                    work
                  </YourActivityFormListOption>
                </YourActivityFormListWrapper>

                <YourActivityFormListWrapper>
                <input  type="radio" name="answer" value="1,375 - if you do short runs or light gymnastics 1-3 times a
                    week" checked={activity === "1,375 - if you do short runs or light gymnastics 1-3 times a week"} onChange={() => setActivity("1,375 - if you do short runs or light gymnastics 1-3 times aweek")}/>
                  <CustomRadioRegistrationButton />
                  <YourActivityFormListOption style={{ color: '#FFFF', fontSize: 14 }}>
                    1,375 - if you do short runs or light gymnastics 1-3 times a
                    week
                  </YourActivityFormListOption>
                </YourActivityFormListWrapper>


                <YourActivityFormListWrapper>
                <input  type="radio" name="answer" value="1.55 - if you play sports with average loads 3-5 times a
                    week" checked={activity === "1.55 - if you play sports with average loads 3-5 times a week"} onChange={() => setActivity("1.55 - if you play sports with average loads 3-5 times a week")}/>
                  <CustomRadioRegistrationButton />
                  <YourActivityFormListOption style={{ color: '#FFFF', fontSize: 14 }}>
                
                    1.55 - if you play sports with average loads 3-5 times a
                    week
                  </YourActivityFormListOption>
                </YourActivityFormListWrapper>


                <YourActivityFormListWrapper>
                <input  type="radio" name="answer" value="1,725 ​​- if you train fully 6-7 times a week" checked={activity === "1,725 ​​- if you train fully 6-7 times a week"} onChange={() => setActivity("1,725 ​​- if you train fully 6-7 times a week")}/>
                  <CustomRadioRegistrationButton />
                  <YourActivityFormListOption style={{ color: '#FFFF', fontSize: 14 }}>
                    1,725 ​​- if you train fully 6-7 times a week
                  </YourActivityFormListOption>
                </YourActivityFormListWrapper>

                <YourActivityFormListWrapper>
                <input  type="radio" name="answer" value="1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program" checked={activity === "1.9 - if your work is related to physical labor, you train times a day and include strength exercises in your training program"} onChange={() => setActivity("1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program")}/>
                  <CustomRadioRegistrationButton />
                  <YourActivityFormListOption style={{ color: '#FFFF', fontSize: 14 }}>
                    1.9 - if your work is related to physical labor, you train 2
                    times a day and include strength exercises in your training
                    program
                  </YourActivityFormListOption>
                </YourActivityFormListWrapper>
              </YourActivityFormList>
              <button type='submit'>Next</button>
              <YourActivityButton>Next</YourActivityButton>
              <br />
              <YourActivityBackButton location={locationRef.current} />
              
            </YourActivityForm>
          </YourActivityFormWrapper>
        </YourActivityContainer>
        <p style={{color: '#FFFF'}}>{user.password}</p>
      </BackgroundContainer>
    </div>
  );
};

export default YourActivityPage;
