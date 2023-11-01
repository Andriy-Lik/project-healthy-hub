import React from "react";
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import breakfast from '../../images/diaryPageImages/breakfast.png';
import dinner from '../../images/diaryPageImages/dinner.png';
import lunch from '../../images/diaryPageImages/lunch.png';
import snack from '../../images/diaryPageImages/snack.png';
import arrowRight from '../../images/diaryPageImages/arrow-right.svg';
import { ItemToAdd } from "../../components/DiaryPageItemsToAdd/ItemsToAdd";
import { selectConsumedMacronutrientsPerDay, selectIntakeFoodPerDay } from '../../redux/Statistics/statisticsSelectors';
import RecordDiaryModal from "components/Modals/RecordDiaryModal/RecordDiaryModal";
import { useSelector } from 'react-redux';
import { ElementOfFood } from "../../components/Diary/ElementOfFood";


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
  Img,
  AddFoodButton,
  BackLink,
  ArrowReturn,
  Div1,
  Div2,
} from './DiaryPage.styled';


const DiaryPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleModal1 = () => setIsModalOpen1(!isModalOpen1);
  const toggleModal2 = () => setIsModalOpen2(!isModalOpen2);
  const toggleModal3 = () => setIsModalOpen3(!isModalOpen3);

  // const [count, setCount] = useState(1);
  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  const consumedMacronutrients = useSelector(selectConsumedMacronutrientsPerDay);
  const {
    breakfast: breakfastInfo,
    lunch: lunchInfo,
    dinner: dinnerInfo,
    snack: snackInfo,
  } = consumedMacronutrients;

  const foodIntake = useSelector(selectIntakeFoodPerDay)
  const breakfastFoodIntake = foodIntake.filter((value) => value.mealType === 'Breakfast' ).map(item => <ElementOfFood item={item} />)
  const dinnerFoodIntake = foodIntake.filter((value) => value.mealType === 'Dinner' ).map(item => <ElementOfFood item={item} />)
  const lunchFoodIntake = foodIntake.filter((value) => value.mealType === 'Lunch' ).map(item => <ElementOfFood item={item} />)
  const snackFoodIntake = foodIntake.filter((value) => value.mealType === 'Snack' ).map(item => <ElementOfFood item={item} />)

  // console.log(consumedMacronutrients)
  // console.log(foodIntake)
  // console.log(breakfastFoodIntake)

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

            {breakfastFoodIntake}
              <Element>
              <AddFoodButton onClick={toggleModal}>+ Record your meal</AddFoodButton>
              {isModalOpen && (
              <RecordDiaryModal onClose={toggleModal} image={ breakfast } mealType={ 'Breakfast' } item={foodIntake}/>)}           
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
            {dinnerFoodIntake}
            <Element>
            <AddFoodButton onClick={toggleModal1}>+ Record your meal</AddFoodButton>
              {isModalOpen1 && (
              <RecordDiaryModal onClose={toggleModal1} image= { dinner } mealType={ 'Dinner' } item={foodIntake}/>)} 
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
            {lunchFoodIntake}
            <Element>
            <AddFoodButton onClick={toggleModal2}>+ Record your meal</AddFoodButton>
              {isModalOpen2 && (
              <RecordDiaryModal onClose={toggleModal2} image={ lunch } mealType={ 'Lunch' } item={foodIntake}/>)}   
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
            {snackFoodIntake}
            <Element>
              <AddFoodButton onClick={toggleModal3}>+ Record your meal</AddFoodButton>
              {isModalOpen3 && (
              <RecordDiaryModal onClose={toggleModal3} image={ snack } mealType={ 'Snack' } item={foodIntake}/>)}    
            </Element>
            </List>
          </FoodBlock>
        </FoodSection>
      </Container>
    </Section>
  );
};

export default DiaryPage;

