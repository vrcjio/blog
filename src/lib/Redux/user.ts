'use client'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userSignInAPI } from '@/util/userAPIs'

export const setUserData = createAsyncThunk('setUserData', userSignInAPI);

const initialState = {
    isLoading: false,
    data: null,
    isError: false,
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser: (state) => {
            state.isLoading = false;
            state.data = null;
            state.isError = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setUserData.fulfilled, (state: any, action) => {
            state.isLoading = false,
                state.data = action.payload.data
        })

        builder.addCase(setUserData.pending, (state: any) => {
            state.isLoading = true
        })

        builder.addCase(setUserData.rejected, (state: any, action) => {
            state.isError = true;
        })
    }
});


export const { initUser } = userSlice.actions;
export default userSlice.reducer;