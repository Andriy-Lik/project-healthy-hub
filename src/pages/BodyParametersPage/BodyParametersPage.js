import { Link } from "react-router-dom";
import {
  BackgroundContainer,
  BodyParametersLogo,
  BodyParametersContainer,
  BodyParametersHeadline,
  BodyParametersText,
  BodyParametersForm,
  BodyParametersInput,
  BodyParametersButton,
  BodyParametersBackButton,
} from './BodyParametersPage.styled';
import BodyParametersLogoPic from '../../images/BodyParametersLogoPic.png';

const BodyParametersPage = () => {
  return (
    <div>
      <BackgroundContainer>
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
              <Link style={{backgroundColor: '#E3FFA8', borderRadius: 12, width: 212, padding: 8, fontSize: 14, fontFamily: 'Poppins'}} to={'/your-activity'}>Next</Link>
            </BodyParametersForm>
          </div>

          <div>
            <BodyParametersBackButton>Back</BodyParametersBackButton>
          </div>
        </BodyParametersContainer>
      </BackgroundContainer>
    </div>
  );
};
export default BodyParametersPage;
