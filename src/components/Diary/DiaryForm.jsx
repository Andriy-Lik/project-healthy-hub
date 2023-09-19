import { useState, useEffect } from 'react';
import edit from '../../pages/DiaryPage/images/edit-2.svg'

import {
    Input1,
    Input2,
    SubmitButton,
    Img,
    EditButton,
  } from './DiaryForm.styled';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState]
// }

export default function Form({onSubmit, type}) {
   const [name, setName] = useState('');
   const [carbon, setCarbon] = useState(0);
   const [protein, setProtein] = useState(0);
   const [fat, setFat] = useState(0);
   const [showButton, setShowButton] = useState(true);


  //  useEffect(() => {
  //   const food = localStorage.getItem('food');
  //   const parsedFood = JSON.parse(food);

  //   parsedFood ? setFood(parsedFood) : setFood([]);
  // }, []);

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);


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
    setShowButton(!showButton);
  };

   return (
    <form >
    <label>
      <Input1
        onChange={handleName}
        type="text"
        name="name"
        value={name}
      />
    </label>
    <label>
      <Input2
        onChange={handleCurbon}
        type="number"
        value={carbon}
      />
    </label>
    <label>
      <Input2
        onChange={handleProtein}
        type="number"
        value={protein}
      />
    </label>
    <label>
      <Input2
        onChange={handleFat}
        type="number"
        value={fat}
      />
    </label>
    {showButton && <SubmitButton type="submit" onClick={handleSubmit}>✅</SubmitButton>}
    {!showButton && <EditButton><Img src={edit} alt="Edit" />Edit</EditButton>}
  </form>
   )
}