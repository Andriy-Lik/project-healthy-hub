import { useState, useEffect } from "react";

import CardRecommendedProduct from 'components/CardRecommendedProduct';
import {
  RecommendedFoodSection,
  TitleSection,
  RecommendedFoodList,
  SeeMoreButton,
} from './RecommendedFoodOnMain.styled';

import { getRecommentedFood } from "helpers/getRecommentedFood";
import { randomizeFood } from 'helpers/randomizeFood'

const RecommendedFoodOnMain = () => {
  
  const [arrayForRender, setArrayForRender] = useState([]);
  
  useEffect(() => {
    getRecommentedFood()
      .then(responce => {
        setArrayForRender(randomizeFood(responce))
      })
      .catch(err => console.log(err))
  }, [])
  
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

