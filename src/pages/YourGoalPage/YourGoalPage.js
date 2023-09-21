import React from 'react';
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
import CustomRadioButton from 'pages/SettingsPage/components/CustomRadioButton';
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
                  <GoalOption style={{ color: '#FFFF', marginBottom: 20 }}>
                    <CustomRadioButton />
                    Lose Fat
                  </GoalOption>
                </div>

                <div>
                  <GoalOption style={{ color: '#FFFF', marginBottom: 20 }}>
                    <CustomRadioButton />
                    Maintain
                  </GoalOption>
                </div>

                <div>
                  <GoalOption style={{ color: '#FFFF', marginBottom: 20 }}>
                    <CustomRadioButton />
                    Gain Muscles
                  </GoalOption>
                </div>
              </GoalList>

              <GoalButton to={'/select-gender'}>Next</GoalButton>
            </GoalForm>
          </div>
        </GoalContainer>
      </BackgroundContainer>
    </div>
  );
};

export default YourGoalPage;
