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
import { randomizeFood } from '../../helpers/randomizeFood'

export const RecommendedFoodOnMain = () => {
  
  const [arrayForRender, setArrayForRender] = useState([]);
  const dispatch = useDispatch();
  

  useEffect(() => async () => {
    dispatch(getRecomendedFood());   
  }, [dispatch]);

  const info = useSelector(recomendedFoodInfo);
  
  useEffect(() => {
    if (info.length === 0) {
      return;
    };
    setArrayForRender(randomizeFood(info));
  }, [info]);

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
