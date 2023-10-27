// import { Link } from "react-router-dom";
import {
  Container,
  Img,
  SignInContainer,
  Title,
  Text,
  FormWrapper,
  Form,
  Input,
  FormButton,
  ForgotPasswordLink,
  SignUpContainer,
  SignUpText,
  SignUpLink,
} from './SignInPage.styled';
import { logIn } from '../../redux/Auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import logoPic from '../../images/WelcomePageImg/logoPic.png';

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
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Неправильний логін чи пароль');
    }
  };

  return (
    <div>
      <Container>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>
        <Img src={logoPic} alt="img" />
        <SignInContainer>
          <Title>Sign in</Title>
          <Text>You need to login to use the service</Text>
          {error && <p>{error}</p>}
          <FormWrapper>
            <Form onSubmit={handleSubmit} autoComplete="on">
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="E-mail"
              />
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
              <FormButton type="submit">Sign in</FormButton>
              <ForgotPasswordLink to={'/forgot-password'}>
                Forgot your password?
              </ForgotPasswordLink>
            </Form>
          </FormWrapper>

          <SignUpContainer>
            <SignUpText>
              If you don't have an account yet
            </SignUpText>
            <SignUpLink to={'/signup'}>Sign up</SignUpLink>
          </SignUpContainer>
        </SignInContainer>
      </Container>
    </div>
  );
};
export default SignInPage;
