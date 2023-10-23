import React from "react";
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Form from '../../components/Diary/DiaryForm';
import breakfast from '../../images/diaryPageImages/breakfast.png';
import dinner from '../../images/diaryPageImages/dinner.png';
import lunch from '../../images/diaryPageImages/lunch.png';
import snack from '../../images/diaryPageImages/snack.png';
import arrowRight from '../../images/diaryPageImages/arrow-right.svg';

// import { useSelector } from 'react-redux';
// import { selectStatsInfo } from '../../redux/Statistics/statisticsSelectors';


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
  Div1,
  Div2,
} from './DiaryPage.styled';


const DiaryPage = () => {

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');
  // const info = useSelector(selectStatsInfo);

  const breakfastItem = window.localStorage.getItem('Breakfast') ?? '[]';
  const dinnerItem = window.localStorage.getItem('Dinner') ?? '[]';
  const lunchItem = window.localStorage.getItem('Lunch') ?? '[]';
  const snackItem = window.localStorage.getItem('Snack') ?? '[]';
  const [breakfastFood] = useState(JSON.parse(breakfastItem));
  const [dinnerFood] = useState(JSON.parse(dinnerItem));
  const [lunchFood] = useState(JSON.parse(lunchItem));
  const [snackFood] = useState(JSON.parse(snackItem));

  // const [breakfastFood] = useState([]);
  // const [dinnerFood] = useState([]);
  // const [lunchFood] = useState([]);
  // const [snackFood] = useState([]);
  const [addFoodButton, setAddFoodButton] = useState(true);
  const [addFoodButtonDinner, setAddFoodButtonDinner] = useState(true);
  const [addFoodButtonLunch, setAddFoodButtonLunch] = useState(true);
  const [addFoodButtonSnack, setAddFoodButtonSnack] = useState(true);

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
    if (type==="Breakfast") {
      setCarbonohidrates({ ...carbonohidrates, breakfast: carbon});
      setProtein({ ...protein, breakfast: proteinNumber});
      setFat({ ...fat, breakfast: fatNumber});

    } else if (type==="Dinner") {
      setCarbonohidrates({ ...carbonohidrates, dinner: carbon});
      setProtein({ ...protein, dinner: proteinNumber});
      setFat({ ...fat, dinner: fatNumber});

    } else if (type==="Lunch") {
      setCarbonohidrates({ ...carbonohidrates, lunch: carbon});
      setProtein({ ...protein, lunch: proteinNumber});
      setFat({ ...fat, lunch: fatNumber});

    } else if (type==="Snack") {
      setCarbonohidrates({ ...carbonohidrates, snack: carbon});
      setProtein({ ...protein, snack: proteinNumber});
      setFat({ ...fat, snack: fatNumber});
    };   
  };


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
 }


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
              <ElementTitle>Carbonohidrates: {carbonohidrates.breakfast}</ElementTitle>
              <ElementTitle>Protein: {protein.breakfast} </ElementTitle>
              <ElementTitle>Fat: {fat.breakfast}</ElementTitle>
              </Div2>
              <div></div>
            </FoodBlockHeader>
            <List>
              <Element>
                {breakfastFood.map(food => <Form onSubmit={addFoodForm} type="Breakfast" value={food} onAddElement={setAddFoodButton}/>)}
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
              <ElementTitle>Carbonohidrates: {carbonohidrates.dinner} </ElementTitle>
                <ElementTitle>Protein: {protein.dinner} </ElementTitle>
                <ElementTitle>Fat: {fat.dinner} </ElementTitle>
            </Div2>
            <div></div>
            </FoodBlockHeader>
            <List>
            <Element>
            {dinnerFood.map(food => <Form onSubmit={addFoodForm} type="Dinner" value={food} onAddElement={setAddFoodButtonDinner}/>)}
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
              <ElementTitle>Carbonohidrates: {carbonohidrates.lunch} </ElementTitle>
                <ElementTitle>Protein: {protein.lunch}</ElementTitle>
                <ElementTitle>Fat: {fat.lunch} </ElementTitle>
                </Div2>
                <div></div>
            </FoodBlockHeader>
            <List>
            <Element>
            {lunchFood.map(food => <Form onSubmit={addFoodForm} type="Lunch" value={food} onAddElement={setAddFoodButtonLunch}/>)}
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
              <ElementTitle>Carbonohidrates: {carbonohidrates.snack} </ElementTitle>
                <ElementTitle>Protein: {protein.snack}</ElementTitle>
                <ElementTitle>Fat: {fat.snack} </ElementTitle>
                </Div2>
                <div></div>
            </FoodBlockHeader>
            <List>
            <Element>
            {snackFood.map(food => <Form onSubmit={addFoodForm} type="Snack" value={food} onAddElement={setAddFoodButtonSnack}/>)}
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


  // const breakfastItem = window.localStorage.getItem('Breakfast') ?? '[]';
  // const dinnerItem = window.localStorage.getItem('Dinner') ?? '[]';
  // const lunchItem = window.localStorage.getItem('Lunch') ?? '[]';
  // const snackItem = window.localStorage.getItem('Snack') ?? '[]';
  // const breakfastItem = [];
  // const dinnerItem = [];
  // const lunchItem = [];
  // const snackItem = [];
  // const [breakfastFood] = useState(JSON.parse(breakfastItem));
  // const [dinnerFood] = useState(JSON.parse(dinnerItem));
  // const [lunchFood] = useState(JSON.parse(lunchItem));
  // const [snackFood] = useState(JSON.parse(snackItem));
