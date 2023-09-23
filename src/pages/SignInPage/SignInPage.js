// import { Link } from "react-router-dom";
import {
  BackgroundContainer,
  SignInLogo,
  SignInContainer,
  SignInHeadline,
  SignInText,
  SignInFormWrapper,
  SignInForm,
  SignInInput,
  SignInButton,
  ForgotYourPassword,
  SignUpSuggestionButtonWrapper,
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

        <SignInContainer>
          <SignInLogo src={welcomeLogoPic} alt="Logo" />
          <SignInHeadline>Sign in</SignInHeadline>
          <SignInText>You need to login to use the service</SignInText>
          <SignInFormWrapper>
            <SignInForm>
              <SignInInput placeholder="E-mail" />
              <SignInInput placeholder="Password" />
              <SignInButton>Sign in</SignInButton>
              <ForgotYourPassword to={'/forgot-password'}>
                Forgot your password?
              </ForgotYourPassword>
            </SignInForm>
          </SignInFormWrapper>

          <SignUpSuggestionButtonWrapper>
            <SignUpSuggestion>
              If you don't have an account yet
            </SignUpSuggestion>
            <SignUpLink to={'/signup'}>Sign up</SignUpLink>
          </SignUpSuggestionButtonWrapper>
        </SignInContainer>
      </BackgroundContainer>
    </div>
  );
};
export default SignInPage;
