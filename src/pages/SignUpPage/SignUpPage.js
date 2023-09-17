// import { Link } from "react-router-dom";
import { BackgroundContainer, SignUpLogo, SignUpContainer, SignUpHeadline, SignUpText, SignUpForm, SignUpInput, SignUpButton, SignInSuggestion, SignInLink } from './SignUpPage.styled';
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';

const SignUpPage = () => {

    return (
      <div>
          <BackgroundContainer>
            <SignUpLogo src={welcomeLogoPic} alt='Logo' />
              <SignUpContainer>
                <SignUpHeadline>Sign up</SignUpHeadline>
                <SignUpText>You need to register to use the service</SignUpText>
                <SignUpForm>
                    <SignUpInput placeholder="  Name"/>
                    <br />
                    <SignUpInput placeholder="  E-mail"/>
                    <br />
                    <SignUpInput placeholder="  Password"/>
                    <br />
                    <SignUpButton>Sign Up</SignUpButton>
                </SignUpForm>

                <SignInSuggestion>Do you already have an account?</SignInSuggestion>
                <SignInLink>Sign in</SignInLink>
              </SignUpContainer>
          </BackgroundContainer>
      </div>
    )
  };
  export default SignUpPage;