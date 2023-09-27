import { createSlice } from '@reduxjs/toolkit';
import { getRecomendedFood } from './recomendedFoodOperations';

const InitialState = {
  info: [],
};

const recomendedFoodSlice = createSlice({
  name: 'recomendedFood',
  initialState: InitialState,
  extraReducers: builder => {
    builder.addCase(getRecomendedFood.fulfilled, (state, action) => {
      state.info = action.payload;
    });
  },
});

export const recomendedFoodReducer = recomendedFoodSlice.reducer;
