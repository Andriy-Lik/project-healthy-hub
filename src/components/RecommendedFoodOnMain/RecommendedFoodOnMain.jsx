import { RecommendedItem } from './RecommendedItem';
import {
  FoodCardsWrap,
  RecommendedFoodSection,
  Title,
  SeeMoreButton,
} from './RecommendedFoodOnMain.styled';
import food from './food.json';

const randomizeFood = (array, quantity = 4) => {
  const randomNumbArr = [];

  while (randomNumbArr.length < quantity) {
    const randomNumb = Math.floor(Math.random() * array.length);
    if (!randomNumbArr.includes(randomNumb)) {
      randomNumbArr.push(randomNumb);
    }
  }

  return array.filter((_, idx) => randomNumbArr.includes(idx));
};

export const RecommendedFoodOnMain = () => {
  const arrayForRender = randomizeFood(food);

  return (
    <RecommendedFoodSection>
      <Title>Recommended food</Title>
      <FoodCardsWrap>
        {arrayForRender.map(item => (
          <RecommendedItem key={item.name} info={item} />
        ))}
      </FoodCardsWrap>
      <SeeMoreButton to="/recommended-food">See more &#8594;</SeeMoreButton>
    </RecommendedFoodSection>
  );
};
