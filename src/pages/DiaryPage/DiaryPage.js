import React from "react";
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Form from '../../components/Diary/DiaryForm';
import breakfast from '../../images/diaryPageImages/breakfast.png';
import dinner from '../../images/diaryPageImages/dinner.png';
import lunch from '../../images/diaryPageImages/lunch.png';
import snack from '../../images/diaryPageImages/snack.png';
import arrowRight from '../../images/diaryPageImages/arrow-right.svg';
import { ItemToAdd } from "../../components/DiaryPageItemsToAdd/ItemsToAdd";
import { selectConsumedMacronutrientsPerDay } from '../../redux/Statistics/statisticsSelectors';
import { useSelector } from 'react-redux';

import {
  Section,
  Container,
  MainHeaderBlock,
  MainHeader,
  FoodSection,
  FoodBlock,
  FoodBlockHeader,
  FoodHeader,
  List,
  Element,
  // ElementTitle,
  Img,
  AddFoodButton,
  BackLink,
  ArrowReturn,
  Div1,
  Div2,
} from './DiaryPage.styled';


const DiaryPage = () => {

  const consumedMacronutrients = useSelector(selectConsumedMacronutrientsPerDay);
  const {
    breakfast: breakfastInfo,
    lunch: lunchInfo,
    dinner: dinnerInfo,
    snack: snackInfo,
  } = consumedMacronutrients;

   console.log(consumedMacronutrients.lunch);
   console.log(consumedMacronutrients.breakfast);
   console.log(consumedMacronutrients.snack);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');
  // const info = useSelector(selectStatsInfo);

  const [breakfastFood] = useState([]);
  const [dinnerFood] = useState([]);
  const [lunchFood] = useState([]);
  const [snackFood] = useState([]);
  const [addFoodButton, setAddFoodButton] = useState(true);
  const [addFoodButtonDinner, setAddFoodButtonDinner] = useState(true);
  const [addFoodButtonLunch, setAddFoodButtonLunch] = useState(true);
  const [addFoodButtonSnack, setAddFoodButtonSnack] = useState(true);

  function getFood(type) {
    if (type==="Breakfast") {
      return breakfastFood;
    } else if (type==="Dinner") {
      return dinnerFood;
    } else if (type==="Lunch") {
      return lunchFood;
    } else if (type==="Snack") {
      return snackFood;
    };
  };

  const toggleFoodButton = (type) => {

    if (type==='Breakfast') {
    setAddFoodButton(!addFoodButton);
  } else if (type==='Dinner') {
    setAddFoodButtonDinner(!addFoodButtonDinner);
  } else if (type==='Lunch') {
    setAddFoodButtonLunch(!addFoodButtonLunch);
  } else if (type==='Snack') {
    setAddFoodButtonSnack(!addFoodButtonSnack);
  };
    
    // currentFood - це масив їжі, яка відноситься до конкретного типу (брекфест, діннер і тд)
    const currentFood = getFood(type);

    const newFoodElement = {
      number: currentFood.length === 0 ? 1 : currentFood[currentFood.length - 1].number + 1,
      mealName: '',
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
              <Div1>
                <Img src={breakfast} alt="Breakfast" />
                <FoodHeader>Breakfast</FoodHeader>
              </Div1>
              <Div2>
              <ItemToAdd 
              info={breakfastInfo} />
              </Div2>
              <div></div>
            </FoodBlockHeader>
            <List>
              <Element>
                {breakfastFood.map(food => <Form type="Breakfast" value={food} onAddElement={setAddFoodButton}/>)}
                {addFoodButton && <AddFoodButton onClick={() => toggleFoodButton('Breakfast')}>+ Record your meal</AddFoodButton>}     
              </Element>
            </List>
          </FoodBlock>
          <FoodBlock>
          <FoodBlockHeader>
            <Div1>
              <Img src={dinner} alt="Dinner" />
              <FoodHeader>Dinner</FoodHeader>
            </Div1>
            <Div2>
            <ItemToAdd 
              info={dinnerInfo} />
            </Div2>
            <div></div>
            </FoodBlockHeader>
            <List>
            <Element>
            {dinnerFood.map(food => <Form type="Dinner" value={food} onAddElement={setAddFoodButtonDinner}/>)}
            {addFoodButtonDinner && <AddFoodButton onClick={() => toggleFoodButton('Dinner')}>+ Record your meal</AddFoodButton>}     
            </Element>
            </List>
          </FoodBlock>
          <FoodBlock>
          <FoodBlockHeader>
            <Div1>
              <Img src={lunch} alt="Lunch" />
              <FoodHeader>Lunch</FoodHeader>
            </Div1>
             <Div2>
             <ItemToAdd 
              info={lunchInfo} />
             </Div2>
            <div></div>
            </FoodBlockHeader>
            <List>
            <Element>
            {lunchFood.map(food => <Form type="Lunch" value={food} onAddElement={setAddFoodButtonLunch}/>)}
            {addFoodButtonLunch && <AddFoodButton onClick={() => toggleFoodButton('Lunch')}>+ Record your meal</AddFoodButton>}     
            </Element>
            </List>
          </FoodBlock>
          <FoodBlock>
          <FoodBlockHeader>
          <Div1>
          <Img src={snack} alt="Snack" />
              <FoodHeader>Snack</FoodHeader>
          </Div1>
          <Div2>
          <ItemToAdd 
              info={snackInfo} />
                </Div2>
                <div></div>
            </FoodBlockHeader>
            <List>
            <Element>
            {snackFood.map(food => <Form type="Snack" value={food} onAddElement={setAddFoodButtonSnack}/>)}
            {addFoodButtonSnack && <AddFoodButton onClick={() => toggleFoodButton('Snack')}>+ Record your meal</AddFoodButton>}     
            </Element>
            </List>
          </FoodBlock>
        </FoodSection>
      </Container>
    </Section>
  );
};

export default DiaryPage;

