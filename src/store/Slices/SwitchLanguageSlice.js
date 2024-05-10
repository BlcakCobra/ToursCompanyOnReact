import { createSlice } from "@reduxjs/toolkit";

export const switchLanguage = createSlice({
    name: "language",
    initialState:{
        lang: +window.localStorage.getItem('id') || 0
    },
    reducers:{
        language(state, action){
            state.lang = action.payload.lang;
        }
    }
})