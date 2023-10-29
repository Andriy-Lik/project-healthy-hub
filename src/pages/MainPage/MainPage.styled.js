import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};

  padding-top: 16px;
  padding-bottom: 60px;

  @media screen and (${props => props.theme.mq.tablet}) {
    padding-top: 24px;
    padding-bottom: 40px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    padding-top: 20px;
    padding-bottom: 40px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;

export const HeaderMainPage = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (${props => props.theme.mq.tablet}) {
    margin-bottom: 24px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    margin-bottom: 16px;
  }
`;

export const TitlePage = styled.h1`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 30px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  }
`;

export const LinkToDashboard = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.gray};
  cursor: pointer;

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 22px;
  }
`;

export const TrackerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const Tarker = styled.li`
  flex-basis: 100%;

  &:not(:last-of-type) {
    @media screen and (${props => props.theme.mq.tablet}) {
      flex-basis: calc((100% - 20px) / 2);
    }
  }

  &:nth-child(1) {
    @media screen and (${props => props.theme.mq.desktop}) {
      flex-basis: 328px;
    }
  }

  &:nth-child(2) {
    @media screen and (${props => props.theme.mq.desktop}) {
      flex-basis: 444px;
    }
  }

  &:nth-child(3) {
    @media screen and (${props => props.theme.mq.desktop}) {
      flex-basis: 560px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    flex-basis: calc((100% - 20px) / 2);
  }
`;
