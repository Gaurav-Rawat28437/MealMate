import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAllRestaurants,getRestaurantsByCategory} from "../services/foodAndRestaurantServiceAPI";

export const restaurantThunk=createAsyncThunk("get-restaurants",async(foodCategoryId)=>{
   

    if(foodCategoryId)
    {
     const data=await getRestaurantsByCategory(foodCategoryId)
     console.log(data)
     return data
    }
     
     const data=await getAllRestaurants()
     console.log(data)
     return data
   
     
})

const restaurantSlice=createSlice({
    name:"restaurant",
    initialState:{
        loading:false,
        data:[],
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(restaurantThunk.pending,(state,action)=>{
            return{
                ...state,
                loading:true,
            }
        })
        .addCase(restaurantThunk.fulfilled,(state,action)=>{
            return{
                ...state,
                loading:false,
                data:action.payload
            }
        })
        .addCase(restaurantThunk.rejected,(state,action)=>{
            return{
                ...state,
                loading:false,
                error:action.error.message
            }
        })
    }
})
export default restaurantSlice.reducer