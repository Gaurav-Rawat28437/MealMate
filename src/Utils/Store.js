import { configureStore } from "@reduxjs/toolkit";
import locationSliceReducer from "./LocationSlice"
import foodCategorySliceReducer from "./foodCategorySlice";
import restaurantSliceReducer from "./restaurantSlice";

const store=configureStore({
    reducer:{
        location:locationSliceReducer,
        foodcategory:foodCategorySliceReducer,
        restaurant:restaurantSliceReducer
    }

})

export default store
