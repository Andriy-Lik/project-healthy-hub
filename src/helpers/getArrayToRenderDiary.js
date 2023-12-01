export const getArrayToRenderDiary = (foodArray, mealType) => {
  const result =
    foodArray.length <= 3
      ? [
          ...foodArray,
          ...Array(1).fill({
            mealType,
            showButton: true,
          }),
          ...Array(3 - foodArray.length).fill({}),
        ]
      : [
          ...foodArray,
          ...Array(1).fill({
            mealType,
            showButton: true,
          }),
        ];
  return result;
};
