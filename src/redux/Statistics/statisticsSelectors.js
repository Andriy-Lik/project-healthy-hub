import { createSelector } from '@reduxjs/toolkit';

export const selectStatsInfo = state => {
  return state.stats.info;
};

export const selectStatsIsLoading = state => state.stats.isLoading;

//////Нові селектори(потрібно тестити)//////////
export const selectStatsConsumedWaterPerDay = createSelector(
  [selectStatsIsLoading, selectStatsInfo],
  (isLoading, info) => {
    if (isLoading) return 0;

    const keys = Object.keys(info);

    for (const key of keys) {
      if (key === 'water') {
        for (const entry of info[key]) {
          return entry.water;
        }
      }
    }
  }
);

export const selectIntakeFoodPerDay = createSelector(
  [selectStatsInfo],
  generalStats => {
    return generalStats.food;
  }
);

export const selectConsumedProductsForDinner = createSelector(
  [selectIntakeFoodPerDay],
  intekeFood => {
    const consumedProductsForDinner = intekeFood.filter(
      ({ mealType }) => mealType === 'Dinner'
    );
    return consumedProductsForDinner;
  }
);

export const selectConsumedProductsForDinnerFat = createSelector(
  [selectConsumedProductsForDinner],
  products => {
    const fat = products.reduce((acc, product) => (acc += product.fat), 0);
    return fat;
  }
);
