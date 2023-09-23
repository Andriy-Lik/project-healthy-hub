import { DiaryItem } from './DiaryItem';
import {
  CardsWrap,
  DiaryLink,
  Title,
  TitleWrapper,
  Container,
} from './DiaryOnMain.styled';

import breakfastImage from '../../images/breakfast-image.svg';
import dinnerImage from '../../images/dinner-image.svg';
import lunchImage from '../../images/lunch-image.svg';
import snackImage from '../../images/snack-image.svg';

const diaryOnMain = {
  breakfast: { carbonohidrates: 60, protein: 40, fat: 20 },
  lunch: { carbonohidrates: 110, protein: 79.5, fat: 24.8 },
  dinner: { carbonohidrates: 0, protein: 0, fat: 0 },
  snack: { carbonohidrates: 0, protein: 0, fat: 0 },
};

export const DiaryOnMain = () => {
  const {
    breakfast: breakfastInfo,
    lunch: lunchInfo,
    dinner: dinnerInfo,
    snack: snackInfo,
  } = diaryOnMain;

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
