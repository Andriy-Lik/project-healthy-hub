import DiaryItem from './DiaryItem';
import {
  CardsWrap,
  DiaryLink,
  Title,
  TitleWrapper,
  Container,
} from './DiaryOnMain.styled';

import breakfastImage from 'images/breakfast-image.svg';
import dinnerImage from 'images/dinner-image.svg';
import lunchImage from 'images/lunch-image.svg';
import snackImage from 'images/snack-image.svg';
import { useSelector } from 'react-redux';
import { selectConsumedMacronutrientsPerDay } from 'redux/Statistics/statisticsSelectors';

const DiaryOnMain = () => {
  const ConsumedMacronutrients = useSelector(selectConsumedMacronutrientsPerDay);
  
  const {
    breakfast: breakfastInfo,
    lunch: lunchInfo,
    dinner: dinnerInfo,
    snack: snackInfo,
  } = ConsumedMacronutrients;

  return (
    <Container>
      <TitleWrapper>
        <Title>Diary</Title>
        <DiaryLink to="/diary">See more</DiaryLink>
      </TitleWrapper>
      <CardsWrap>
        <DiaryItem
          title={'Breakfast'}
          image={breakfastImage}
          info={breakfastInfo}
        />
        <DiaryItem title={'Lunch'} image={lunchImage} info={lunchInfo} />
        <DiaryItem title={'Dinner'} image={dinnerImage} info={dinnerInfo} />
        <DiaryItem title={'Snack'} image={snackImage} info={snackInfo} />
      </CardsWrap>
    </Container>
  );
};

export default DiaryOnMain;
