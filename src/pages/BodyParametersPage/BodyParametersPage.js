import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const locationRef = useRef(location);
  return (
    <div>
      <BackgroundContainer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>

        <BodyParametersContainer>
          <BodyParametersLogo
            src={BodyParametersLogoPic}
            alt="BodyParametersLogoPic"
          />
          <BodyParametersHeadline>Body parameters</BodyParametersHeadline>
          <BodyParametersText>
            Enter your parameters for correct performance tracking
          </BodyParametersText>
          <BodyParametersWrapper>
            <BodyParametersForm>
              <BodyParametersLabel>
                Height
                <BodyParametersInput placeholder="Enter your height" />
              </BodyParametersLabel>
              <BodyParametersLabel>
                Weight
                <BodyParametersInput placeholder="Enter your weight" />
              </BodyParametersLabel>
              <BodyParametersButton to={'/your-activity'}>
                Next
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
