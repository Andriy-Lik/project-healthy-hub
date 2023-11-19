import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

export const addFood = createAsyncThunk(
  'foods/addFood',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/api/user/food-intake', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateFood = createAsyncThunk(
  'foods/updateFood',
  async ({ foodId, data }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/user/food-intake/${foodId}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
