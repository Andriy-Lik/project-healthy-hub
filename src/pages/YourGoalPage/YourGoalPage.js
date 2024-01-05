import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewUserGoal } from 'redux/Auth/authSlice';
import { Formik } from 'formik';
// import * as yup from 'yup';
import {
  Container,
  Image,
  ContentBox,
  Title,
  Text,
  GoalForm,
  List,
  Item,
  ItemText,
  NextButton,
  BackButton,
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
      <Container>
        <Image src={GoalLogoPic} alt="Goal Logo" />
        <ContentBox>
          <Title>Your goal</Title>
          <Text>Choose a goal so that we can help you effectively</Text>
          <Formik>
            <GoalForm onSubmit={handleGoalResults}>
              <List>
                <Item>
                  <LabelWithRadio>
                    <RadioInput
                      type="radio"
                      name="answer"
                      value="Lose fat"
                      checked={goal === 'Lose fat'}
                      onChange={() => setGoal('Lose fat')}
                    />
                    <RadioMark />
                  </LabelWithRadio>
                  <ItemText>Lose fat</ItemText>
                </Item>
                
                <Item>
                  <LabelWithRadio>
                    <RadioInput
                      type="radio"
                      name="answer"
                      value="Maintain"
                      checked={goal === 'Maintain'}
                      onChange={() => setGoal('Maintain')}
                    />
                    <RadioMark />
                  </LabelWithRadio>
                  <ItemText>Maintain</ItemText>
                </Item>  
                
                <Item>
                  <LabelWithRadio>
                    <RadioInput
                      type="radio"
                      name="answer"
                      value="Gain muscle"
                      checked={goal === 'Gain muscle'}
                      onChange={() => setGoal('Gain muscle')}
                    />
                    <RadioMark />
                  </LabelWithRadio>
                  <ItemText>Gain muscle</ItemText>
                </Item>
              </List>
              <NextButton onClick={() => {navigate('/select-gender')}}>Next</NextButton>
            </GoalForm>
          </Formik>
          <BackButton  onClick={() => {navigate('/signup')}}>Back</BackButton>
        </ContentBox>
      </Container>
    </div>
  );
};

export default YourGoalPage;