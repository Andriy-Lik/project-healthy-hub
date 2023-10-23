import { useState } from 'react';
import edit from '../../images/diaryPageImages/edit-2.svg'
import { useDispatch } from "react-redux";
import {addFood} from 'redux/Foods/foodsOperations'

import {
  FormForm,
    Input,
    Input1,
    Input2,
    SubmitButton,
    Img,
    EditButton,
  } from './DiaryForm.styled';


export default function Form({onSubmit, type, value, onAddElement}) {

  const dispatch = useDispatch();


   const [number] = useState(value?.number)
   const [name, setName] = useState(value?.mealName)
   const [carbon, setCarbon] = useState(value?.carbohydrate)
   const [protein, setProtein] = useState(value?.protein)
   const [fat, setFat] = useState(value?.fat)
   const [isFormActive, setFormActive] = useState(value?.isEditable);


  const handleName = e => {
    setName(e.target.value);
  };

  const handleCurbon = e => {
    setCarbon(e.target.value);
  };

  const handleProtein = e => {
    setProtein(e.target.value);
  };

  const handleFat = e => {
    setFat(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(carbon, protein, fat, type);
    setFormActive(!isFormActive);
    onAddElement(true);

    const foodToDisplay = {
      number: value.number,
      mealType: type,
      mealName: name,
      carbohydrate: carbon,
      protein: protein,
      fat: fat,
      calories: Math.random(2000).toString(),
      isEditable: false,
    }

    const foodToSend = {
      mealType: type,
      mealName: name,
      carbohydrate: carbon,
      protein: protein,
      fat: fat,
      calories: Math.random(2000).toString(),
    }

    const foodTypeItem = window.localStorage.getItem(type);
    if (foodTypeItem) {
       const foodType = JSON.parse(foodTypeItem);

       let foundFood = foodType.find((foodItem) => foodItem.number === foodToDisplay.number);
       if (foundFood) {
        foundFood.mealType = foodToDisplay.mealType;
        foundFood.mealName = foodToDisplay.mealName;
        foundFood.carbohydrate = foodToDisplay.carbohydrate;
        foundFood.protein = foodToDisplay.protein;
        foundFood.fat = foodToDisplay.fat;
        foundFood.calories = foodToDisplay.calories;

       } else {
        dispatch(addFood(foodToSend));
        foodType.push(foodToDisplay);
       }
       window.localStorage.setItem(type, JSON.stringify(foodType));
    } else {
      dispatch(addFood(foodToSend));
      const foods = [foodToDisplay];
      window.localStorage.setItem(type, JSON.stringify(foods));
    };
  };

   return (
    <FormForm >
    <label>
      <Input
        type="number"
        value={number}
        disabled={true}/>
    </label>  
    <label>
      <Input1
        onChange={handleName}
        type="text"
        name="name"
        value={name}
        disabled={!isFormActive}
      />
    </label>
    <label>
      <Input2
        onChange={handleCurbon}
        type="number"
        value={carbon}
        disabled={!isFormActive}
      />
    </label>
    <label>
      <Input2
        onChange={handleProtein}
        type="number"
        value={protein}
        disabled={!isFormActive}
      />
    </label>
    <label>
      <Input2
        onChange={handleFat}
        type="number"
        value={fat}
        disabled={!isFormActive}/>
    </label>
    {isFormActive && <SubmitButton type="submit" onClick={handleSubmit}>✅</SubmitButton>}
    {!isFormActive && <EditButton  onClick={() => setFormActive(true)}><Img src={edit} alt="Edit"/>Edit</EditButton>}
  </FormForm>
   )
}