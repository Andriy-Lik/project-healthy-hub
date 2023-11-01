import styled from 'styled-components';

export const Container = styled.div`
  background-color: #050505;
  display: flex;

  @media (min-width: 320px) and (max-width: 833px) {
    flex-direction: column;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    flex-direction: column;
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

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 380px;
    margin-bottom: 80px;
  }

  @media (min-width: 1440px) {
    width: 592px;
    margin: 40px 104px 72px 0;
  }
`;

export const ContentBox = styled.div`

  @media (min-width: 320px) and (max-width: 833px) {
    width: 300px;
    margin: 0 auto 40px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 436px;
    margin: 0 auto 286px;
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
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 36px;

  @media (min-width: 320px) and (max-width: 833px) {
    font-size: ${p => p.theme.fontSizes.l2};
    line-height: 30px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    text-align: center;
    align-self: center;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;
  color: ${p => p.theme.colors.gray};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 32px;

  @media (min-width: 320px) and (max-width: 833px) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 24px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 410px;
    text-align: center;
    align-self: center;
  }
  
  @media (min-width: 1440px) {
    width: 410px;
  }
`;

export const BtnBox = styled.div`
  margin-bottom: 80px;

  @media (min-width: 320px) and (max-width: 833px) {
    margin-bottom: 40px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 350px;
    margin: 0 auto 80px auto;
  }
`;

export const BtnSignIn = styled.button`
  
  padding: 8px 10px;
  background-color: ${p => p.theme.colors.greenLite};
  color: ${p => p.theme.colors.black2};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 20px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 142px;
    margin-right: 16px;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    width: 212px;
    margin-right: 16px;
  }

  @media (min-width: 1440px) {
    width: 192px;
    margin-right: 38px;
  }
`;

export const BtnSignUp = styled.button`
  background-color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 20px;
`;

export const List = styled.ul`
  @media (min-width: 834px) and (max-width: 1439px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 16px;
  
  &:last-child {
    @media (min-width: 320px) and (max-width: 833px) {
      margin-bottom: 0;
    }

    @media (min-width: 1440px) {
      margin-bottom: 0;
    }
  }
  
  &:nth-child(n + 3) {
    @media (min-width: 834px) and (max-width: 1439px) {
      margin-bottom: 0;
    }
  }

  &:nth-child(even) {
    @media (min-width: 834px) and (max-width: 1439px) {
      width: 170px;
    }
  }

  &:nth-child(odd) {
    @media (min-width: 834px) and (max-width: 1439px) {
      width: 250px;
      margin-right: 16px;
    }
  }
`;

export const ItemImg = styled.img`
  height: 8px;
  margin-top: 6px;
`;

export const ItemText = styled.p`
  margin-left: 8px;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 20px;
`;
