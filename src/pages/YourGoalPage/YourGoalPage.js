import React from 'react';
import { Link } from 'react-router-dom';
import {
  BackgroundContainer,
  GoalLogo,
  GoalContainer,
  GoalHeadline,
  GoalText,
  GoalForm,
  GoalButton,
  GoalInput,
} from './YourGoalPage.styled';
import GoalLogoPic from '../../images/YourGoalLogo.png';

const YourGoalPage = () => {
  return (
    <div>
      <BackgroundContainer>
        <GoalLogo src={GoalLogoPic} alt="Goal Logo" />
        <GoalContainer>
          <GoalHeadline>Your goal</GoalHeadline>
          <GoalText>Choose a goal so that we can help you effectively</GoalText>
          <div style={{ width: 254 }}>
            <GoalForm>
              <label
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 20,
                  fontFamily: 'Poppins',
                }}
              >
                <GoalInput type="radio" name="goal" value="Lose Fat" />
                Lose Fat
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
                <GoalInput type="radio" name="goal" value="Maintain" />
                Maintain
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
                <GoalInput type="radio" name="goal" value="Gain Muscle" />
                Gain Muscle
              </label>

              <Link style={{backgroundColor: '#E3FFA8', borderRadius: 12, width: 192, padding: 8, fontSize: 14, fontFamily: 'Poppins'}} to={'/select-gender'}>Next</Link>
            </GoalForm>
          </div>
        </GoalContainer>
      </BackgroundContainer>
    </div>
  );
};

export default YourGoalPage;
