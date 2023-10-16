import { useState } from 'react';
import edit from '../../images/diaryPageImages/edit-2.svg'

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
   const [id] = useState(value?.id)
   const [name, setName] = useState(value?.name)
   const [carbon, setCarbon] = useState(value?.carbon)
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
    onSubmit(name, carbon, protein, fat, type);
    setFormActive(!isFormActive);
    onAddElement(true);

    const food = {
      id: value.id,
      name: name,
      carbon: carbon,
      protein: protein,
      fat: fat,
      isEditable: false,
    }

    const foodTypeItem = window.localStorage.getItem(type);
    if (foodTypeItem) {
       const foodType = JSON.parse(foodTypeItem);

       let foundFood = foodType.find((foodItem) => foodItem.id === food.id);
       if (foundFood) {
        foundFood.name = food.name;
        foundFood.carbon = food.carbon;
        foundFood.protein = food.protein;
        foundFood.fat = food.fat;

       } else {
        foodType.push(food);
       }
       window.localStorage.setItem(type, JSON.stringify(foodType));
    } else {
      const foodType = [food];
      window.localStorage.setItem(type, JSON.stringify(foodType));
    };
  };

   return (
    <FormForm >
    <label>
      <Input
        type="number"
        value={id}
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