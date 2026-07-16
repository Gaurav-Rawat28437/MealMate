import { createSlice } from "@reduxjs/toolkit";

const menuCart = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const food = action.payload

            const existItem = state.find(item => item.menuItemId === food.menuItemId)

            if (existItem) {
                existItem.quantity += 1
            }
            else {
                state.push({ ...food, quantity: 1 })
            }

        },

        increaseQuantity: (state, action) => {
            const id = action.payload

            const item = state.find((cartItem) => cartItem.id === id)

            if (item) {
                item.quantity += 1
            }
        },

        decreaseQuantity: (state, action) => {
            const id = action.payload

            const item = state.find((cartItem) => cartItem.id === id)

            if (!item) return

            if (item.quantity > 1) {
                item.quantity -= 1
            } else {
                const index = state.findIndex((cartItem) => cartItem.id === id)
                state.splice(index, 1)
            }
        },

        removeFromCart: (state, action) => {
            const id = action.payload

            const filter = state.filter(item => item.id !== id)
            return filter
        }

    }
})

export default menuCart.reducer
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = menuCart.actions