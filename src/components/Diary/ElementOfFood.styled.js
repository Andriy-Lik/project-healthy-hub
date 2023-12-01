import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  column-gap: 16px;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 20px;
`;

export const SequenceNumber = styled.span`
  min-width: 16px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-align: center;
`;

export const Dish = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 6px;
`;

export const Title = styled.p`
  text-transform: capitalize;
  flex-grow: 1;
`;

export const EditButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  column-gap: 6px;
  color: ${p => p.theme.colors.gray};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 20px;
  cursor: pointer;

  @media screen and (${p => p.theme.mq.tablet}) {
    order: 1;
  }
`;

export const Img = styled.img`
  width: 16px;
  height: 16px;
`;

export const BlockInfo = styled.div`
  display: flex;
  column-gap: 12px;
  font-size: 12px;
  line-height: 18px;

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 20px;
  }
`;

export const Carbonohidrates = styled.p`
  display: flex;
  width: 70px;
  column-gap: 6px;

  & > span {
    color: ${props => props.theme.colors.gray};
  }
  
  @media screen and (${p => p.theme.mq.tablet}) {
    width: 80px;

    & > span {
      display: none;
    }
  }
`;

export const Protein = styled(Carbonohidrates)`
  width: 62px;
  @media screen and (${p => p.theme.mq.tablet}) {
    width: 80px;
  }
`;

export const Fat = styled(Carbonohidrates)`
  width: 58px;
  @media screen and (${p => p.theme.mq.tablet}) {
    width: 80px;
  }
`;

export const AddFoodButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${props => props.theme.colors.greenLite};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`;