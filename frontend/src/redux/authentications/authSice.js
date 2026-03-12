import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData) => {
        const res = await fetch(`http://localhost:3000/api/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const data = await res.json()
        console.log(data);
        return data
    }
)

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (userData) => {
        const res = await fetch(`http://localhost:3000/api/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        const data = await res.json()
        console.log(data)
        return data
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLoading: false,
        token: null
    },

    reducers: {},

    extraReducers: (builder) => {


        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
            state.token = action.payload.token
        })

        builder.addCase(loginUser.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
            state.token = action.payload.token
        })

        builder.addCase(registerUser.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export default authSlice.reducer


