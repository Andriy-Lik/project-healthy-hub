import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${div => div.theme.colors.black2};
  padding: 0;
  margin: 0;
`;

export const Title = styled.p`
  color: ${p => p.theme.colors.gray};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};


  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    padding: 34px;
    font-size: ${p => p.theme.fontSizes.xxl};
  }
`;

export const Info = styled.div`
  margin: 0;
  padding: 26px 0 26px 0;
  display: flex;
`;

export const InfoBlock = styled.div`
  margin-right: 80px;
  display: flex;
`;

export const IconContainer = styled.div`
  border:3px solid red;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.01);
  border: 1px solid #5F5E5C;
  border-radius: ${div => div.theme.radii.normal};
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3px 0 3px 0;
`

export const InfoBlockName = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`

export const InfoBlockText = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  display: flex;
  align-items: center;
`

export const ArrowSvg = styled.img`
  width: 14px;
  margin-left: 12px;
`

export const WeightKg = styled.p`
  color: ${p => p.theme.colors.gray};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  margin-left: 4px;
  margin-right: 6px;
`

export const EditSvg = styled.img`
  width: 16px;
`

export const UserBlock = styled.div`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  display: flex;
  align-items: center;
  margin-right: 36px;
  margin-left: 44px;
`;

export const AvaImg = styled.img`
width: 28px;
border-radius: 50%;
margin-left: 6px;
margin-right: -8px;
`;