import { createSlice } from '@reduxjs/toolkit';
import { getStats } from './statisticsOperations';

const statsInitialState = {
  info: {},
  isLoading: false,
  error: null,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState: statsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getStats.pending, state => {
        state.isLoading = true;
      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload;
      })
      .addCase(getStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const statsReducer = statsSlice.reducer;
