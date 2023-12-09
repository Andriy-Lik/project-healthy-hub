import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewUserGoal } from 'redux/Auth/authSlice';
import { Formik } from 'formik';
// import * as yup from 'yup';
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
} from './YourGoalPage.styled';
import { LabelWithRadio, RadioMark, RadioInput  } from 'components/CustomRadioButton/CustomRadioButton.style';
import GoalLogoPic from '../../images/YourGoalLogo.png';

const YourGoalPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [goal, setGoal] = useState('');

  const handleGoalResults = event => {
    event.preventDefault();
    console.log(`Goal: ${goal}`);
    dispatch(setNewUserGoal(goal));
  };

  return (
    <div>
      <BackgroundContainer>
        <GoalLogo src={GoalLogoPic} alt="Goal Logo" />
        <GoalContainer>
          <GoalHeadline>Your goal</GoalHeadline>
          <GoalText>Choose a goal so that we can help you effectively</GoalText>
          <div>
            <Formik>
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
                    <LabelWithRadio>
                      <RadioInput
                        type="radio"
                        name="answer"
                        value="Lose fat"
                        checked={goal === 'Lose fat'}
                        onChange={() => setGoal('Lose fat')}
                      />
                      <RadioMark></RadioMark>
                    </LabelWithRadio>
                    Lose fat
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
                    <LabelWithRadio>
                      <RadioInput
                        type="radio"
                        name="answer"
                        value="Maintain"
                        checked={goal === 'Maintain'}
                        onChange={() => setGoal('Maintain')}
                      />
                      <RadioMark></RadioMark>
                    </LabelWithRadio>
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
                    <LabelWithRadio>
                      <RadioInput
                        type="radio"
                        name="answer"
                        value="Gain muscle"
                        checked={goal === 'Gain muscle'}
                        onChange={() => setGoal('Gain muscle')}
                      />
                      <RadioMark></RadioMark>
                    </LabelWithRadio>
                    Gain muscle
                  </GoalOption>
                </div>
              </GoalList>
              <GoalButton onClick={() => {navigate('/select-gender')}}>
                Next
              </GoalButton>
            </GoalForm>
            </Formik>
          </div>
        </GoalContainer>
      </BackgroundContainer>
    </div>
  );
};

export default YourGoalPage;