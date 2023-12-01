import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.main`
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.poppins};
  padding-top: 16px;
  padding-bottom: 60px;

  @media screen and (${p => p.theme.mq.tablet}) {
    padding-top: 24px;
    padding-bottom: 20px;
  }
  @media screen and (${p => p.theme.mq.desktop}) {
    padding-top: 20px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 834px;
    padding: 0 27px;
  }
  @media screen and (${p => p.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;

export const BackLink = styled(NavLink)`
  display: flex;
  @media screen and (${p => p.theme.mq.mobile}) {
    margin-right: 8px;
  }
  @media screen and (${p => p.theme.mq.tablet}) {
    margin-right: 12px;
  }
`;

export const ArrowReturn = styled.img`
  @media screen and (${p => p.theme.mq.mobile}) {
    width: 16px;
  }
  @media screen and (${p => p.theme.mq.tablet}) {
    width: 24px;
  }
`;

export const MainHeaderBlock = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (${p => p.theme.mq.tablet}) {
    margin-bottom: 24px;

  }
  @media screen and (${p => p.theme.mq.desktop}) {
    margin-bottom: 16px;
  }
`;

export const MainHeader = styled.h1`
  font-size: ${p => p.theme.fontSizes.l2};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.25;

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 1.2;
  }
`;

export const DiaryWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (${p => p.theme.mq.desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    & > li:nth-child(2) {
      order: 2;
    }

    & > li:nth-child(3) {
      order: 1;
    }

    & > li:nth-child(4) {
      order: 3;
    }
  }
`;

export const DiaryItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (${p => p.theme.mq.tablet}) {
    gap: 6px;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: calc((100% - 20px) / 2);
  }
`;


export const BlockGeneralInfo = styled.div`
  @media screen and (${p => p.theme.mq.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (${p => p.theme.mq.tablet}) {
    margin-bottom: 0;
  }

`;

export const ThumbImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 26px;

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 32px;
  }
`;

export const BlockDetailedInformation = styled.ul`
  background-color: ${p => p.theme.colors.black2};
  border-radius: ${p => p.theme.radii.normal};
  height: 232px;
  padding: 16px 12px;

  @media screen and (${p => p.theme.mq.tablet}) {
    height: 240px;
    padding: 32px 14px;
  }
`;

export const ListOfDishes = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  height: 200px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: ${p => p.theme.radii.normal};
    border: 1px solid rgba(227, 255, 168, 0.2);

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    }
  }

  @media screen and (${p => p.theme.mq.tablet}) {
    height: 176px;
    row-gap: 32px;
  }
`;