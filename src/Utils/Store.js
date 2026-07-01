import { configureStore } from "@reduxjs/toolkit";
import locationSliceReducer from "./LocationSlice"
import foodCategorySliceReducer from "./foodCategorySlice";
import restaurantSliceReducer from "./restaurantSlice";

const store=configureStore({
    reducer:{
        location:locationSliceReducer,
        foodCategory:foodCategorySliceReducer,
        restaurant:restaurantSliceReducer
    }

})

export default store
