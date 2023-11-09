// import { Link } from "react-router-dom";
import {
  Container,
  Image,
  ContentBox,
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
        <Image src={logoPic} alt="img" />
        <ContentBox>
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
            </Form>
            <ForgotPasswordLink to={'/forgot-password'}>
              Forgot your password?
            </ForgotPasswordLink>
          </FormWrapper>

          <SignUpContainer>
            <SignUpText>
              If you don't have an account yet
            </SignUpText>
            <SignUpLink to={'/signup'}>Sign up</SignUpLink>
          </SignUpContainer>
        </ContentBox>
      </Container>
    </div>
  );
};
export default SignInPage;
