import styled from 'styled-components';

export const Container = styled.div`
  background-color: #050505;
  display: flex;

  @media (min-width: 320px) and (max-width: 833px) {
    flex-direction: column;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    flex-direction: center;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Image = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  // margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
  }

  @media (min-width: 1440px) {
    margin-right: 104px;
    margin-left: 0;
  }
`;

export const ContentBox = styled.div`
  max-width: 444px;

  @media (min-width: 320px) and (max-width: 833px) {
    margin: auto;
    padding-left: 10px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    width: 444px;
    margin-top: 120px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  font-family: Poppins;
  @media (min-width: 834px) and (max-width: 1439px) {
    width: 100%;
    text-align: center;
    align-self: center;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;
  color: #b6b6b6;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  @media (min-width: 834px) and (max-width: 1439px) {
    width: 360px;
    text-align: center;
    align-self: center;
  }
  @media (min-width: 1440px) {
    width: 360px;
  }
`;

export const SignInActivated = styled.button`
  background-color: #e3ffa8;
  margin-top: 24px;
  border-radius: 12px;
  width: 192px;
  padding: 8px;
  font-size: 14px;
  font-family: Poppins;
`;

export const SignUpInactive = styled.button`
  background-color: #050505;
  border: none;
  font-size: 14px;
  color: #ffffff;
  margin-left: 16px;
`;

export const BtnBox = styled.div`
  margin-bottom: 80px;
  // margin-left: auto;
  // margin-right: auto;
`;

export const BtnSignIn = styled.button `
  margin-right: 38px;
  background-color: #E3FFA8;
  border-radius: 12px;
  width: 192px;
  padding: 8px;
  font-size: 14px;
  font-family: Poppins;
`;

export const BtnSignUp = styled.button `
  background-color: #050505;
  border: none;
  color: #FFFF;
  font-size: 14px;
`;

export const List = styled.ul`
  // margin-top: 80px;
  // margin-bottom: 40px;
  @media (min-width: 834px) and (max-width: 1439px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 16px;
  // height: 40px;
`;

export const ItemImg = styled.img`
  height: 10px;
  margin-top: 5px;
`;

export const ItemText = styled.p`
  color: #ffffff;
  margin-left: 10px;

  @media (min-width: 320px) and (max-width: 833px) {
    padding-left: 10px;
    margin-bottom: 16px;
  }
`;
