import { createSlice } from '@reduxjs/toolkit';
import { getRecomendedFood } from './recomendedFoodOperations';

const InitialState = {
  info: [],
  isLoading: false,
  error: null,
};

const recomendedFoodSlice = createSlice({
  name: 'recomendedFood',
  initialState: InitialState,
  extraReducers: builder => {
    builder
      .addCase(getRecomendedFood.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecomendedFood.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecomendedFood.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const recomendedFoodReducer = recomendedFoodSlice.reducer;
