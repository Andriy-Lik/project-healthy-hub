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
  DashboardSection,
  DashboardContainer,
  MainHeaderBlock,
  MainHeader,
  ChartsBlock,
  Li,
  ChartsContainer,
  ChartsHeader,
  ChartsTitle,
  Charts,
  List,
  Img,
  AddFoodButton,
  BackLink,
  ArrowReturn,
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
  const backLink = useRef(location.state?.from ?? '');

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
    <DashboardSection>
      <DashboardContainer>
        <MainHeaderBlock>
          <BackLink to={backLink.current}>
            <ArrowReturn src={arrowRight} alt="arrow right" />
          </BackLink>
          <MainHeader>
            Diary
          </MainHeader>
        </MainHeaderBlock>
        <ChartsBlock>
          <Li>
            <ChartsContainer>
            <Img src={breakfast} alt="Breakfast" />
              <ChartsHeader>Breakfast</ChartsHeader>
                <ChartsTitle>Carbonohidrates: {carbonohidrates.breakfast}</ChartsTitle>
                <ChartsTitle>Protein: {protein.breakfast} </ChartsTitle>
                <ChartsTitle>Fat: {fat.breakfast}</ChartsTitle>
            </ChartsContainer>
            <Charts>
            <List>
            {breakfastFood.map(food => <Form onSubmit={addFoodForm} type="breakfast" value={food} onAddElement={setAddFoodButton}/>)}
            {addFoodButton && <AddFoodButton onClick={() => toggleFoodButton('breakfast')}>+ Record your meal</AddFoodButton>}     
            </List>
            </Charts>
          </Li>
          <Li>
          <ChartsContainer>
          <Img src={dinner} alt="Dinner" />
              <ChartsHeader>Dinner</ChartsHeader>
              <ChartsTitle>Carbonohidrates: {carbonohidrates.dinner} </ChartsTitle>
                <ChartsTitle>Protein: {protein.dinner} </ChartsTitle>
                <ChartsTitle>Fat: {fat.dinner} </ChartsTitle>
            </ChartsContainer>
            <Charts>
            <List>
            {dinnerFood.map(food => <Form onSubmit={addFoodForm} type="dinner" value={food} onAddElement={setAddFoodButtonDinner}/>)}
            {addFoodButtonDinner && <AddFoodButton onClick={() => toggleFoodButton('dinner')}>+ Record your meal</AddFoodButton>}     
            </List>
            </Charts>
          </Li>
          <Li>
          <ChartsContainer>
          <Img src={lunch} alt="Lunch" />
              <ChartsHeader>Lunch</ChartsHeader>
              <ChartsTitle>Carbonohidrates: {carbonohidrates.lunch} </ChartsTitle>
                <ChartsTitle>Protein: {protein.lunch}</ChartsTitle>
                <ChartsTitle>Fat: {fat.lunch} </ChartsTitle>
            </ChartsContainer>
            <Charts>
            <List>
            {lunchFood.map(food => <Form onSubmit={addFoodForm} type="lunch" value={food} onAddElement={setAddFoodButtonLunch}/>)}
            {addFoodButtonLunch && <AddFoodButton onClick={() => toggleFoodButton('lunch')}>+ Record your meal</AddFoodButton>}     
            </List>
            </Charts>
          </Li>
          <Li>
          <ChartsContainer>
          <Img src={snack} alt="Snack" />
              <ChartsHeader>Snack</ChartsHeader>
              <ChartsTitle>Carbonohidrates: {carbonohidrates.snack} </ChartsTitle>
                <ChartsTitle>Protein: {protein.snack}</ChartsTitle>
                <ChartsTitle>Fat: {fat.snack} </ChartsTitle>
            </ChartsContainer>
            <Charts>
            <List>
            {snackFood.map(food => <Form onSubmit={addFoodForm} type="snack" value={food} onAddElement={setAddFoodButtonSnack}/>)}
            {addFoodButtonSnack && <AddFoodButton onClick={() => toggleFoodButton('snack')}>+ Record your meal</AddFoodButton>}     
            </List>
            </Charts>
          </Li>
        </ChartsBlock>
      </DashboardContainer>
    </DashboardSection>
  );
};

export default DiaryPage;