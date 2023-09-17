// import { Link } from "react-router-dom";
import {
  BackgroundContainer,
  ForgotPasswordLogo,
  ForgotPasswordContainer,
  ForgotPasswordHeadline,
  ForgotPasswordText,
  ForgotPasswordForm,
  ForgotPasswordInput,
  ForgotPasswordButton,
  SignInSuggestion,
  SignInLink,
} from './ForgotPasswordPage.styled';
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';

const ForgotPasswordPage = () => {
  return (
    <div>
      <BackgroundContainer>
        <ForgotPasswordLogo src={welcomeLogoPic} alt="Logo" />
        <ForgotPasswordContainer style={{ display: 'block' }}>
          <ForgotPasswordHeadline>Forgot your password</ForgotPasswordHeadline>
          <ForgotPasswordText>We will send you an email with recovery instructions</ForgotPasswordText>
          <div style={{width: 212}}>
            <ForgotPasswordForm>
              <ForgotPasswordInput placeholder="E-mail" />
              <ForgotPasswordButton>Send</ForgotPasswordButton>
            </ForgotPasswordForm>
          </div>

          <div style={{ display: 'flex', marginTop: 272}}>
            <SignInSuggestion>Do you already have an account?</SignInSuggestion>
            <SignInLink>Sign in</SignInLink>
          </div>
        </ForgotPasswordContainer>
      </BackgroundContainer>
    </div>
  );
};
export default ForgotPasswordPage;
