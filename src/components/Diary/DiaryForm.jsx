import { useState } from 'react';
import edit from '../../images/diaryPageImages/edit-2.svg'
import { useDispatch } from "react-redux";
import {addFood} from 'redux/Foods/foodsOperations'
import { getStats } from '../../redux/Statistics/statisticsOperations';

import {
  FormForm,
    Input,
    Input1,
    Input2,
    SubmitButton,
    Img,
    EditButton,
  } from './DiaryForm.styled';

export default function Form({type, value, onAddElement}) {

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
    setFormActive(!isFormActive);
    onAddElement(true);

    const food = {
      mealType: type,
      mealName: name,
      carbohydrate: carbon,
      protein: protein,
      fat: fat,
      calories: Math.random(2000).toString(),
    }
        dispatch(addFood(food));
        dispatch(getStats('today'));
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
        required
      />
    </label>
    <label>
      <Input2
        onChange={handleCurbon}
        type="number"
        value={carbon}
        disabled={!isFormActive}
        required
      />
    </label>
    <label>
      <Input2
        onChange={handleProtein}
        type="number"
        value={protein}
        disabled={!isFormActive}
        required
      />
    </label>
    <label>
      <Input2
        onChange={handleFat}
        type="number"
        value={fat}
        disabled={!isFormActive}
        required
        />
    </label>
    {isFormActive && <SubmitButton type="submit" onClick={handleSubmit}>✅</SubmitButton>}
    {!isFormActive && <EditButton  onClick={() => setFormActive(true)}><Img src={edit} alt="Edit"/>Edit</EditButton>}
  </FormForm>
   )
}