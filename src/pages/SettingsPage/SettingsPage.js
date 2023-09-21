import React from 'react';

import {
  SettingsPageSection,
  SettingsPageContainer,
  // TopProfileSetting,
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
  LabelWithRadio,
  RadioInput,
  RadioMark,
  // CheckedRadioMark,
  H2,
} from './SettingsPage.style';

import setingsPage from '../../images/setings-page-png.png';
import downloadPhoto from '../../images/icons/download-new-photo.svg';
import CustomRadioButton from './components/CustomRadioButton';

const SettingsPage = () => {
  return (
    <>
      <SettingsPageSection>
        <SettingsPageContainer>
          {/* <TopProfileSetting> */}
          <H1>Profile setting</H1>
          <ButtonContainer>
            <CancelButton>Cancel</CancelButton>
            <SaveButton>Save</SaveButton>
          </ButtonContainer>
          {/* </TopProfileSetting> */}

          <MiddleProfileSetting>
            <Img src={setingsPage} alt="setings-page-png" width="536" />
            <Forms>
              <FormRow>
                <Label>
                  Your name <Input required />
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
                    for="photoInput"
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
                  Your age <Input required />
                </Label>
                <Label>
                  Gender
                  <GenderLabelRadio>
                    <LabelWithRadio>
                      <RadioInput type="radio" name="gender" value="male" />
                      <RadioMark />
                      Male
                    </LabelWithRadio>
                    <LabelWithRadio>
                      <RadioInput type="radio" name="gender" value="female" />
                      <RadioMark />
                      Female
                    </LabelWithRadio>
                  </GenderLabelRadio>
                </Label>
              </FormRow>
              <FormRow>
                <Label>
                  Height <Input required />
                </Label>
                <Label>
                  Weight <Input required />
                </Label>
              </FormRow>
              <H2>Your activity</H2>
              <SecondForm>
                <CustomRadioButton
                  id="activity1"
                  text="1.2 - if you do not have physical activity and sedentary work"
                />
                <CustomRadioButton
                  id="activity2"
                  text="1,375 - if you do short runs or light gymnastics 1-3 times a week"
                />
                <CustomRadioButton
                  id="activity2"
                  text="1,375 - if you do short runs or light gymnastics 1-3 times a week"
                />
                <CustomRadioButton
                  id="activity2"
                  text="1,375 - if you do short runs or light gymnastics 1-3 times a week"
                />
                <CustomRadioButton
                  id="activity2"
                  text="1,375 - if you do short runs or light gymnastics 1-3 times a week"
                />
                {/* <LabelWithRadio>
                <RadioInput type="radio" name="activity" />
                <RadioMark />
                1.2 - if you do not have physical activity and sedentary work
              </LabelWithRadio>
              <LabelWithRadio>
                <RadioInput type="radio" name="activity" />
                <RadioMark />
                1,375 - if you do short runs or light gymnastics 1-3 times a
                week
              </LabelWithRadio>
              <LabelWithRadio>
                <RadioInput type="radio" name="activity" />
                <RadioMark />
                1.55 - if you play sports with average loads 3-5 times a week
              </LabelWithRadio>
              <LabelWithRadio>
                <RadioInput type="radio" name="activity" />
                <RadioMark />
                1,725 - if you train fully 6-7 times a week
              </LabelWithRadio>
              <LabelWithRadio>
                <RadioInput type="radio" name="activity" />
                <RadioMark />
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </LabelWithRadio> */}
              </SecondForm>
            </Forms>
          </MiddleProfileSetting>
        </SettingsPageContainer>
      </SettingsPageSection>
    </>
  );
};

export default SettingsPage;
