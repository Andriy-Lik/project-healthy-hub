import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/register', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const currentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    
    try {
        setAuthHeader(tokenCurrent);
        const response = await axios.get('/users/current');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const updateUser = createAsyncThunk('auth/updateUser', async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
        setAuthHeader(tokenCurrent);
        const response = await axios.patch('/users/update', data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (password, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(tokenCurrent);
        const response = await axios.patch('/users/forgotpassword', { forgotpassword: password});
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const updateAvatar = createAsyncThunk('auth/updateAvatar', async (avatarURL, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(tokenCurrent);
        const response = await axios.patch('/users/avatars', { avatars: avatarURL});
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addWeight = createAsyncThunk('auth/weight', async (inputWeight, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(tokenCurrent);
        const response = await axios.post('/api/user/weight', { weight: inputWeight });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const updateGoal = createAsyncThunk('auth/goal', async (selectedGoal, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(tokenCurrent);
        const response = await axios.post('/users/goal', { goal: selectedGoal });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});