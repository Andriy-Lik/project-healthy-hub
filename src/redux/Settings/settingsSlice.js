import { createSlice } from "@reduxjs/toolkit";
import { updateUserProfile } from './settingsOperations';

const settingsSlice = createSlice({
    name: "settings",

    initialState: {
        userProfile: [],
    },

    extraReducers: (builder) => {
        builder
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.userProfile = action.payload;
            })
    },
});

export const settingsReducer = settingsSlice.reducer;