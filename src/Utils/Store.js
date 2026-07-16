import { configureStore } from "@reduxjs/toolkit";
import locationSliceReducer from "./LocationSlice"
import foodCategorySliceReducer from "./foodCategorySlice";
import restaurantSliceReducer from "./restaurantSlice";
import menuCartSliceReducer from "./menuCartSlice"

const store=configureStore({
    reducer:{
        location:locationSliceReducer,
        foodCategory:foodCategorySliceReducer,
        restaurants:restaurantSliceReducer,
        cart:menuCartSliceReducer
    }

})

export default store
