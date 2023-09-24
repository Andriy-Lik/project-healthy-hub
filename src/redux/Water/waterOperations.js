import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

export const addWater = createAsyncThunk("water/addWater", async (data, thunkAPI) => {
    try {
        const response = await axios.post("/api/user/water-intake", data);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});