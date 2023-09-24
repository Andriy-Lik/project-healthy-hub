import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

export const getStats = createAsyncThunk(
  'stats/getAll',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const userToken = state.auth.token;
    const userToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDg1MmVhOWQyNzgwZTQ4MGE4NjRjZiIsImlhdCI6MTY5NTQ4NDc4NiwiZXhwIjoxNjk1NTY3NTg2fQ.p803XzSjYjGv26uhxeWV1CPRv9ZSA2j6pRnQ_m1BSZE';

    if (userToken === null) {
      return thunkAPI.rejectWithValue('Failed to get information');
    }

    try {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${userToken}`,
      };
      const { data } = await axios.get('/api/user/statistics');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
