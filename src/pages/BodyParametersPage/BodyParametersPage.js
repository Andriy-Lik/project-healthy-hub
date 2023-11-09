import { useRef } from 'react';
import { Link } from 'react-router-dom';
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
} from './BodyParametersPage.styled';
import BodyParametersBackButton from 'components/BackButtons/SelectGenderBackButton/BodyParametersBackButton/BodyParametersBackButton';
import BodyParametersLogoPic from '../../images/BodyParametersLogoPic.png';

const BodyParametersPage = () => {
  const dispatch = useDispatch();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleNewUserHeightWeightData = event => {
    event.preventDefault();
    console.log(`height: ${height}, weight: ${weight}`);
    dispatch(setNewUserHeight(height));
    dispatch(setNewUserWeight(weight));
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
              <BodyParametersButton type='submit'>
                <Link to={'/your-activity'}>
                  Next
                </Link>
              </BodyParametersButton>

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