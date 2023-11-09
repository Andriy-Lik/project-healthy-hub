import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
} from './YourGoalPage.styled';
import { LabelWithRadio, RadioMark, RadioInput  } from 'components/CustomRadioButton/CustomRadioButton.style';
import GoalLogoPic from '../../images/YourGoalLogo.png';

const YourGoalPage = () => {
  const dispatch = useDispatch();
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