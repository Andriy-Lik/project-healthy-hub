import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundContainer = styled.div `
    background-color: #050505;
    display: flex;

    @media (min-width: 320px) and (max-width: 833px)  {
        display: block;
      };

    @media (min-width: 834px) and (max-width: 1439px)  {
        display: block;
      }
`;

export const SignUpLogo = styled.img `
    margin-left: 150px;
    margin-top: 40px;

    @media (min-width: 320px) and (max-width: 833px)  {
        width: 300px;
        margin: auto;
    };

    @media (min-width: 834px) and (max-width: 1439px)  {
        width: 380px;
        margin: auto;
      }
`;

export const SignUpContainer = styled.div ` 
    max-width: 444px;
    margin-top: 120px;
    margin-left: 104px;
    display: block;

    @media (min-width: 320px) and (max-width: 833px)  {
        margin: auto;
    }; 

    @media (min-width: 834px) and (max-width: 1439px)  {
        margin: auto;
      }
`;

export const SignUpHeadline = styled.h1 ` 
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    font-family: Poppins;
`;

export const SignUpText = styled.p ` 
    color: #B6B6B6;
    font-weight: 400;
    font-size: 22px;
    margin-top: 16px;
    line-height: 32px;
`;

export const SignUpFormWrapper = styled.div `
    width: 212px;
`

export const SignUpForm = styled.form `
    display: block;
    margin-top: 8px;
`;

export const SignUpInput = styled.input `
    border: 1px solid #E3FFA8;
    border-radius: 12px;
    background-color: #0F0F0F;
    width: 212px;
    height: 36px;
    color: #B6B6B6;
    padding-left: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 8px;
    margin-top: 16px;
`

export const SignUpButton = styled.button ` 
    background-color: #E3FFA8;
    margin-top: 16px;
    border-radius: 12px;
    width: 212px;
    padding: 8px;
    font-size: 14px;
    font-family: Poppins;
`;

export const SignInSuggestionButtonWrapper = styled.div `
    display: flex; 
    margin-top: 200px;
`;

export const SignInSuggestion = styled.p `
    color: #B6B6B6;
`;

export const SignInLink = styled(Link) `
    background-color: #050505;
    color: #FFFFFF;
    border: none;
    margin-left: 16px;
`
