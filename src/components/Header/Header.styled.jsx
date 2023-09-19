import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${div => div.theme.colors.black2};
  padding: 0;
  margin: 0;

  @media screen and (${props => props.theme.mq.mobile}) {
    height: 60px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    height: 100px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    height: 100px;
  }
`;

export const Title = styled.p`
  color: ${p => p.theme.colors.gray};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};

  @media screen and (${props => props.theme.mq.mobile}) {
    margin-left: 10px;
    font-size: ${p => p.theme.fontSizes.s};
    display: flex;
    align-items: center;
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    margin-left: 27px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    margin-left: 34px;
  }
`;

export const MenuSvg = styled.img`
  width: 16px;
  margin-left: 8px;
  @media screen and (${props => props.theme.mq.tablet}) {
    display: none;
  }
`;

export const Info = styled.div`
  margin: 0;
  display: flex;
`;

export const InfoBlock = styled.div`

  @media screen and (${props => props.theme.mq.mobile}) {
    display: none;
  }

  @media screen and (${props => props.theme.mq.tablet}) {
  display: flex;
    &:nth-child(1) {
      margin-right: 40px;
    }
  }

  @media screen and (${props => props.theme.mq.desktop}) {
  display: flex;
    &:nth-child(1) {
      margin-right: 80px;
    }
  }
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
  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: 12px;
    margin-right: 10px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    margin-left: 73px;
    margin-right: 27px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    margin-left: 124px;
    margin-right: 36px;
  }
`;

export const AvaImg = styled.img`
  width: 28px;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: -8px;
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 24px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 28px;
  }
`;