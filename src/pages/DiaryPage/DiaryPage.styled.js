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


export const Li = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartsHeader = styled.h2`
  width: 270px;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  color: #ffffff;
  margin: 0 40px 0 0;
`;

export const ChartsTitle = styled.p`
  width: 60px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin: 0 8px 0 0;
`;

export const ChartsTitle1 = styled.p`
  width: 130px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin: 0 8px 0 0;
`;


export const ChartsBlock = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
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

export const List = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin: 0 8px 0 0;
`;

export const AddFoodButton = styled.button`
  border: none;
  background-color: #0f0f0f;
  color: #ffffff;
  cursor: pointer;
`;

export const GoBack = styled.button`
  border: none;
  background-color: #0f0f0f;
  color: #ffffff;
  cursor: pointer;
`;

export const Img = styled.img`
  display: block;
  width: 30px;
  margin-right: 8px;
`;