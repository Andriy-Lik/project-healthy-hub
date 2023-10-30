import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  @media screen and (${props => props.theme.mq.mobile}) {
    top: 60px;
    display: flex;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    top: 100px;
    display: flex;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    top: 100px;
    display: flex;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 0;
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 320px;
    padding: 0 10px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 834px;
    padding: 0 27px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;
