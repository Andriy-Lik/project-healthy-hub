export const randomizeFood = (array, quantity = 4) => {
  const randomNumbArr = [];

  while (randomNumbArr.length < quantity) {
    const randomNumb = Math.floor(Math.random() * array.length);

    if (!randomNumbArr.includes(randomNumb)) {
      randomNumbArr.push(randomNumb);
    }
  }

  return array.filter((_, idx) => randomNumbArr.includes(idx));
};
