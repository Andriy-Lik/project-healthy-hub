import styled from 'styled-components';

// export const Overlay = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   /* background-color: rgba(197, 197, 197, 0.2); */
//   width: 100%;
//   height: 100%;
//   @media screen and (${props => props.theme.mq.mobile}) {
//     display: flex;
//   }
//   @media screen and (${props => props.theme.mq.tablet}) {
//     display: none;
//   }
//   @media screen and (${props => props.theme.mq.desktop}) {
//     display: none;
//   }
// `;

export const ModalWrapper = styled.div`
  position: absolute;
  /* top: 60px;
  right: 10px;
  left: 10px; */
  width: 300px;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: ${div => div.theme.colors.black2};
  border-radius: ${div => div.theme.radii.normal};
  padding: 24px 0 24px 24px;
`;

// export const Modal = styled.div``;

export const CloseBtn = styled.button`
  background: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const InfoOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InfoBlock = styled.div`
  background-color: inherit;
  border: none;
  cursor: pointer;
  display: flex;
`;

export const IconContainer = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.01);
  border: 1px solid ${props => props.theme.colors.gray1};
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
`;

export const InfoBlockName = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const InfoBlockText = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  display: flex;
  align-items: center;
`;

export const ArrowSvg = styled.img`
  width: 14px;
  margin-left: 12px;
`;

export const WeightKg = styled.p`
  color: ${p => p.theme.colors.gray};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  margin-left: 4px;
  margin-right: 6px;
`;

export const EditSvg = styled.img`
  width: 16px;
`;
