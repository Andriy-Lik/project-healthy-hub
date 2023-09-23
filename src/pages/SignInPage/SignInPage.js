// import { Link } from "react-router-dom";
import {
  BackgroundContainer,
  SignInLogo,
  SignInContainer,
  SignInHeadline,
  SignInText,
  SignInForm,
  SignInInput,
  SignInButton,
  ForgotYourPassword,
  SignUpSuggestion,
  SignUpLink,
} from './SignInPage.styled';
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';

const SignInPage = () => {
  return (
    <div>
      <BackgroundContainer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>
        <SignInLogo src={welcomeLogoPic} alt="Logo" />
        <SignInContainer style={{ display: 'block' }}>
          <SignInHeadline>Sign in</SignInHeadline>
          <SignInText>You need to login to use the service</SignInText>
          <div style={{ width: 212 }}>
            <SignInForm>
              <SignInInput placeholder="E-mail" />
              <SignInInput placeholder="Password" />
              <SignInButton>Sign in</SignInButton>
              <ForgotYourPassword to={'/forgot-password'}>
                Forgot your password?
              </ForgotYourPassword>
            </SignInForm>
          </div>

          <div style={{ display: 'flex', marginTop: 212, marginBottom: 60 }}>
            <SignUpSuggestion>
              If you don't have an account yet
            </SignUpSuggestion>
            <SignUpLink to={'/signup'}>Sign up</SignUpLink>
          </div>
        </SignInContainer>
      </BackgroundContainer>
    </div>
  );
};
export default SignInPage;
