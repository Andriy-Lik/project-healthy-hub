// import { Link } from "react-router-dom";
import {
  BackgroundContainer,
  ForgotPasswordLogo,
  ForgotPasswordContainer,
  ForgotPasswordHeadline,
  ForgotPasswordText,
  ForgotPasswordFormWrapper,
  ForgotPasswordForm,
  ForgotPasswordInput,
  ForgotPasswordButton,
  ForgotPasswordButtonWrapper,
  SignInSuggestion,
  SignInLink,
} from './ForgotPasswordPage.styled';
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';

const ForgotPasswordPage = () => {
  return (
    <div>
      <BackgroundContainer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>

          <ForgotPasswordLogo src={welcomeLogoPic} alt="Logo" />
        <ForgotPasswordContainer>

          <ForgotPasswordHeadline>Forgot your password</ForgotPasswordHeadline>
          <ForgotPasswordText>
            We will send you an email with recovery instructions
          </ForgotPasswordText>
          <ForgotPasswordFormWrapper>
            <ForgotPasswordForm>
              <ForgotPasswordInput placeholder="E-mail" />
              <ForgotPasswordButton>Send</ForgotPasswordButton>
            </ForgotPasswordForm>
          </ForgotPasswordFormWrapper>

          <ForgotPasswordButtonWrapper>
            <SignInSuggestion>Do you already have an account?</SignInSuggestion>
            <SignInLink to={'/signin'}>Sign in</SignInLink>
          </ForgotPasswordButtonWrapper>
        </ForgotPasswordContainer>
      </BackgroundContainer>
    </div>
  );
};
export default ForgotPasswordPage;
