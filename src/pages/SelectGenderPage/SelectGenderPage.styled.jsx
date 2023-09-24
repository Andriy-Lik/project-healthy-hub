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

export const SelectGenderLogo = styled.img `
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

export const SelectGenderContainer = styled.div ` 
    max-width: 444px;
    margin-top: 120px;
    margin-left: 104px;
    display: inline-block;
    
    @media (min-width: 834px) and (max-width: 1439px)  {
        margin: auto;
      }
`;

export const SelectGenderHeadline = styled.h1 ` 
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    font-family: Poppins;
`;

export const SelectGenderText = styled.p ` 
    color: #B6B6B6;
    font-weight: 400;
    font-size: 22px;
    margin-top: 16px;
    line-height: 32px;
`;

export const SelectGenderButton = styled(Link) ` 
    background-color: #E3FFA8;
    border-radius: 12px;
    width: 192px;
    padding: 8px;
    font-size: 14px;
    font-family: Poppins;
`;



export const SelectGenderForm = styled.form ` 
    margin-top: 1px;
`

export const SelectGenderInput = styled.input ` 
    color: #FFFFFF;
    border: 1px solid #E3FFA8;
    background-color: #0F0F0F;
    border-radius: 12px;
    margin-bottom: 24px;
`

export const SelectGenderBackButton = styled(Link) ` 
    background-color: #050505;
    border: none;
    font-size: 14px;
    color: #FFFFFF;
    margin-left: 16px;
`;