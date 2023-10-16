import React from "react";
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Form from '../../components/Diary/DiaryForm';
import breakfast from '../../images/diaryPageImages/breakfast.png';
import dinner from '../../images/diaryPageImages/dinner.png';
import lunch from '../../images/diaryPageImages/lunch.png';
import snack from '../../images/diaryPageImages/snack.png';
import arrowRight from '../../images/diaryPageImages/arrow-right.svg';

import {
  Section,
  Container,
  MainHeaderBlock,
  MainHeader,
  FoodSection,
  FoodBlock,
  FoodBlockHeader,
  FoodHeader,
  ElementTitle,
  List,
  Element,
  Img,
  AddFoodButton,
  BackLink,
  ArrowReturn,
  Lol,
  Kek,
} from './DiaryPage.styled';


const DiaryPage = () => {

  const breakfastItem = window.localStorage.getItem('breakfast') ?? '[]';
  const dinnerItem = window.localStorage.getItem('dinner') ?? '[]';
  const lunchItem = window.localStorage.getItem('lunch') ?? '[]';
  const snackItem = window.localStorage.getItem('snack') ?? '[]';
  const [breakfastFood] = useState(JSON.parse(breakfastItem));
  const [dinnerFood] = useState(JSON.parse(dinnerItem));
  const [lunchFood] = useState(JSON.parse(lunchItem));
  const [snackFood] = useState(JSON.parse(snackItem));
  const [addFoodButton, setAddFoodButton] = useState(true);
  const [addFoodButtonDinner, setAddFoodButtonDinner] = useState(true);
  const [addFoodButtonLunch, setAddFoodButtonLunch] = useState(true);
  const [addFoodButtonSnack, setAddFoodButtonSnack] = useState(true);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

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
  

  const addFoodForm = (carbon, proteinNumber, fatNumber, type) => {
    if (type==="breakfast") {
      setCarbonohidrates({ ...carbonohidrates, breakfast: carbon});
      setProtein({ ...protein, breakfast: proteinNumber});
      setFat({ ...fat, breakfast: fatNumber});

    } else if (type==="dinner") {
      setCarbonohidrates({ ...carbonohidrates, dinner: carbon});
      setProtein({ ...protein, dinner: proteinNumber});
      setFat({ ...fat, dinner: fatNumber});

    } else if (type==="lunch") {
      setCarbonohidrates({ ...carbonohidrates, lunch: carbon});
      setProtein({ ...protein, lunch: proteinNumber});
      setFat({ ...fat, lunch: fatNumber});

    } else if (type==="snack") {
      setCarbonohidrates({ ...carbonohidrates, snack: carbon});
      setProtein({ ...protein, snack: proteinNumber});
      setFat({ ...fat, snack: fatNumber});
    };   
  };


 function getFood(type) {
  if (type==="breakfast") {
    return breakfastFood;
  } else if (type==="dinner") {
    return dinnerFood;
  } else if (type==="lunch") {
    return lunchFood;
  } else if (type==="snack") {
    return snackFood;
  };
 }


  const toggleFoodButton = (type) => {

    if (type==='breakfast') {
    setAddFoodButton(!addFoodButton);
  } else if (type==='dinner') {
    setAddFoodButtonDinner(!addFoodButtonDinner);
  } else if (type==='lunch') {
    setAddFoodButtonLunch(!addFoodButtonLunch);
  } else if (type==='snack') {
    setAddFoodButtonSnack(!addFoodButtonSnack);
  };
    
    const currentFood = getFood(type);

    const newFoodElement = {
      id: currentFood.length === 0 ? 1 : currentFood[currentFood.length - 1].id + 1,
      name: '',
      carbon: '',
      protein: '',
      fat: '',
      isEditable: true,
    };
    currentFood.push(newFoodElement);
   };

  return (
    <Section>
      <Container>
        <MainHeaderBlock>
          <BackLink to={backLinkLocationRef.current}>
            <ArrowReturn src={arrowRight} alt="arrow right" />
          </BackLink>
          <MainHeader>
            Diary
          </MainHeader>
        </MainHeaderBlock>
        <FoodSection>
          <FoodBlock>
            <FoodBlockHeader>
              <Lol>
                <Img src={breakfast} alt="Breakfast" />
                <FoodHeader>Breakfast</FoodHeader>
              </Lol>
              <Kek>
              <ElementTitle>Carbonohidrates: {carbonohidrates.breakfast}</ElementTitle>
              <ElementTitle>Protein: {protein.breakfast} </ElementTitle>
              <ElementTitle>Fat: {fat.breakfast}</ElementTitle>
              </Kek>
              <div></div>
            </FoodBlockHeader>
            <List>
              <Element>
                {breakfastFood.map(food => <Form onSubmit={addFoodForm} type="breakfast" value={food} onAddElement={setAddFoodButton}/>)}
                {addFoodButton && <AddFoodButton onClick={() => toggleFoodButton('breakfast')}>+ Record your meal</AddFoodButton>}     
              </Element>
            </List>
          </FoodBlock>
          <FoodBlock>
          <FoodBlockHeader>
            <Lol>
              <Img src={dinner} alt="Dinner" />
              <FoodHeader>Dinner</FoodHeader>
            </Lol>
            <Kek>
              <ElementTitle>Carbonohidrates: {carbonohidrates.dinner} </ElementTitle>
                <ElementTitle>Protein: {protein.dinner} </ElementTitle>
                <ElementTitle>Fat: {fat.dinner} </ElementTitle>
            </Kek>
            <div></div>
            </FoodBlockHeader>
            <List>
            <Element>
            {dinnerFood.map(food => <Form onSubmit={addFoodForm} type="dinner" value={food} onAddElement={setAddFoodButtonDinner}/>)}
            {addFoodButtonDinner && <AddFoodButton onClick={() => toggleFoodButton('dinner')}>+ Record your meal</AddFoodButton>}     
            </Element>
            </List>
          </FoodBlock>
          <FoodBlock>
          <FoodBlockHeader>
            <Lol>
              <Img src={lunch} alt="Lunch" />
              <FoodHeader>Lunch</FoodHeader>
            </Lol>
            <Kek>
              <ElementTitle>Carbonohidrates: {carbonohidrates.lunch} </ElementTitle>
                <ElementTitle>Protein: {protein.lunch}</ElementTitle>
                <ElementTitle>Fat: {fat.lunch} </ElementTitle>
                </Kek>
                <div></div>
            </FoodBlockHeader>
            <List>
            <Element>
            {lunchFood.map(food => <Form onSubmit={addFoodForm} type="lunch" value={food} onAddElement={setAddFoodButtonLunch}/>)}
            {addFoodButtonLunch && <AddFoodButton onClick={() => toggleFoodButton('lunch')}>+ Record your meal</AddFoodButton>}     
            </Element>
            </List>
          </FoodBlock>
          <FoodBlock>
          <FoodBlockHeader>
          <Lol>
          <Img src={snack} alt="Snack" />
              <FoodHeader>Snack</FoodHeader>
          </Lol>
          <Kek>
              <ElementTitle>Carbonohidrates: {carbonohidrates.snack} </ElementTitle>
                <ElementTitle>Protein: {protein.snack}</ElementTitle>
                <ElementTitle>Fat: {fat.snack} </ElementTitle>
                </Kek>
                <div></div>
            </FoodBlockHeader>
            <List>
            <Element>
            {snackFood.map(food => <Form onSubmit={addFoodForm} type="snack" value={food} onAddElement={setAddFoodButtonSnack}/>)}
            {addFoodButtonSnack && <AddFoodButton onClick={() => toggleFoodButton('snack')}>+ Record your meal</AddFoodButton>}     
            </Element>
            </List>
          </FoodBlock>
        </FoodSection>
      </Container>
    </Section>
  );
};

export default DiaryPage;