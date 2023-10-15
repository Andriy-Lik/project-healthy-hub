import { createSlice } from '@reduxjs/toolkit';
import { addWater } from './waterOperations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    water: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(addWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.water.push(action.payload);
      })
      .addCase(addWater.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const waterReducer = waterSlice.reducer;
