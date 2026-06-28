import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getfoodCategories } from "../services/foodServiceAPI";


export const foodCategoryThunk=createAsyncThunk("get-foodcategory",async()=>{
    try{
        const data=await getfoodCategories()
        return data
    }
    catch(error)
    {
        console.log(error)
    }
})


const foodCategorySlice=createSlice({
    name:"foodCategory",
    initialState:{
        loading:false,
        data:[],
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(foodCategoryThunk.pending,(state,action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(foodCategoryThunk.fulfilled,(state,action)=>{
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        })
        .addCase(foodCategoryThunk.rejected,(state,action)=>{
            return {
                ...state,
                loading:false,
                error:action.error.message
            }
        })
    }
})

export default foodCategorySlice.reducer