import { configureStore } from "@reduxjs/toolkit";
import locationSliceReducer from "./LocationSlice"
import foodCategorySliceReducer from "./foodCategorySlice";
import restaurantSliceReducer from "./RestaurantSlice";

const store=configureStore({
    reducer:{
        location:locationSliceReducer,
        foodCategory:foodCategorySliceReducer,
        restaurants:restaurantSliceReducer
    }

})

export default store
