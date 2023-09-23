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
import CustomRadioRegistrationButton from 'components/CustomRadioRegistrationButton/CustomRadioRegistrationButton';
import GoalLogoPic from '../../images/YourGoalLogo.png';

const YourGoalPage = () => {
  return (
    <div>
      <BackgroundContainer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>

        <GoalContainer>
          <GoalLogo src={GoalLogoPic} alt="Goal Logo" />
          <GoalHeadline>Your goal</GoalHeadline>
          <GoalText>Choose a goal so that we can help you effectively</GoalText>
          <div>
            <GoalForm>
              <GoalList>
                <div>
                  <GoalOption
                    style={{
                      color: '#FFFF',
                      marginBottom: 20,
                      display: 'flex',
                    }}
                  >
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
                    <CustomRadioRegistrationButton />
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
