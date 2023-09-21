import React from 'react';
import { Link } from 'react-router-dom';
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
          <div>
            <GoalForm>
              <GoalList>
                <div>
                  <GoalOption style={{color: '#FFFF', marginBottom: 20}}>
                    <GoalInput type="radio" name="goal" value="Lose Fat" />
                    Lose Fat
                  </GoalOption>
                </div>

                <div>
                  <GoalOption style={{color: '#FFFF', marginBottom: 20}}>
                    <GoalInput type="radio" name="goal" value="Maintain" />
                    Maintain
                  </GoalOption>
                </div>

                <div>
                  <GoalOption style={{color: '#FFFF', marginBottom: 20}}>
                    <GoalInput type="radio" name="goal" value="Gain Muscle" />
                    Gain Muscles
                  </GoalOption>
                </div>
              </GoalList>

              <Link
                style={{
                  backgroundColor: '#E3FFA8',
                  borderRadius: 12,
                  width: 192,
                  padding: 8,
                  fontSize: 14,
                  fontFamily: 'Poppins',
                }}
                to={'/select-gender'}
              >
                Next
              </Link>
            </GoalForm>
          </div>
        </GoalContainer>
      </BackgroundContainer>
    </div>
  );
};

export default YourGoalPage;
