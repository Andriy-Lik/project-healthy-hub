import styled from 'styled-components';

export const DushboardContainer = styled.div`
  width: 0 auto;
  padding: 0 34px;
  background-color: #050505;
`;

export const HeaderBlock = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

export const MainHeader = styled.h1`
  margin: 0;
  padding-top: 20px;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
`;

export const SecondHeader = styled.h3`
  margin: 0;
  padding-top: 24px;
  font-weight: 500;
  font-size: 18px;
`;

export const Li = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ChartsContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ChartsHeader = styled.h2`
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  color: #ffffff;
  margin: 0 40px 0 0;
`;

export const ChartsTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin: 0 8px 0 0;
`;

export const ChartsSubtitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #b6b6b6;
  margin: 0;
`;

export const ChartsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Charts = styled.div`
  width: 676px;
  height: 382px;
  padding: 25px 20px 24px 14px;
  background-color: #0f0f0f;
  border-radius: 12px;
  margin-top: 6px;
`;

export const ScaleBlock = styled.div`
  width: 100%;
`;

export const Scale = styled.div`
  width: 1372px;
  height: 110px;
  background-color: #0f0f0f;
  border-radius: 12px;
  padding: 24px 24px 36px;
  margin-top: 6px;
`;
