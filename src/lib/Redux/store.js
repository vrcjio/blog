'use client'
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import postSlice from "./post";
import editorSlice from "./editorData";
import systemSlice from "./systemSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        post:postSlice,
        editor:editorSlice,
        system:systemSlice,
    }
});

