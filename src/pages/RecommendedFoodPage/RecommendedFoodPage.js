import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import image from '../../images/Ketogenic.png';
import {
  BackLink,
  ArrowReturn,
  Title,
  Img,
  Item,
  Container,
  Svg,
  Parag,
  List,
  ContainerTwo,
  ParagTwo,
  Background,
} from './RecommendedFoodPage.styled';
// import food from './food.json';

import { recomendedFoodInfo } from '../../redux/RecomendedFood/recomendedFoodSelectors';
import { getRecomendedFood } from '../../redux/RecomendedFood/recomendedFoodOperations';
import { randomizeFood } from '../../helpers/randomizeFood';

import arrowRight from '../../images/icons/arrow-right.svg';

export default function RecommendedFood() {
  const [arrayForRender, setArrayForRender] = useState([]);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');
  const dispatch = useDispatch();

  useEffect(
    () => async () => {
      dispatch(getRecomendedFood());
    },
    [dispatch]
  );

  const info = useSelector(recomendedFoodInfo);

  useEffect(() => {
    if (info.length === 0) {
      return;
    }
    setArrayForRender(randomizeFood(info, 10));
  }, [info]);

  return (
    <Background>
      <BackLink to={backLinkLocationRef.current}>
        <ArrowReturn src={arrowRight} alt="arrow right" />
      </BackLink>
      <Title>Recommented food</Title>
      <ContainerTwo>
        <Img src={image} alt="Recommended food" />
        <List>
          {arrayForRender.map(({ img, name, amount, calories }) => {
            return (
              <Item>
                <Svg src={img} alt={name} />
                <div>
                  <h2>{name}</h2>
                  <Container>
                    <Parag>{amount}</Parag>
                    <ParagTwo>{calories}</ParagTwo>
                  </Container>
                </div>
              </Item>
            );
          })}
        </List>
      </ContainerTwo>
    </Background>
  );
}
