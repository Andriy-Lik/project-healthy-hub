import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BackgroundContainer,
  BodyParametersLogo,
  BodyParametersContainer,
  BodyParametersHeadline,
  BodyParametersText,
  BodyParametersForm,
  BodyParametersInput,
  BodyParametersButton,
  // BodyParametersBackButton,
} from './BodyParametersPage.styled';
import BodyParametersBackButton from "components/BackButtons/SelectGenderBackButton/BodyParametersBackButton/BodyParametersBackButton";
import BodyParametersLogoPic from '../../images/BodyParametersLogoPic.png';

const BodyParametersPage = () => {
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
        <BodyParametersContainer style={{ display: 'block' }}>
          <BodyParametersHeadline>Body parameters</BodyParametersHeadline>
          <BodyParametersText>
            Enter your parameters for correct performance tracking
          </BodyParametersText>
          <div style={{ width: 212 }}>
            <BodyParametersForm>
              <label style={{color: '#FFFF'}}>Height
                <BodyParametersInput placeholder="Enter your height" />
              </label>
              <label style={{color: '#FFFF'}}>Weight
                <BodyParametersInput placeholder="Enter your weight" />
              </label>
              <BodyParametersButton to={'/your-activity'}>Next</BodyParametersButton>
            </BodyParametersForm>
          </div>

          <div>
            <BodyParametersBackButton  location={locationRef.current}/>
          </div>
        </BodyParametersContainer>
      </BackgroundContainer>
    </div>
  );
};
export default BodyParametersPage;
