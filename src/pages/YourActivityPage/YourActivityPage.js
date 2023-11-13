import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
} from './YourActivityPage.styled';
import YourActivityBackButton from 'components/BackButtons/YourActivityBackButton/YourActivityBackButton';
import {
  LabelWithRadio,
  RadioInput,
  RadioMark,
} from 'components/CustomRadioButton/CustomRadioButton.style';
import SelectGenderLogoPic from '../../images/YourActivityLogoPic.png';

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
      <BackgroundContainer>
        <YourActivityLogo src={SelectGenderLogoPic} alt="Select Gender Logo" />
        <YourActivityContainer>
          <YourActivityHeadline>Your Activity</YourActivityHeadline>
          <YourActivityText>
            To correctly calculate calorie and water intake
          </YourActivityText>
          <YourActivityFormWrapper>
            <YourActivityForm onSubmit={handleActivityResults}>
              <YourActivityFormList>
                <YourActivityFormListWrapper>
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
                  <YourActivityFormListOption
                    style={{ color: '#FFFF', fontSize: 14 }}
                  >
                    1.2 - if you do not have physical activity and sedentary
                    work
                  </YourActivityFormListOption>
                </YourActivityFormListWrapper>

                <YourActivityFormListWrapper>
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
                  <YourActivityFormListOption
                    style={{ color: '#FFFF', fontSize: 14 }}
                  >
                    1,375 - if you do short runs or light gymnastics 1-3 times a
                    week
                  </YourActivityFormListOption>
                </YourActivityFormListWrapper>

                <YourActivityFormListWrapper>
                  <LabelWithRadio>
                    <RadioInput
                      type="radio"
                      name="answer"
                      checked={activity === '1.55'}
                      onChange={() => setActivity('1.55')}
                    />
                    <RadioMark></RadioMark>
                  </LabelWithRadio>
                  <YourActivityFormListOption
                    style={{ color: '#FFFF', fontSize: 14 }}
                  >
                    1.55 - if you play sports with average loads 3-5 times a
                    week
                  </YourActivityFormListOption>
                </YourActivityFormListWrapper>

                <YourActivityFormListWrapper>
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
                  <YourActivityFormListOption
                    style={{ color: '#FFFF', fontSize: 14 }}
                  >
                    1,725 ​​- if you train fully 6-7 times a week
                  </YourActivityFormListOption>
                </YourActivityFormListWrapper>

                <YourActivityFormListWrapper>
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
                  <YourActivityFormListOption
                    style={{ color: '#FFFF', fontSize: 14 }}
                  >
                    1.9 - if your work is related to physical labor, you train 2
                    times a day and include strength exercises in your training
                    program
                  </YourActivityFormListOption>
                </YourActivityFormListWrapper>
              </YourActivityFormList>
              <YourActivityButton type="submit">
                Next
              </YourActivityButton>
              <br />
              <YourActivityBackButton location={locationRef.current} />
            </YourActivityForm>
          </YourActivityFormWrapper>
        </YourActivityContainer>
      </BackgroundContainer>
    </div>
  );
};

export default YourActivityPage;