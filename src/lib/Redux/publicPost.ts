'use client'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { categories } from './categoriesPost';
import axios from 'axios';

export const getPublicPosts = createAsyncThunk('getPublicPosts', async (payload: any) => {
    try {
        const { data } = await axios.post("/api/post", payload);
        return data;

    } catch (error) {
        console.log(error)
        return error;
    }
});


const init = {
    isLoading: false,
    isError: false,
    newPost: false,
    data: [],
    loadPages: [1],
    currentPage: 1,
    totalPages: 0,
    categories
}
export const publicPostSlice = createSlice({
    name: 'publicPost',
    initialState: init,
    reducers: {
        getPublicPostLocal: (state, action) => {
            const res = state.loadPages.find((page) => page == action.payload);
            state.currentPage = action.payload;
            state.loadPages = state.loadPages.sort((a, b) => a - b);
            if (res == undefined) {
                state.loadPages.push(action.payload);
                state.currentPage = action.payload;
            }
        },
        initPublicPost: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.newPost = false;
            state.data = [];
            state.loadPages = [1];
            state.currentPage = 1;
            state.totalPages = 0;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPublicPosts.fulfilled, (state: any, action) => {
            state.isLoading = false;
            state.newPost = false;
            const oldLength = state.totalPages;
            state.totalPages = action?.payload?.totalPages;
            if (state.totalPages != oldLength) {
                state.data = Array.from({ length: state.totalPages }, () => 0);
            }
            state.data.splice((state.currentPage - 1), 1, action.payload);
        })

        builder.addCase(getPublicPosts.pending, (state: any) => {
            state.isLoading = true
        })

        builder.addCase(getPublicPosts.rejected, (state: any, action) => {
            console.log("error found ", action.payload);
            state.isError = true;
        })
    }
});


export const { initPublicPost, getPublicPostLocal} = publicPostSlice.actions;

export default publicPostSlice.reducer;