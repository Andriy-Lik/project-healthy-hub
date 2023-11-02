import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CardRecommendedProduct from 'components/CardRecommendedProduct';
import {
  RecommendedFoodSection,
  TitleSection,
  RecommendedFoodList,
  SeeMoreButton,
} from './RecommendedFoodOnMain.styled';

import { selectRecomendedFood } from 'redux/RecomendedFood/recomendedFoodSelectors';
import { randomizeFood } from 'helpers/randomizeFood'

const RecommendedFoodOnMain = () => {
  
  const [arrayForRender, setArrayForRender] = useState([]);
  const info = useSelector(selectRecomendedFood);
  
  useEffect(() => {  
    setArrayForRender(randomizeFood(info));
  }, [info]);

  return (
    <RecommendedFoodSection>
      <TitleSection>Recommended food</TitleSection>
      <RecommendedFoodList>
        {arrayForRender.map(({ _id, img, name, amount, calories }) => (
          <CardRecommendedProduct              
            key={_id}
            id={_id}
            img={img}
            name={name}
            amount={amount}
            calories={calories}
          />
        ))}
      </RecommendedFoodList>
      <SeeMoreButton to="/recommended-food">See more</SeeMoreButton>
    </RecommendedFoodSection>
  );
};

export default RecommendedFoodOnMain;

