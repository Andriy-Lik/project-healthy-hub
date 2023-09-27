import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setNewUserHeight, setNewUserWeight } from 'redux/Auth/authSlice';
import {
  BackgroundContainer,
  BodyParametersLogo,
  BodyParametersContainer,
  BodyParametersHeadline,
  BodyParametersText,
  BodyParametersWrapper,
  BodyParametersForm,
  BodyParametersLabel,
  BodyParametersInput,
  BodyParametersButton,
  // BodyParametersBackButton,
} from './BodyParametersPage.styled';
import BodyParametersBackButton from 'components/BackButtons/SelectGenderBackButton/BodyParametersBackButton/BodyParametersBackButton';
import BodyParametersLogoPic from '../../images/BodyParametersLogoPic.png';

const BodyParametersPage = () => {
  const dispatch = useDispatch();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const parsedHeight = parseFloat(height);
  const parsedWeight = parseFloat(weight);

  const handleNewUserHeightWeightData = event => {
    event.preventDefault();
    console.log(`height: ${height}, weight: ${weight}`);
    dispatch(setNewUserHeight(parsedHeight));
    dispatch(setNewUserWeight(parsedWeight));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'height') {
      setHeight(value);
    }
    else {
      setWeight(value);
    }
  }



  const location = useLocation();
  const locationRef = useRef(location);
  return (
    <div>
      <BackgroundContainer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>
          <BodyParametersLogo
            src={BodyParametersLogoPic}
            alt="BodyParametersLogoPic"
          />
        <BodyParametersContainer>

          <BodyParametersHeadline>Body parameters</BodyParametersHeadline>
          <BodyParametersText>
            Enter your parameters for correct performance tracking
          </BodyParametersText>
          <BodyParametersWrapper>
            <BodyParametersForm onSubmit={handleNewUserHeightWeightData}>
              <BodyParametersLabel>
                Height
                <BodyParametersInput placeholder="Enter your height" name='height' onChange={handleInputChange} />
              </BodyParametersLabel>
              <BodyParametersLabel>
                Weight
                <BodyParametersInput placeholder="Enter your weight" name='weight' onChange={handleInputChange} />
              </BodyParametersLabel>
              <BodyParametersButton type='submit'>Next</BodyParametersButton>
              {/* <BodyParametersButton to={'/your-activity'}>
                Next
              </BodyParametersButton> */}
            </BodyParametersForm>
          </BodyParametersWrapper>

          <div>
            <BodyParametersBackButton location={locationRef.current} />
          </div>
        </BodyParametersContainer>
      </BackgroundContainer>
    </div>
  );
};
export default BodyParametersPage;
