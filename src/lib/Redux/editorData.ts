import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    content: ''
}
export const editorSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        addEditorData: (state: any, action: any) => {
            state.content = action.payload;
        }
    }
});


export const {addEditorData} = editorSlice.actions;
export default editorSlice.reducer;