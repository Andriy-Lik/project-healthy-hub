import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  currentUser,
  updateUser,
  forgotPassword,
  updateAvatar,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
    goal: null,
    gender: null,
    age: null,
    weight: null,
    height: null,
    activity: null,
    bmr: null,
    fat: null,
    protein: null,
    cabohydrate: null,
    avatarURL: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNewUserName: (state, action) => {
      state.user.name = action.payload;
    },
    setNewUserEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setNewUserPassword: (state, action) => {
      state.user.password = action.payload;
    },
    setNewUserGoal: (state, action) => {
      state.user.goal = action.payload;
    },
    setNewUserAge: (state, action) => {
      state.user.age = action.payload;
    },
    setNewUserGender: (state, action) => {
      state.user.gender = action.payload;
    },
    setNewUserHeight: (state, action) => {
      state.user.height = action.payload;
    },
    setNewUserWeight: (state, action) => {
      state.user.weight = action.payload;
    },
    setNewUserActivity: (state, action) => {
      state.user.activity = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
          password: null,
          goal: null,
          gender: null,
          age: null,
          weight: null,
          height: null,
          activity: null,
          bmr: null,
          fat: null,
          protein: null,
          cabohydrate: null,
          avatarURL: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(currentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.gender = payload.user.gender;
        state.user.age = payload.user.age;
        state.user.height = payload.user.height;
        state.user.weight = payload.user.weight;
        state.user.activity = payload.user.activity;
        state.user.avatarURL = payload.user.avatarURL;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.user.password = action.payload.user.password;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.user.avatarURL;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const {
  setNewUserName,
  setNewUserEmail,
  setNewUserPassword,
  setNewUserGoal,
  setNewUserAge,
  setNewUserGender,
  setNewUserHeight,
  setNewUserWeight,
  setNewUserActivity,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
