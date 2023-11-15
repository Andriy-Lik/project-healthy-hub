import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { updateUser } from 'redux/Auth/authOperations';
import { selectUser } from 'redux/Auth/authSelectors';

import {
  SettingsPageSection,
  SettingsPageContainer,
  TitlePage,
  ButtonContainer,
  CancelButton,
  SaveButton,
  ProfileSettingsContainer,
  BannerThumb,
  Img,
  FormFormik,
  Label,
  Input,
  ErrorMsg,
  AvaImg,
  WrapperRadioButton,
  FormGroup,
  FormGroupLabel,
} from './SettingsPage.style';

import setingsPage from 'images/setings-page-png.png';
import downloadPhoto from 'images/icons/download-new-photo.svg';
import avatar from 'images/icons/profile-circle.svg';
import CustomRadioButton from 'components/CustomRadioButton/CustomRadioButton';

import { Formik } from 'formik';
import * as yup from 'yup';
import { getStats } from 'redux/Statistics/statisticsOperations';

const schema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .min(2, 'Name must be at least 2 characters long.')
    .max(50, 'Name must be no more than 50 characters.')
    .required('Name is required')
    .trim('Name cannot include leading and trailing spaces')
    .strict(true),
  age: yup
    .number()
    .min(18, 'Age must be at least 18 years old')
    .max(110, 'Age must be no more than 110 years old')
    .required('Age is required')
    .integer('Age must be an integer'),
  height: yup
    .number()
    .min(120, 'Height must be at least 120cm')
    .max(220, 'Height must be no more than 220cm')
    .required('Height is required')
    .integer('Height must be an integer'),
  weight: yup
    .number()
    .min(40, 'Weight must be at least 40kg')
    .max(200, 'Weight must be no more than 200kg')
    .required('Weight is required')
    .test('maxDigitsAfterDecimal', 'Must have 1 digits after decimal', number =>
      /^\d+(\.\d{1})?$/.test(number)
    ),
});

const SettingsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector(selectUser);

  const initialValues = {
    name: userProfile.name,
    age: userProfile.age,
    gender: userProfile.gender,
    height: userProfile.height,
    weight: userProfile.weight,
    activity: userProfile.activity.toString(),
  };

  const handleSaveClick = values => {
    dispatch(updateUser(values));
    dispatch(getStats('today'));
    navigate('/main');
  };

  ///////////////////////////////////////////////////////

  // const [formData, setFormData] = useState({
  //   name: userProfile.name,
  //   age: userProfile.age,
  //   gender: userProfile.gender,
  //   height: userProfile.height,
  //   weight: userProfile.weight,
  //   activity: userProfile.activity,
  // });

  // const handleInputChange = event => {
  //   const { name, value, type, files } = event.currentTarget;
  //   // const newValue = type === 'file' ? files[0] : value;

  //   setFormData(prevData => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleRadioChange = (name, value) => {
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const validateForm = () => {
  //   let hasErrors = false;

  //   if (
  //     !formData.name.trim() ||
  //     isNaN(formData.age) ||
  //     isNaN(formData.height) ||
  //     isNaN(formData.weight)
  //   ) {
  //     hasErrors = true;
  //     console.log(
  //       'Please enter valid numeric values for age, height, and weight.'
  //     );
  //   }

  //   return !hasErrors;
  // };

  // const handleSaveClick = event => {
  //   event.preventDefault();
  //   if (validateForm()) {
  //     dispatch(updateUser(formData));
  //     navigate('/main');
  //   } else {
  //     console.log('Form has validation errors');
  //   }
  // };

  const handleCancelClick = () => {
    navigate('/main');
    dispatch(getStats('today'));
  };

  return (
    <>
      <SettingsPageSection>
        <SettingsPageContainer>
          <TitlePage>Profile setting</TitlePage>

          <ProfileSettingsContainer>
            <BannerThumb>
              <Img src={setingsPage} alt="Banner setings page" />
            </BannerThumb>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSaveClick}
              validationSchema={schema}
            >
              {({ errors, touched, values }) => (
                <FormFormik>
                  <Label>
                    Your name
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                    <ErrorMsg name="name" component="div" />
                  </Label>

                  <Label>
                    Your photo
                    <input
                      type="file"
                      id="photoInput"
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                    <Label
                      htmlFor="photoInput"
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <AvaImg
                        src={userProfile.avatarURL || avatar}
                        alt="avatar"
                      />
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <img
                          src={downloadPhoto}
                          alt="Select File"
                          width="16"
                          height="16"
                        />
                        Download new photo
                      </div>
                    </Label>
                  </Label>

                  <Label>
                    Your age
                    <Input
                      type="number"
                      name="age"
                      placeholder="Enter your age"
                      required
                    />
                    <ErrorMsg name="age" component="div" />
                  </Label>

                  <FormGroup role="group" aria-labelledby="gender-head">
                    <FormGroupLabel id="gender-head">Gender</FormGroupLabel>
                    <WrapperRadioButton>
                      <CustomRadioButton
                        name="gender"
                        value="Male"
                        selectedValue={values.gender}
                        text="Male"
                      />
                      <CustomRadioButton
                        name="gender"
                        value="Female"
                        selectedValue={values.gender}
                        text="Female"
                      />
                    </WrapperRadioButton>
                  </FormGroup>

                  <Label>
                    Height
                    <Input
                      type="number"
                      name="height"
                      placeholder="Enter your height"
                      required
                    />
                    <ErrorMsg name="height" component="div" />
                  </Label>

                  <Label>
                    Weight
                    <Input
                      type="number"
                      name="weight"
                      placeholder="Enter your weight"
                      required
                    />
                    <ErrorMsg name="weight" component="div" />
                  </Label>

                  <FormGroup role="group" aria-labelledby="activity-head">
                    <FormGroupLabel id="activity-head">
                      Your activity
                    </FormGroupLabel>
                    <CustomRadioButton
                      name="activity"
                      value="1.2"
                      selectedValue={values.activity}
                      text="1.2 - if you do not have physical activity and sedentary work"
                    />
                    <CustomRadioButton
                      name="activity"
                      value="1.375"
                      selectedValue={values.activity}
                      text="1,375 - if you do short runs or light gymnastics 1-3 times a week"
                    />
                    <CustomRadioButton
                      name="activity"
                      value="1.55"
                      selectedValue={values.activity}
                      text="1.55 - if you play sports with average loads 3-5 times a week"
                    />
                    <CustomRadioButton
                      name="activity"
                      value="1.725"
                      selectedValue={values.activity}
                      text="1,725 - if you train fully 6-7 times a week"
                    />
                    <CustomRadioButton
                      name="activity"
                      value="1.9"
                      selectedValue={values.activity.toString()}
                      text="1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"
                    />
                  </FormGroup>

                  <ButtonContainer>
                    <SaveButton type="submit">Save</SaveButton>
                    <CancelButton type="button" onClick={handleCancelClick}>
                      Cancel
                    </CancelButton>
                  </ButtonContainer>
                </FormFormik>
              )}
            </Formik>
            {/* 
            <Form>
              <FormRow>
                <Label>
                  Your name
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Label>

                <Label>
                  Your photo
                  <Input
                    type="file"
                    id="photoInput"
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                  <Label
                    htmlFor="photoInput"
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <AvaImg
                      src={userProfile.avatarURL || avatar}
                      alt="avatar"
                    />
                    <img
                      src={downloadPhoto}
                      alt="Select File"
                      width="16"
                      height="16"
                    />
                    Download new photo
                  </Label>
                </Label>
              </FormRow>

              <FormRow>
                <Label>
                  Your age
                  <Input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </Label>

                <Label>
                  Gender
                  <GenderLabelRadio>
                    <CustomRadioButton
                      name="gender"
                      value="Male"
                      selectedValue={formData.gender}
                      onChange={() => handleRadioChange('gender', 'Male')}
                      text="Male"
                    />
                    <CustomRadioButton
                      name="gender"
                      value="Female"
                      selectedValue={formData.gender}
                      onChange={() => handleRadioChange('gender', 'Female')}
                      text="Female"
                    />
                  </GenderLabelRadio>
                </Label>
              </FormRow>

              <FormRow>
                <Label>
                  Height
                  <Input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    required
                  />
                </Label>
                <Label>
                  Weight
                  <Input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                  />
                </Label>
              </FormRow>

              <H2>Your activity</H2>
              <SecondForm>
                <CustomRadioButton
                  name={'activity'}
                  value={1.2}
                  selectedValue={formData.activity}
                  onChange={() => handleRadioChange('activity', 1.2)}
                  text={
                    '1.2 - if you do not have physical activity and sedentary work'
                  }
                />
                <CustomRadioButton
                  name={'activity'}
                  value={1.375}
                  selectedValue={formData.activity}
                  onChange={() => handleRadioChange('activity', 1.375)}
                  text={
                    '1,375 - if you do short runs or light gymnastics 1-3 times a week'
                  }
                />
                <CustomRadioButton
                  name={'activity'}
                  value={1.55}
                  selectedValue={formData.activity}
                  onChange={() => handleRadioChange('activity', 1.55)}
                  text={
                    '1.55 - if you play sports with average loads 3-5 times a week'
                  }
                />
                <CustomRadioButton
                  name={'activity'}
                  value={1.725}
                  selectedValue={formData.activity}
                  onChange={() => handleRadioChange('activity', 1.725)}
                  text={'1,725 - if you train fully 6-7 times a week'}
                />
                <CustomRadioButton
                  name={'activity'}
                  value={1.9}
                  selectedValue={formData.activity}
                  onChange={() => handleRadioChange('activity', 1.9)}
                  text={
                    '1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program'
                  }
                />
              </SecondForm>
            </Form> */}
          </ProfileSettingsContainer>

          {/* <ButtonContainerMobile>
            <SaveButton type="button" onClick={handleSaveClick}>
              Save
            </SaveButton>
            <CancelButton type="submit" onClick={handleCancelClick}>
              Cancel
            </CancelButton>
          </ButtonContainerMobile> */}
        </SettingsPageContainer>
      </SettingsPageSection>
    </>
  );
};

export default SettingsPage;
