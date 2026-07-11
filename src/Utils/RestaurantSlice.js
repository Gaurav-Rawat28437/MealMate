import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
    getAllRestaurants,
    getRestaurantsByCategory,
    getAllRestaurantsWithLimit,
} from "../services/foodAndRestaurantServiceAPI"

// For normal all restaurants / category restaurants
export const restaurantThunk = createAsyncThunk("restaurant/get-restaurants", async (foodCategoryId) => { 
  
    if (foodCategoryId) 
    { 
        const data = await getRestaurantsByCategory(foodCategoryId) 
        console.log(data) 
        return data 
    } 
    const data = await getAllRestaurants() 
    console.log(data) 
    return data 
})

// For Menu page Load More
export const restaurantLoadMoreThunk = createAsyncThunk("restaurant/loadMoreRestaurants",async ({page, limit}) => {
            const data = await getAllRestaurantsWithLimit(page, limit)
            return data
    })

const restaurantSlice = createSlice({
    name: "restaurant",

    initialState: {
        restaurant:[],
        loadRestaurant:[],
        loading: false,
        error: null,
        page: 1,
        hasMore: true
    },

    reducers: {},

    extraReducers: (builder) => {
    builder
      // normal restaurant thunk
      .addCase(restaurantThunk.pending, (state,action) => {
        state.loading = true
        state.error = null
      })

      .addCase(restaurantThunk.fulfilled, (state, action) => {
        state.loading = false
        state.restaurant = action.payload
      })

      .addCase(restaurantThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error.message
      })

      // load more thunk
      .addCase(restaurantLoadMoreThunk.pending, (state) => {
        
        state.loading = true
        state.error = null
      })

      .addCase(restaurantLoadMoreThunk.fulfilled, (state, action) => {
        state.loading = false

        state.loadRestaurant = [
          ...state.loadRestaurant,
          ...action.payload.data,
        ]

        state.page = action.payload.currentPage
        state.hasMore = action.payload.hasMore
      })

      .addCase(restaurantLoadMoreThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error.message
      })
  }
})

export default restaurantSlice.reducer