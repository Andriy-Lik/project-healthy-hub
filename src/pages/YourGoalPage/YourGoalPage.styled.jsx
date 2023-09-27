import styled from "styled-components";
// import { Link } from "react-router-dom";

export const BackgroundContainer = styled.div`
  background-color: #050505;
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 833px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    display: flex;
    flex-direction: center;
    margin: auto;
  }

  @media (min-width: 1439px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
  }
`;

export const GoalLogo = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1439px) {
    margin-right: 80px;
    margin-left: 0;
  }
`;

export const GoalContainer = styled.div`
  max-width: 444px;
  margin-top: 120px;
  margin-left: 104px;

  @media (min-width: 320px) and (max-width: 833px) {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1439px) {
    width: 444px;
    margin-left: 0;
    margin-right: 120px;
  }
`;

export const GoalHeadline = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  font-family: Poppins;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 100%;
    text-align: center;
    align-self: center;
    margin-top: 16px;
  }
`;

export const GoalText = styled.p`
  color: #b6b6b6;
  font-weight: 400;
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 20px;
  line-height: 32px;
  width: 280px;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
    text-align: center;
    align-self: center;
    align-text: center;
  }

  @media (min-width: 1439px) {
    width: 460px;
  }
`;

export const GoalButton = styled.button`
  background-color: #e3ffa8;
  text-align: center;
  margin-top: 16px;
  border-radius: 12px;
  width: 268px;
  padding: 8px;
  font-size: 14px;
  font-family: Poppins;
  margin-bottom: 60px;

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }
`;

export const GoalList = styled.ul `
    width: 254px;

    @media (min-width: 320px) and (max-width: 833px)  {
        width: 250px;
      }

    @media (min-width: 834px) and (max-width: 1439px)  {
        display: flex;
        justify-content: space-between;
        width: 400px;
      }
`

export const GoalOption = styled.li `
    color: 'white';
`;



export const GoalForm = styled.form` 
    margin-top: 1px;
`;

export const GoalInput = styled.input` 
    color: #FFFFFF;
    margin-bottom: 16px;
    background-color: #E3FFA8;
    margin-right: 8px;
`;