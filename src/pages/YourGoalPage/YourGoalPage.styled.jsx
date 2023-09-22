import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundContainer = styled.div `
    background-color: #050505;
    display: flex;
`;

export const GoalLogo = styled.img `
    margin-left: 150px;
    margin-top: 40px;
`;

export const GoalContainer = styled.div ` 
    margin-top: 120px;
    margin-left: 104px;
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

export const GoalButton = styled(Link) ` 
    background-color: #E3FFA8;
    border-radius: 12px;
    width: 192px;
    padding: 8px;
    font-size: 14px;
    font-family: Poppins;
`;

export const GoalList = styled.ul `
    width: 254px;
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