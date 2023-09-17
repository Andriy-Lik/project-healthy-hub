// import { Link } from "react-router-dom";
import {
  BackgroundContainer,
  SignUpLogo,
  SignUpContainer,
  SignUpHeadline,
  SignUpText,
  SignUpForm,
  SignUpInput,
  SignUpButton,
  SignInSuggestion,
  SignInLink,
} from './SignUpPage.styled';
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';

const SignUpPage = () => {
  return (
    <div>
      <BackgroundContainer>
        <SignUpLogo src={welcomeLogoPic} alt="Logo" />
        <SignUpContainer style={{ display: 'block' }}>
          <SignUpHeadline>Sign up</SignUpHeadline>
          <SignUpText>You need to register to use the service</SignUpText>
          <div style={{width: 212}}>
            <SignUpForm>
              <SignUpInput placeholder="Name" />
              <SignUpInput placeholder="E-mail" />
              <SignUpInput placeholder="Password" />
              <SignUpButton>Sign Up</SignUpButton>
            </SignUpForm>
          </div>

          <div style={{ display: 'flex', marginTop: 200}}>
            <SignInSuggestion>Do you already have an account?</SignInSuggestion>
            <SignInLink>Sign in</SignInLink>
          </div>
        </SignUpContainer>
      </BackgroundContainer>
    </div>
  );
};
export default SignUpPage;
