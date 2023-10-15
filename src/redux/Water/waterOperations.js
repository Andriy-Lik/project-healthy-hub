import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addWater = createAsyncThunk(
  'water/addWater',
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(tokenCurrent);
      const response = await axios.post('/api/user/water-intake', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
