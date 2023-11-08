import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  width: 158px;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: ${div => div.theme.colors.black2};
  border-radius: ${div => div.theme.radii.normal};
  padding: 0;
  @media screen and (${props => props.theme.mq.mobile}) {
    right: 10px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    right: 27px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    right: 34px;
  }
`;

export const Modal = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${p => p.theme.colors.white};
  background-color: transparent;
  border: none;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
`;
