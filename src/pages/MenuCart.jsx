import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"

import HomePageNavbar from "../Components/HomePageComponents/HomePageNavbar"
import Footer from "../Components/other/Footer"
import CartItemCard from "../Components/CartComponents/CartItemCard"

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  } from "../Utils/menuCartSlice"

function MenuCart() {
  const dispatch = useDispatch()

  const cartItems = useSelector((store) => store.cart)

  const getPrice = (item) => {
    if (!item.price) return 99

    if (typeof item.price === "number" && item.price > 1000) {
      return item.price / 100
    }

    return Number(item.price)
  }

  const cartTotal = cartItems.reduce((total, item) => {
    return total + getPrice(item) * item.quantity
  }, 0)

  const deliveryFee = cartItems.length > 0 ? 35 : 0
  const platformFee = cartItems.length > 0 ? 5 : 0
  const grandTotal = cartTotal + deliveryFee + platformFee

  const increaseHandler = (item) => {
    dispatch(increaseQuantity(item.id))
    toast.success("Quantity updated")
  }

  const decreaseHandler = (item) => {
    dispatch(decreaseQuantity(item.id))

    if (item.quantity === 1) {
      toast.success(`${item.name} removed from cart`)
    } else {
      toast.success("Quantity updated")
    }
  }

  const removeHandler = (item) => {
    dispatch(removeFromCart(item.id))
    toast.success(`${item.name} removed from cart`)
  }

  const placeOrderHandler = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty")
      return
    }

    dispatch(clearCart())
    toast.success("Your order has been placed 🎉")
  }

  return (
    <main className="min-h-screen bg-[#FFF8F2]">
      <HomePageNavbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-[100px] py-10 pt-[90px]">
        <div className="w-full max-w-[1057px] mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            Your Cart
          </h1>

          <p className="text-slate-500 mt-2">
            Review your selected food items before placing the order.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="w-full max-w-[600px] mx-auto mt-16 bg-white rounded-[28px] border border-orange-100 shadow-sm p-8 text-center">
            <div className="text-6xl mb-4">🛒</div>

            <h2 className="text-2xl font-black text-slate-900">
              Your cart is empty
            </h2>

            <p className="text-slate-500 mt-2">
              Add some delicious food from the menu.
            </p>

            <Link
              to="/restaurants"
              className="inline-block mt-6 px-7 py-3 rounded-xl bg-[#FF5200] text-white font-bold hover:bg-[#e84900] transition"
            >
              Explore Restaurants
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-[1057px] mx-auto mt-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
            <div className="flex flex-col gap-5">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  price={getPrice(item)}
                  increaseHandler={increaseHandler}
                  decreaseHandler={decreaseHandler}
                  removeHandler={removeHandler}
                />
              ))}
            </div>

            <div className="bg-white rounded-[28px] border border-orange-100 shadow-sm p-6 h-fit sticky top-24">
              <h2 className="text-xl font-black text-slate-900 mb-5">
                Bill Details
              </h2>

              <div className="flex justify-between text-sm font-semibold text-slate-600 mb-3">
                <span>Item Total</span>
                <span>₹{cartTotal}</span>
              </div>

              <div className="flex justify-between text-sm font-semibold text-slate-600 mb-3">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="flex justify-between text-sm font-semibold text-slate-600 mb-4">
                <span>Platform Fee</span>
                <span>₹{platformFee}</span>
              </div>

              <hr className="border-slate-200 mb-4" />

              <div className="flex justify-between text-lg font-black text-slate-900">
                <span>To Pay</span>
                <span>₹{grandTotal}</span>
              </div>

              <button
                onClick={placeOrderHandler}
                className="w-full mt-6 py-3 rounded-xl bg-[#FF5200] text-white font-black hover:bg-[#e84900] transition shadow-lg"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}

export default MenuCart