import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

export const getStats = createAsyncThunk(
  'stats/getAll',
  async (time, thunkAPI) => {
    const state = thunkAPI.getState();
    const userToken = state.auth.token;
    // const userToken =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDg1MmVhOWQyNzgwZTQ4MGE4NjRjZiIsImlhdCI6MTY5NTc1MzA3OSwiZXhwIjoxNjk1ODM1ODc5fQ.MD5F4YBZ9aMW_223hOUuwAcwe8iVdozwezGD2BirElY';

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
