import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

export const addFood = createAsyncThunk("foods/addFood", async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(tokenCurrent);
        const response = await axios.post("/api/user/food-intake", data);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const updateFood = createAsyncThunk("foods/updateFood", async (foodId, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(tokenCurrent);
        const response = await axios.put(`/api/user/food-intake/${foodId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});