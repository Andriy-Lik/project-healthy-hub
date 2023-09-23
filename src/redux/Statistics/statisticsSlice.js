import { createSlice } from '@reduxjs/toolkit';
import { getStats } from './statisticsOperations';

const statsInitialState = {
  info: [],
};

const statsSlice = createSlice({
  name: 'stats',
  initialState: statsInitialState,
  extraReducers: builder => {
    builder.addCase(getStats.fulfilled, (state, action) => {    
      state.info = action.payload;
    });
  },
});

export const statsReducer = statsSlice.reducer;
