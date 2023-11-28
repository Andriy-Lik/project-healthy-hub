import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStats } from 'redux/Statistics/statisticsOperations';
import toastifyMessage from '../../helpers/toastify'

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', credentials);
      if (response.data) {
        const { email, password } = credentials;
        const { data } = await axios.post('/users/login', { email, password });
        setAuthHeader(data.token);
        thunkAPI.dispatch(getStats('today'));
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      thunkAPI.dispatch(getStats('today'));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(tokenCurrent);
      const response = await axios.get('/users/current');
      await thunkAPI.dispatch(getStats('today'));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch('/users/update', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (password, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(tokenCurrent);
      const response = await axios.patch('/users/forgotpassword', {
        forgotpassword: password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (avatarData, thunkAPI) => {
    try {
      const response = await axios.patch('/users/avatars', avatarData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(
        'updated avatarUrl: ',
        response.data,
        'this log is for checking data from the backend'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWeight = createAsyncThunk(
  'auth/weight',
  async (inputWeight, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(tokenCurrent);
      const response = await axios.post('/api/user/weight', {
        'weight': inputWeight,
      });
      toastifyMessage('success', 'Weight updated!');      
      return response.data;
    } catch (error) {   
      toastifyMessage('warn', 'You have already updated your weight!');      
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateGoal = createAsyncThunk(
  'auth/goal',
  async (selectedGoal, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurrent = state.auth.token;

    if (tokenCurrent === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(tokenCurrent);
      const response = await axios.patch('/users/goal', { 'goal': selectedGoal });  
      toastifyMessage('success', 'Goal updated!');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
