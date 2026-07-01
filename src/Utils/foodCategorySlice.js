import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFoodCategories, getFoodItemForLandingPage } from "../services/foodAndRestaurantServiceAPI";


export const foodItemThunk=createAsyncThunk("get-fooditem",async()=>{
        
    const data=await getFoodItemForLandingPage()
   
    return data
        
})

export const foodCategoryThunk=createAsyncThunk("get-foodcategory",async()=>{
        
    const data=await getFoodCategories()
    
    return data
        
})


const foodCategorySlice=createSlice({
    name:"foodCategory",
    initialState:{
        foodItems: [],
        foodCategories: [],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(foodItemThunk.pending,(state,action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(foodItemThunk.fulfilled,(state,action)=>{
            return {
                ...state,
                loading:false,
                foodItems:action.payload
            }
        })
        .addCase(foodItemThunk.rejected,(state,action)=>{
            return {
                ...state,
                loading:false,
                error:action.error.message
            }
        })
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
                foodCategories:action.payload
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