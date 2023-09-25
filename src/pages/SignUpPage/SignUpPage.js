import { Link } from "react-router-dom";
import { setNewUserName, setNewUserEmail, setNewUserPassword } from "redux/Auth/authSlice";
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
import { useDispatch } from "react-redux";
import welcomeLogoPic from '../../images/WelcomeLogoPic.png';
import { useState } from "react";

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
    }
    else if (name === 'email') {
      setEmail(value);
    }
    else {
      setPassword(value);
    }
  };

  return (
    <div>
      <BackgroundContainer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&display=swap');
        </style>
                  <SignUpLogo src={welcomeLogoPic} alt="Logo" />
        <SignUpContainer>

          <SignUpHeadline>Sign up</SignUpHeadline>
          <SignUpText>You need to register to use the service</SignUpText>
          <SignUpFormWrapper>
            <SignUpForm onSubmit={handleNewUserData} autoComplete="off">
              <SignUpInput placeholder="name" id="name" type="text" name="name" value={name} onChange={handleInputChange}/>
              <SignUpInput placeholder="e-mail"  id="email" type="email" name="email" value={email} onChange={handleInputChange}/>
              <SignUpInput placeholder="password"  id="password" type="password" name="password" value={password} onChange={handleInputChange}/>
              <button type="submit">Sign Up</button>
              <SignUpButton>
              <Link to={'/your-goal'}>
                Sign Up
              </Link>  
              </SignUpButton>
            </SignUpForm>
          </SignUpFormWrapper>

          <SignInSuggestionButtonWrapper>
            <SignInSuggestion>Do you already have an account?</SignInSuggestion>
            <SignInLink to={'/signin'}>
              
              Sign in</SignInLink>
          </SignInSuggestionButtonWrapper>
        </SignUpContainer>
      </BackgroundContainer>
    </div>
  );
};
export default SignUpPage;
