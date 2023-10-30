import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  ProductList,
  ProductItem,
  ImgThumb,
  Description,
  Title,
  Value,
} from './RecommendedFoodPage.styled';

import { selectRecomendedFood } from 'redux/RecomendedFood/recomendedFoodSelectors';
import { randomizeFood } from 'helpers/randomizeFood';

import arrowRight from 'images/icons/arrow-right.svg';

export default function RecommendedFood() {
  const [arrayForRender, setArrayForRender] = useState([]);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  const info = useSelector(selectRecomendedFood);

  useEffect(() => {
    setArrayForRender(randomizeFood(info, 10));
  }, [info]);

  return (
    <Container>
      <Content>
        <HeaderPage>
          <BackLink to={backLinkLocationRef.current}>
            <ArrowReturn src={arrowRight} alt="arrow right" />
          </BackLink>
          <TitlePage>Recommented food</TitlePage>
        </HeaderPage>

        <InfoBox>
          <BannerThumb>
            <Img src={image} alt="Banner recommended food" />
          </BannerThumb>
          <ProductList>
            {arrayForRender.map(({ _id, img, name, amount, calories }) => {
              return (
                <ProductItem key={_id}>
                  <ImgThumb>
                    <Img src={img} alt={name} />
                  </ImgThumb>
                  <Description>
                    <Title>{name}</Title>
                    <Value>
                      {amount} <span>{calories} calories</span>
                    </Value>
                  </Description>
                </ProductItem>
              );
            })}
          </ProductList>
        </InfoBox>
      </Content>
    </Container>
  );
}
