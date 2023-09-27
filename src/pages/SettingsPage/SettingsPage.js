import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { updateUser } from '../../redux/Auth/authOperations';
import { selectUser } from '../../redux/Auth/authSelectors';

import {
  SettingsPageSection,
  SettingsPageContainer,
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
  AvaImg,
  H2,
} from './SettingsPage.style';

import setingsPage from '../../images/setings-page-png.png';
import downloadPhoto from '../../images/icons/download-new-photo.svg';
import CustomRadioButton from '../../components/CustomRadioButton/CustomRadioButton';

const SettingsPage = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUser);

  useEffect(() => {
    if (userProfile) {
      setFormData({
        name: userProfile.name || '',
        age: userProfile.age || '',
        gender: userProfile.gender || 'Male',
        height: userProfile.height || '',
        weight: userProfile.weight || '',
        activity: userProfile.activity || '1.2',
      });

      setInitialFormData({
        name: userProfile.name || '',
        age: userProfile.age || '',
        gender: userProfile.gender || 'Male',
        height: userProfile.height || '',
        weight: userProfile.weight || '',
        activity: userProfile.activity || '1.2',
      });
    }
  }, [userProfile]);

  const [formData, setFormData] = useState({
    name: '',
    avatarURL: null,
    age: '',
    gender: '',
    height: '',
    weight: '',
    activity: '',
  });

  const [initialFormData, setInitialFormData] = useState({
    name: '',
    avatarURL: null,
    age: '',
    gender: '',
    height: '',
    weight: '',
    activity: '',
  });

  const handleInputChange = e => {
    const { name, value, type, files } = e.currentTarget;
    const newValue = type === 'file' ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleRadioChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let hasErrors = false;

    if (
      !formData.name.trim() ||
      isNaN(formData.age) ||
      isNaN(formData.height) ||
      isNaN(formData.weight)
    ) {
      hasErrors = true;
      notifyError(
        'Please enter valid numeric values for age, height, and weight.'
      );
    }

    return !hasErrors;
  };

  const handleSaveClick = () => {
    if (validateForm()) {
      dispatch(updateUser(formData));
      notifySuccess('Profile saved successfully!');
    } else {
      notifyError('Form has validation errors');
    }
  };

  const handleCancelClick = () => {
    setFormData({ ...initialFormData });
    try {
      notifySuccess('Profile successfully reset to previous data!');
      dispatch(updateUser(initialFormData));
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
  };

  const notifySuccess = message => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const notifyError = message => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <>
      <SettingsPageSection>
        <ToastContainer />
        <SettingsPageContainer>
          <H1>Profile setting</H1>
          <ButtonContainer>
            <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
            <SaveButton onClick={handleSaveClick}>Save</SaveButton>
          </ButtonContainer>

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
                      alignItems: 'center',
                    }}
                  >
                    <AvaImg src={formData.avatarURL} alt="avatar" />
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
            </Forms>
          </MiddleProfileSetting>
        </SettingsPageContainer>
      </SettingsPageSection>
    </>
  );
};

export default SettingsPage;
