import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const createRecipie = createAsyncThunk(
    "recipie/createRecipie",

    async (userData) => {
        const res = await fetch(`http://localhost:3000/api/recipie/create`, {
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


const recipieSlice = createSlice({
    name: "recipie",

    initialState: {
        loading: false,
        recipie: {
            title: "",
            description: "",
            prepTime: "",
            cookTime: "",
            servings: "",
            coverImage: "",
            ingredients: [],
            instructions: []
        }
    },

    reducers: {
        setField: (state, action) => {
            const { field, value } = action.payload
            state.recipie[field] = value
        },

        addIngredients: (state, action) => {
            state.recipie.ingredients.push(action.payload)
        },

        removeIngredients: (state, action) => {
            state.recipie.ingredients.splice(action.payload, 1)
        },

        addInstructions: (state, action) => {
            state.recipie.instructions.push(action.payload)
        },

        removeInstructions: (state,action) => {
            state.recipie.instructions.splice(action.payload, 1)
        },

        stateRecipie:(state) => {
            state.recipie = {
                title: "",
                description: "",
                prepTime: "",
                cookTime: "",
                servings: "",
                coverImage: "",
                ingredients: [],
                instructions: []
            }
        }
    },

    extraReducers: (builder) => {

        builder.addCase(createRecipie.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(createRecipie.fulfilled, (state, action) => {
            state.recipie = {
                title: "",
                description: "",
                prepTime: null,
                cookTime: null,
                servings: null,
                coverImage: "",
                ingredients: [],
                instructions: []
            }
            state.loading=false
        })

        builder.addCase(createRecipie.rejected,(state,action)=>{
            state.loading=false
        })
    }
})


export default recipieSlice.reducer