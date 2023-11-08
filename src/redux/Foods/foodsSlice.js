import { createSlice } from '@reduxjs/toolkit';
import { addFood, updateFood } from './foodsOperations';

const foodsSlice = createSlice({
  name: 'foods',
  initialState: {
    foods: {
      mealType: '',
      mealName: '',
      carbohydrate: '',
      protein: '',
      fat: '',
      calories: '',
    },
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(addFood.pending, state => {
        state.isLoading = true;
      })
      .addCase(addFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.foods = { ...action.payload };
      })
      .addCase(addFood.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateFood.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.foods.findIndex(
          food => food.id === action.payload.id
        );
        state.foods.splice(index, 1, action.payload);
      })
      .addCase(updateFood.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const foodsReducer = foodsSlice.reducer;
