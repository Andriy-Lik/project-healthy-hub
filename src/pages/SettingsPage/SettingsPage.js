import React, { useState, useEffect } from 'react';

import {
  SettingsPageSection,
  SettingsPageContainer,
  TopProfileSetting,
  H1,
  ButtonContainer,
  CancelButton,
  SaveButton,
  MiddleProfileSetting,
  Img,
  Forms,
  SecondForm,
  FormRow,
  Label,
  Input,
  GenderLabelRadio,
  H2,
} from './SettingsPage.style';

import setingsPage from '../../images/setings-page-png.png';
import downloadPhoto from '../../images/icons/download-new-photo.svg';
import CustomRadioButton from '../../components/CustomRadioButton/CustomRadioButton';

const SettingsPage = () => {
  const initialFormData = {
    name: '',
    photo: null,
    age: '',
    gender: 'male',
    height: '',
    weight: '',
    activity: 'activity1',
  };

  const [formData, setFormData] = useState(initialFormData);
  // const [formErrors, setFormErrors] = useState({});
  const [prevFormData, setPrevFormData] = useState(initialFormData);

  useEffect(() => {
    setPrevFormData(formData);
  }, []);

  const handleRadioChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    // const errors = {};
    let hasErrors = false;

    if (
      !formData.name.trim() ||
      !formData.age.trim() ||
      !formData.height.trim() ||
      !formData.weight.trim()
    ) {
      hasErrors = true;
    }

    // if (!formData.name.trim()) {
    //   errors.name = 'Please enter your name';
    //   hasErrors = true;
    // }

    // if (!formData.age.trim()) {
    //   errors.age = 'Please enter your age';
    //   hasErrors = true;
    // }

    // if (!formData.height.trim()) {
    //   errors.height = 'Please enter your height';
    //   hasErrors = true;
    // }

    // if (!formData.weight.trim()) {
    //   errors.weight = 'Please enter your weight';
    //   hasErrors = true;
    // }

    // setFormErrors(errors);

    return !hasErrors;
  };

  const handleInputChange = e => {
    const { name, value, type, files } = e.currentTarget;
    const newValue = type === 'file' ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSaveClick = () => {
    if (validateForm()) {
      console.log(formData);
    } else {
      console.log('Form has validation errors');
    }
  };

  const handleCancelClick = () => {
    setFormData(prevFormData);
  };

  return (
    <>
      <SettingsPageSection>
        <SettingsPageContainer>
          {/* <TopProfileSetting> */}
          <H1>Profile setting</H1>
          <ButtonContainer>
            <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
            <SaveButton onClick={handleSaveClick}>Save</SaveButton>
          </ButtonContainer>
          {/* </TopProfileSetting> */}

          <MiddleProfileSetting>
            <Img src={setingsPage} alt="setings-page-png" width="536" />
            <Forms>
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
                    }}
                  >
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
                      value="male"
                      selectedValue={formData.gender}
                      onChange={() => handleRadioChange('gender', 'male')}
                      text="Male"
                    />
                    <CustomRadioButton
                      name="gender"
                      value="female"
                      selectedValue={formData.gender}
                      onChange={() => handleRadioChange('gender', 'female')}
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
                  value={'activity1'}
                  selectedValue={formData.activity}
                  onChange={() => handleRadioChange('activity', 'activity1')}
                  text={
                    '1.2 - if you do not have physical activity and sedentary work'
                  }
                />
                <CustomRadioButton
                  name={'activity'}
                  value={'activity2'}
                  selectedValue={formData.activity}
                  onChange={() => handleRadioChange('activity', 'activity2')}
                  text={
                    '1,375 - if you do short runs or light gymnastics 1-3 times a week'
                  }
                />
                <CustomRadioButton
                  name={'activity'}
                  value={'activity3'}
                  selectedValue={formData.activity}
                  onChange={() => handleRadioChange('activity', 'activity3')}
                  text={
                    '1.55 - if you play sports with average loads 3-5 times a week'
                  }
                />
                <CustomRadioButton
                  name={'activity'}
                  value={'activity4'}
                  selectedValue={formData.activity}
                  onChange={() => handleRadioChange('activity', 'activity4')}
                  text={'1,725 - if you train fully 6-7 times a week'}
                />
                <CustomRadioButton
                  name={'activity'}
                  value={'activity5'}
                  selectedValue={formData.activity}
                  onChange={() => handleRadioChange('activity', 'activity5')}
                  text={
                    '1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program'
                  }
                />
              </SecondForm>
            </Forms>
          </MiddleProfileSetting>
        </SettingsPageContainer>
      </SettingsPageSection>
    </>
  );
};

export default SettingsPage;
