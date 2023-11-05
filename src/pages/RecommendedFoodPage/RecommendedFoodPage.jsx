import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRecommentedFood } from 'helpers/getRecommentedFood';

import CardRecommendedProduct from 'components/CardRecommendedProduct/CardRecommendedProduct';
import image from 'images/Ketogenic.png';
import {
  Container,
  Content,
  HeaderPage,
  BackLink,
  ArrowReturn,
  TitlePage,
  InfoBox,
  BannerThumb,
  Img,
  RecommendedFoodList,
} from './RecommendedFoodPage.styled';

import { randomizeFood } from 'helpers/randomizeFood';

import arrowRight from 'images/icons/arrow-right.svg';
import { getStats } from 'redux/Statistics/statisticsOperations';

export default function RecommendedFood() {
  const [arrayForRender, setArrayForRender] = useState([]);

  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  useEffect(() => {
    getRecommentedFood()
      .then(responce => {
        setArrayForRender(randomizeFood(responce, 10))
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <Content>
        <HeaderPage>
          <BackLink
            to={backLinkLocationRef.current}
            onClick={() => dispatch(getStats('today'))}
          >
            <ArrowReturn src={arrowRight} alt="arrow right" />
          </BackLink>
          <TitlePage>Recommented food</TitlePage>
        </HeaderPage>

        <InfoBox>
          <BannerThumb>
            <Img src={image} alt="Banner recommended food" />
          </BannerThumb>

          <RecommendedFoodList>
            {arrayForRender.map(({ _id, img, name, amount, calories }) => {
              return (            
                <CardRecommendedProduct
                  key={_id}
                  id={_id}
                  img={img}
                  name={name}
                  amount={amount}
                  calories={calories}
                />
              );
            })}
          </RecommendedFoodList>
        </InfoBox>
      </Content>
    </Container>
  );
}
