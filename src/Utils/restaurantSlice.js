import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
    getAllRestaurants,
    getRestaurantsByCategory,
    getAllRestaurantsWithLimit,
} from "../services/foodAndRestaurantServiceAPI"

// For normal all restaurants / category restaurants
export const restaurantThunk = createAsyncThunk("restaurant/get-restaurants", async (foodCategoryId) => {

    if (foodCategoryId) {
        const data = await getRestaurantsByCategory(foodCategoryId)
        return { foodCategoryId, data }
    }
})

// For Menu page Load More
export const restaurantLoadMoreThunk = createAsyncThunk("restaurant/loadMoreRestaurants", async ({ page, limit }) => {
    const data = await getAllRestaurantsWithLimit(page, limit)
    
    return data
})

const restaurantSlice = createSlice({
    name: "restaurant",

    initialState: {
        restaurant: {},
        loadRestaurant: [],
        loading: false,
        error: null,
        page: 1,
        hasMore: true
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            // normal restaurant thunk
            .addCase(restaurantThunk.pending, (state, action) => {
                return {
                    ...state,
                    loading: true,
                    error: null
                }
            })

            .addCase(restaurantThunk.fulfilled, (state, action) => {
                const { foodCategoryId, data } = action.payload

                state.loading = false
                if (state.restaurant[foodCategoryId]) {
                    return
                }

                state.restaurant[foodCategoryId] = data
            })

            .addCase(restaurantThunk.rejected, (state, action) => {
                return {
                    ...state,
                    loading: false,
                    error: action.payload || action.error.message
                }
            })

            // load more thunk
            .addCase(restaurantLoadMoreThunk.pending, (state) => {
                return {
                    ...state,
                    loading: true,
                    error: null
                }
            })

            .addCase(restaurantLoadMoreThunk.fulfilled, (state, action) => {
                return {
                    ...state,
                    loading: false,

                    loadRestaurant: [
                        ...state.loadRestaurant,
                        ...action.payload.data,
                    ],

                    page: action.payload.currentPage,
                    hasMore: action.payload.hasMore
                }
            })

            .addCase(restaurantLoadMoreThunk.rejected, (state, action) => {
                return {
                    ...state,
                    loading: false,
                    error: action.payload || action.error.message
                }
            })
    }
})

export default restaurantSlice.reducer