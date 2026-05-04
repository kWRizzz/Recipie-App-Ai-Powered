import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentications/authSice.js";
import recipieReducer from './recipies/recipieSlice.js'
export const store= configureStore({
    reducer:{
        auth:authReducer,
        recipie:recipieReducer
    }
})