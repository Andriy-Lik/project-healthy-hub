import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Form from '../../components/Diary/DiaryForm';
import breakfast from './images/Breakfast image.png';
import dinner from './images/Dinner image.png';
import lunch from './images/Lunch image.png';
import snack from './images/Snack image.png';
import arrowRight from './images/arrow-right.svg';
// import AddFoodButton from "components/Diary/AddFoodButton";

import {
    DushboardContainer,
    HeaderBlock,
    MainHeader,
    ChartsBlock,
    Li,
    ChartsContainer,
    ChartsHeader,
    ChartsTitle,
    ChartsTitle1,
    Charts,
    List,
    GoBack,
    Img,
    AddFoodButton,
  } from './DiaryPage.styled';



const Diary = () => {
  const [carbonohidrates, setCarbonohidrates] = useState({
    breakfast: 0,
    dinner: 0,
    lunch: 0,
    snack: 0
    });
  const [protein, setProtein] = useState({
    breakfast: 0,
    dinner: 0,
    lunch: 0,
    snack: 0
    });
  const [fat, setFat] = useState({
    breakfast: 0,
    dinner: 0,
    lunch: 0,
    snack: 0
    });

  
  const [food, setFood] = useState([]);
  const [showButton1, setShowButton1] = useState(true);
  const [count, setCount] = useState(1);
  const [addFoodButton, setAddFoodButton] = useState(true);


  useEffect(() => {
    const food = localStorage.getItem('food');
    const parsedFood = JSON.parse(food);

    parsedFood ? setFood(parsedFood) : setFood([]);
  }, []);

  useEffect(() => {
    localStorage.setItem('food', JSON.stringify(food));
  }, [food]);

  const addFoodForm = (name, carbon, proteinNumber, fatNumber, type) => {
    console.log(type)
    if (type==="breakfast") {
      setCarbonohidrates({ ...carbonohidrates, breakfast: carbon});
      setProtein({ ...protein, breakfast: proteinNumber});
      setFat({ ...fat, breakfast: fatNumber});

    } else if (type==="dinner") {
      setCarbonohidrates({ ...carbonohidrates, dinner: carbon});
      setProtein({ ...protein, dinner: proteinNumber});
      setFat({ ...fat, dinner: fatNumber});

    } else if (type="lunch") {
      setCarbonohidrates({ ...carbonohidrates, lunch: carbon});
      setProtein({ ...protein, lunch: proteinNumber});
      setFat({ ...fat, lunch: fatNumber});

    } else if (type="snack") {
      setCarbonohidrates({ ...carbonohidrates, snack: carbon});
      setProtein({ ...protein, snack: proteinNumber});
      setFat({ ...fat, snack: fatNumber});
    };   
  };


  const handleCount = () => {
    setCount(count => count + 1);
  };

  const toggleFoodButton = () => {
    setAddFoodButton(!addFoodButton);
   };
  return (
    <DushboardContainer>
      <HeaderBlock>
        <MainHeader>
        {/* <Link to={'/'}> */}
          <img
            src={arrowRight}
            alt="arrow right"
          />
        {/* </Link> */}
        Diary</MainHeader>
      </HeaderBlock>
      <ChartsBlock>
        <Li>
          <ChartsContainer>
          <Img src={breakfast} alt="Breakfast" />
            <ChartsHeader>Breakfast</ChartsHeader>
            <ChartsContainer>
              <ChartsTitle1>Carbonohidrates: {carbonohidrates.breakfast}</ChartsTitle1>
              <ChartsTitle>Protein: {protein.breakfast} </ChartsTitle>
              <ChartsTitle>Fat: {fat.breakfast}</ChartsTitle>
            </ChartsContainer>
          </ChartsContainer>
          <Charts>
          <List>{count}.
          {addFoodButton && <AddFoodButton onClick={toggleFoodButton}>+ Record your meal</AddFoodButton>}
          {!addFoodButton && <Form onSubmit={addFoodForm} type="breakfast"/>}         
          </List>
          </Charts>
        </Li>
        <Li>
        <ChartsContainer>
        <Img src={dinner} alt="Dinner" />
            <ChartsHeader>Dinner</ChartsHeader>
            <ChartsContainer>
            <ChartsTitle1>Carbonohidrates: {carbonohidrates.dinner} </ChartsTitle1>
              <ChartsTitle>Protein: {protein.dinner} </ChartsTitle>
              <ChartsTitle>Fat: {fat.dinner} </ChartsTitle>
            </ChartsContainer>
          </ChartsContainer>
          <Charts>
          <List>
          <Form onSubmit={ addFoodForm }  type="dinner"/>
          </List>
          </Charts>
        </Li>
        <Li>
        <ChartsContainer>
        <Img src={lunch} alt="Lunch" />
            <ChartsHeader>Lunch</ChartsHeader>
            <ChartsContainer>
            <ChartsTitle1>Carbonohidrates: {carbonohidrates.lunch} </ChartsTitle1>
              <ChartsTitle>Protein: {protein.lunch}</ChartsTitle>
              <ChartsTitle>Fat: {fat.lunch} </ChartsTitle>
            </ChartsContainer>
          </ChartsContainer>
          <Charts>
          <List>
          <Form onSubmit={ addFoodForm } type="lunch"/>
          </List>
          </Charts>
        </Li>
        <Li>
        <ChartsContainer>
        <Img src={snack} alt="Snack" />
            <ChartsHeader>Snack</ChartsHeader>
            <ChartsContainer>
            <ChartsTitle1>Carbonohidrates: {carbonohidrates.snack} </ChartsTitle1>
              <ChartsTitle>Protein: {protein.snack}</ChartsTitle>
              <ChartsTitle>Fat: {fat.snack} </ChartsTitle>
            </ChartsContainer>
          </ChartsContainer>
          <Charts>
          <List>
          <Form onSubmit={ addFoodForm } type="snack" />
          </List>
          </Charts>
        </Li>
      </ChartsBlock>

    </DushboardContainer>
  );
};

export default Diary;




//text