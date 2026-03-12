import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentications/authSice.js";

export const store= configureStore({
    reducer:{
        auth:authReducer
    }
})