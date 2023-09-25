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

export const GoalLogo = styled.img `
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

export const GoalContainer = styled.div ` 
    margin-top: 120px;
    margin-left: 104px;

    @media (min-width: 320px) and (max-width: 833px)  {
        margin: auto;
      };

    @media (min-width: 834px) and (max-width: 1439px)  {
        margin: auto;
      }
`;

export const GoalHeadline = styled.h1 ` 
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    font-family: Poppins;
`;

export const GoalText = styled.p ` 
    color: #B6B6B6;
    font-weight: 400;
    font-size: 22px;
    margin-top: 16px;
    margin-bottom: 20px;
    line-height: 32px;
`;

export const GoalButton = styled.p ` 
    background-color: #E3FFA8;
    text-align: center;
    border-radius: 12px;
    width: 192px;
    padding: 8px;
    font-size: 14px;
    font-family: Poppins;
`;

export const GoalList = styled.ul `
    width: 254px;

    @media (min-width: 320px) and (max-width: 833px)  {
        width: 250px;
      }

    @media (min-width: 834px) and (max-width: 1439px)  {
        display: flex;
        width: 400px;
      }
`

export const GoalOption = styled.li `
    color: 'white';
`;



export const GoalForm = styled.form ` 
    margin-top: 1px;
`

export const GoalInput = styled.input ` 
    color: #FFFFFF;
    margin-bottom: 16px;
    background-color: #E3FFA8;
    margin-right: 8px;
`