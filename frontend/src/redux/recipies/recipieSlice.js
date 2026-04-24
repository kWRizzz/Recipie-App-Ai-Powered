import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


export const createRecipies= createAsyncThunk(
    "recipie/createRecipes",
    async (userData)=>{
        const res= await fetch(`http://localhost:3000/api/user/create`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        const data= await res.json()
        console.log(data)
        return data
    }
)

export const getRecipies= createAsyncThunk(
    "recipie/getRecipies",
    async (userData) => {
        const res= await fetch('')
    }
)






