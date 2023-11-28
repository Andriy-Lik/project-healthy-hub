import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  setNewUserName,
  setNewUserEmail,
  setNewUserPassword,
} from 'redux/Auth/authSlice';
import {
  Container,
  Image,
  ContentBox,
  Title,
  Text,
  FormWrapper,
  Form,
  Input,
  Button,
  SuggestionButtonWrapper,
  Suggestion,
  SignInLink,
} from './SignUpPage.styled';
import logoPic from '../../images/WelcomePageImg/logoPic.png';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNewUserData = event => {
    event.preventDefault();
    console.log(`name: ${name}, e-mail: ${email}, password: ${password}`);
    dispatch(setNewUserName(name));
    dispatch(setNewUserEmail(email));
    dispatch(setNewUserPassword(password));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div>
      <Container>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>
        <Image src={logoPic} alt="Logo" />
        <ContentBox>
          <Title>Sign up</Title>
          <Text>You need to register to use the service</Text>
          <FormWrapper>
            <Form onSubmit={handleNewUserData} autoComplete="off">
              <Input
                placeholder="name"
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <Input
                placeholder="e-mail"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <Input
                placeholder="password"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <Button type="submit">
                <Link to={'/your-goal'}>
                  Sign Up
                </Link>  
              </Button>
            </Form>
          </FormWrapper>

          <SuggestionButtonWrapper>
            <Suggestion>Do you already have an account?</Suggestion>
            <SignInLink to={'/signin'}>Sign in</SignInLink>
          </SuggestionButtonWrapper>
        </ContentBox>
      </Container>
    </div>
  );
};
export default SignUpPage;
