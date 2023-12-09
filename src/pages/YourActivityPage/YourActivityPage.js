import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setNewUserActivity } from 'redux/Auth/authSlice';
import { register } from 'redux/Auth/authOperations';
import { selectUser } from 'redux/Auth/authSelectors';
import { Formik } from 'formik';
import {
  Container,
  Image,
  ContentBox,
  Title,
  Text,
  FormWrapper,
  ActivityForm,
  FormList,
  FormListWrapper,
  FormListOption,
  Button,
} from './YourActivityPage.styled';
import BackButton from 'components/BackButtons/YourActivityBackButton/YourActivityBackButton';
import {
  LabelWithRadio,
  RadioInput,
  RadioMark,
} from 'components/CustomRadioButton/CustomRadioButton.style';
import LogoPic from '../../images/YourActivityLogoPic.png';

const YourActivityPage = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const [activity, setActivity] = useState('');
  const name = user.name;
  const email = user.email;
  const password = user.password;
  const goal = user.goal;
  const gender = user.gender;
  const age = user.age;
  const height = user.height;
  const weight = user.weight;

  const handleActivityResults = async event => {
    event.preventDefault();
    console.log(`activity: ${activity}`);
    dispatch(setNewUserActivity(activity));
    dispatch(
      register({
        name,
        email,
        password,
        goal,
        age,
        gender,
        height,
        weight,
        activity,
      })
    );
  };

  const location = useLocation();
  const locationRef = useRef(location);
  return (
    <div>
      <Container>
        <Image src={LogoPic} alt="Select Gender Logo" />
        <ContentBox>
          <Title>Your Activity</Title>
          <Text>
            To correctly calculate calorie and water intake
          </Text>
          <FormWrapper>
            <Formik>
              <ActivityForm onSubmit={handleActivityResults}>
                <FormList>
                  <FormListWrapper>
                    <LabelWithRadio>
                      <RadioInput
                        type="radio"
                        name="answer"
                        value="1.2"
                        checked={activity === '1.2'}
                        onChange={() => setActivity('1.2')}
                      />
                      <RadioMark></RadioMark>
                    </LabelWithRadio>
                    <FormListOption
                      style={{ color: '#FFFF', fontSize: 14 }}
                    >
                      1.2 - if you do not have physical activity and sedentary
                      work
                    </FormListOption>
                  </FormListWrapper>

                  <FormListWrapper>
                    <LabelWithRadio>
                      <RadioInput
                        type="radio"
                        name="answer"
                        value="1.375"
                        checked={activity === '1.375'}
                        onChange={() => setActivity('1.375')}
                      />
                      <RadioMark></RadioMark>
                    </LabelWithRadio>
                    <FormListOption
                      style={{ color: '#FFFF', fontSize: 14 }}
                    >
                      1,375 - if you do short runs or light gymnastics 1-3 times a
                      week
                    </FormListOption>
                  </FormListWrapper>

                  <FormListWrapper>
                    <LabelWithRadio>
                      <RadioInput
                        type="radio"
                        name="answer"
                        checked={activity === '1.55'}
                        onChange={() => setActivity('1.55')}
                      />
                      <RadioMark></RadioMark>
                    </LabelWithRadio>
                    <FormListOption
                      style={{ color: '#FFFF', fontSize: 14 }}
                    >
                      1.55 - if you play sports with average loads 3-5 times a
                      week
                    </FormListOption>
                  </FormListWrapper>

                  <FormListWrapper>
                    <LabelWithRadio>
                      <RadioInput
                        type="radio"
                        name="answer"
                        value="1.725"
                        checked={activity === '1.725'}
                        onChange={() => setActivity('1.725')}
                      />
                      <RadioMark></RadioMark>
                    </LabelWithRadio>
                    <FormListOption
                      style={{ color: '#FFFF', fontSize: 14 }}
                    >
                      1,725 ​​- if you train fully 6-7 times a week
                    </FormListOption>
                  </FormListWrapper>

                  <FormListWrapper>
                    <LabelWithRadio>
                      <RadioInput
                        type="radio"
                        name="answer"
                        value="1.9"
                        checked={activity === '1.9'}
                        onChange={() => setActivity('1.9')}
                      />
                      <RadioMark></RadioMark>
                    </LabelWithRadio>
                    <FormListOption
                      style={{ color: '#FFFF', fontSize: 14 }}
                    >
                      1.9 - if your work is related to physical labor, you train 2
                      times a day and include strength exercises in your training
                      program
                    </FormListOption>
                  </FormListWrapper>
                </FormList>
                <Button type="submit">
                  Next
                </Button>
                <br />
                <BackButton location={locationRef.current} />
              </ActivityForm>
            </Formik>
          </FormWrapper>
        </ContentBox>
      </Container>
    </div>
  );
};

export default YourActivityPage;