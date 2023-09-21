import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

export const updateUserProfile = createAsyncThunk('settings/update', async (credentials, thunkAPI) => {
    try {
        const response = await axios.patch('/users/update', credentials);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});