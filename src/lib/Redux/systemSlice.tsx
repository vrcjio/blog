import { createSlice } from "@reduxjs/toolkit";


export const systemSLice = createSlice({
    name:'system',
    initialState:{
        isLoading:false,
    },
    reducers:{
        setLoading:(state,action)=>{
            state.isLoading=action.payload;
        }
    }
});

export const {setLoading} = systemSLice.actions;
export default systemSLice.reducer;