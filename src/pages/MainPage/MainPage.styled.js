import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${props => props.theme.colors.black};

  padding: 16px 10px 60px 10px;

  @media screen and (${props => props.theme.mq.tablet}) {
    padding: 24px 27px 40px 27px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    padding: 20px 34px 52px 34px;
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

export const Link = styled.div`
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

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const Tarker = styled.li`
  flex-basis: 100%;

  @media screen and (${props => props.theme.mq.desktop}) {
    flex-basis: calc((100% - 40px) / 3);
  }

  &:not(:last-of-type) {
    @media screen and (${props => props.theme.mq.tablet}) {
      flex-basis: calc((100% - 20px) / 2);
    }

    @media screen and (${props => props.theme.mq.desktop}) {
      flex-basis: calc((100% - 40px) / 3);
    }
  }
`;
