import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setNewUserGoal } from 'redux/Auth/authSlice';
import {
  BackgroundContainer,
  GoalLogo,
  GoalContainer,
  GoalHeadline,
  GoalText,
  GoalForm,
  GoalList,
  GoalOption,
  GoalButton,
  // GoalInput,
} from './YourGoalPage.styled';
import CustomRadioRegistrationButton from 'components/CustomRadioRegistrationButton/CustomRadioRegistrationButton';
import GoalLogoPic from '../../images/YourGoalLogo.png';

const YourGoalPage = () => {
  const dispatch = useDispatch();
  const [goal, setGoal] = useState('');

  const handleGoalResults = event => {
    event.preventDefault();
    console.log(`Goal is ${goal}`);
    dispatch(setNewUserGoal(goal));
  };

  return (
    <div>
      <BackgroundContainer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>
          <GoalLogo src={GoalLogoPic} alt="Goal Logo" />
        <GoalContainer>

          <GoalHeadline>Your goal</GoalHeadline>
          <GoalText>Choose a goal so that we can help you effectively</GoalText>
          <div>
            <GoalForm onSubmit={handleGoalResults}>
              <GoalList>
                <div>
                  <GoalOption
                    style={{
                      color: '#FFFF',
                      marginBottom: 20,
                      display: 'flex',
                    }}
                  >
                    <input  type="radio" name="answer" value="Lose Fat" checked={goal === "Lose Fat"} onChange={() => setGoal("Lose Fat")}/>
                    <CustomRadioRegistrationButton />
                    Lose Fat
                  </GoalOption>
                </div>

                <div>
                  <GoalOption
                    style={{
                      color: '#FFFF',
                      marginBottom: 20,
                      display: 'flex',
                    }}
                  >
                    <input  type="radio" name="answer" value="Maintain" checked={goal === "Maintain"} onChange={() => setGoal("Maintain")}/>
                    
                  <CustomRadioRegistrationButton />
                    Maintain
                  </GoalOption>
                </div>

                <div>
                  <GoalOption
                    style={{
                      color: '#FFFF',
                      marginBottom: 20,
                      display: 'flex',
                    }}
                  >
                    <input  type="radio" name="answer" value="Gain Muscles" checked={goal === "Gain Muscles"} onChange={() => setGoal("Gain Muscles")}/>
                    <CustomRadioRegistrationButton name="answer" value="Gain Muscles"/>
                    Gain Muscles
                  </GoalOption>
                </div>
              </GoalList>
              <button type='submit'>Next</button>
                <GoalButton>
                  <Link to={'/select-gender'}>Next</Link>
                </GoalButton>

            </GoalForm>
          </div>
        </GoalContainer>
      </BackgroundContainer>
    </div>
  );
};

export default YourGoalPage;
