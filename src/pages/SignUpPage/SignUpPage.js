// import { Link } from "react-router-dom";
import {
  BackgroundContainer,
  SignUpLogo,
  SignUpContainer,
  SignUpHeadline,
  SignUpText,
  SignUpFormWrapper,
  SignUpForm,
  SignUpInput,
  SignUpButton,
  SignInSuggestionButtonWrapper,
  SignInSuggestion,
  SignInLink,
} from './SignUpPage.styled';
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';

const SignUpPage = () => {
  return (
    <div>
      <BackgroundContainer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>
        <SignUpContainer>
          <SignUpLogo src={welcomeLogoPic} alt="Logo" />
          <SignUpHeadline>Sign up</SignUpHeadline>
          <SignUpText>You need to register to use the service</SignUpText>
          <SignUpFormWrapper>
            <SignUpForm>
              <SignUpInput placeholder="Name" />
              <SignUpInput placeholder="E-mail" />
              <SignUpInput placeholder="Password" />
              <SignUpButton>Sign Up</SignUpButton>
            </SignUpForm>
          </SignUpFormWrapper>

          <SignInSuggestionButtonWrapper>
            <SignInSuggestion>Do you already have an account?</SignInSuggestion>
            <SignInLink to={'/signin'}>Sign in</SignInLink>
          </SignInSuggestionButtonWrapper>
        </SignUpContainer>
      </BackgroundContainer>
    </div>
  );
};
export default SignUpPage;
