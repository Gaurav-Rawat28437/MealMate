import { configureStore } from "@reduxjs/toolkit";
import locationSliceReducer from "./LocationSlice"
import foodCategorySliceReducer from "./foodCategorySlice";

const store=configureStore({
    reducer:{
        location:locationSliceReducer,
        foodcategory:foodCategorySliceReducer
    }

})

export default store
