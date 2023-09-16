import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  border-radius: ${p=>p.theme.radii.normal};
`;

export const Title = styled.p`
  color: ${p => p.theme.colors.violet};
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.bold};


  @media screen and (${p => p.theme.mq.tablet}) {
    color: ${p => p.theme.colors.liteGreen};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    color: ${p => p.theme.colors.pink};
  }

  
  
`