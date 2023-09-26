import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

export const getStats = createAsyncThunk(
  'stats/getAll',
  async (time, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const userToken = state.auth.token;
    const userToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDg1MmVhOWQyNzgwZTQ4MGE4NjRjZiIsImlhdCI6MTY5NTY4NjI1MCwiZXhwIjoxNjk1NzY5MDUwfQ.6Dc0X9nWUOhgC6yq4m9Pyf770V1XNIlR100MSMgHJTE';

    if (userToken === null) {
      return thunkAPI.rejectWithValue('Failed to get information');
    }

    try {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${userToken}`,
      };
      const { data } = await axios.get(`/api/user/statistics?period=${time}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
