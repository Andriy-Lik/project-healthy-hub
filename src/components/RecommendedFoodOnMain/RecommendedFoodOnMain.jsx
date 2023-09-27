import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecommendedItem } from './RecommendedItem';
import {
  FoodCardsWrap,
  RecommendedFoodSection,
  Title,
  SeeMoreButton,
} from './RecommendedFoodOnMain.styled';

import { recomendedFoodInfo } from '../../redux/RecomendedFood/recomendedFoodSelectors';
import { getRecomendedFood } from '../../redux/RecomendedFood/recomendedFoodOperations'


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
  const [isLoading, setIsLoading] = useState(false);
  const [arrayForRender, setArrayForRender] = useState([]);

  const dispatch = useDispatch();
  

  useEffect(() => async () => {
    dispatch(getRecomendedFood());   
  }, [dispatch]);

  const info = useSelector(recomendedFoodInfo);
  console.log(info.length)
  
  useEffect(() => { 
    if (info.length === 0) {
      return;
    };
    setArrayForRender(randomizeFood(info));
    setIsLoading(false);
  }, [info])


  return (
    <RecommendedFoodSection>
      <Title>Recommended food</Title>
      {isLoading && <></>}
      {!isLoading && <>
        <FoodCardsWrap>
          {arrayForRender.map(item => (
            <RecommendedItem key={item.name} info={item} />
          ))}
        </FoodCardsWrap>
        <SeeMoreButton to="/recommended-food">See more &#8594;</SeeMoreButton>
      </>
      }
    </RecommendedFoodSection>
  );
};
