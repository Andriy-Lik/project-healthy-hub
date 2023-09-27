import { Link } from 'react-router-dom';
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
import { logIn } from '../../redux/Auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';
import { selectToken } from 'redux/Auth/authSelectors';

const SignInPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!email || !password) {
      setError('Будь ласка заповніть усі поля');
      return;
    }

    try {
      await dispatch(logIn({ email, password }));
      localStorage.setItem('token', JSON.stringify(token));
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Неправильний логін чи пароль');
    }
  };

  return (
    <div>
      <BackgroundContainer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>
        <SignInLogo src={welcomeLogoPic} alt="Logo" />
        <SignInContainer>
          <SignInHeadline>Sign in</SignInHeadline>
          <SignInText>You need to login to use the service</SignInText>
          {error && <p>{error}</p>}
          <SignInFormWrapper>
            <SignInForm onSubmit={handleSubmit} autoComplete="on">
              <SignInInput
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="E-mail"
              />
              <SignInInput
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
              <SignInButton type="submit">Sign in</SignInButton>
              <ForgotYourPassword>
                <Link to={'/forgot-password'}>Forgot your password?</Link>
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
