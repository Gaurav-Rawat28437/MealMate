import React, { useEffect, useState } from "react"
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
  clearCart,
} from "../Utils/menuCartSlice"

function MenuCart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart) || []

  const [appliedOffer, setAppliedOffer] = useState(null)

  const getPrice = (item) => {
    if (!item.price) return 99

    if (typeof item.price === "number" && item.price > 1000) {
      return item.price / 100
    }

    return Number(item.price)
  }

  const getNumberFromText = (text) => {
    return Number(text?.match(/\d+/)?.[0] || 0)
  }

  const cartTotal = cartItems.reduce((total, item) => {
    return total + getPrice(item) * item.quantity
  }, 0)

  const baseDeliveryFee = cartItems.length > 0 ? 35 : 0
  const platformFee = cartItems.length > 0 ? 5 : 0

  const restaurantIds = cartItems.map((item) => item.restaurantId)
  const uniqueRestaurantIds = [...new Set(restaurantIds)]
  const isSingleRestaurant = uniqueRestaurantIds.length === 1

  const restaurantOffer = isSingleRestaurant
    ? cartItems[0]?.restaurantOffer
    : null

  const calculateCouponDiscount = (offer) => {
    if (!offer) return 0

    if (offer.type === "FREE_DELIVERY") {
      return 0
    }

    if (offer.type === "PERCENT" || offer.type === "BANK") {
      const percent = getNumberFromText(offer.title)
      const maxDiscount = getNumberFromText(offer.subtitle)

      const discount = Math.round((cartTotal * percent) / 100)

      return maxDiscount ? Math.min(discount, maxDiscount) : discount
    }

    if (offer.type === "FLAT") {
      const flatDiscount = getNumberFromText(offer.title)

      return Math.min(flatDiscount, cartTotal)
    }

    if (
      offer.type === "WELCOME" ||
      offer.type === "DEAL" ||
      offer.type === "COMBO"
    ) {
      const flatDiscount = getNumberFromText(offer.subtitle)

      return Math.min(flatDiscount, cartTotal)
    }

    return 0
  }

  const couponDiscount = appliedOffer
    ? calculateCouponDiscount(appliedOffer)
    : 0

  const deliveryDiscount =
    appliedOffer?.type === "FREE_DELIVERY" ? baseDeliveryFee : 0

  const deliveryFee = baseDeliveryFee - deliveryDiscount

  const grandTotal =
    cartTotal + deliveryFee + platformFee - couponDiscount

  const getOfferDiscountText = (offer) => {
    if (!offer) return ""

    if (offer.type === "FREE_DELIVERY") {
      return "Free delivery applied"
    }

    if (offer.type === "PERCENT" || offer.type === "BANK") {
      const percent = getNumberFromText(offer.title)
      const maxDiscount = getNumberFromText(offer.subtitle)

      return `${percent}% off up to ₹${maxDiscount}`
    }

    if (offer.type === "FLAT") {
      const amount = getNumberFromText(offer.title)

      return `Flat ₹${amount} off`
    }

    const amount = getNumberFromText(offer.subtitle)

    return `₹${amount} off applied`
  }

  useEffect(() => {
    if (!appliedOffer) return

    if (cartItems.length === 0) {
      setAppliedOffer(null)
      return
    }

    if (!isSingleRestaurant) {
      setAppliedOffer(null)
      return
    }

    if (cartTotal < appliedOffer.minOrder) {
      setAppliedOffer(null)
      toast.error("Coupon removed because cart total is below minimum order")
    }
  }, [cartItems.length, cartTotal, isSingleRestaurant, appliedOffer])

  const applyOfferHandler = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty")
      return
    }

    if (!isSingleRestaurant) {
      toast.error("Offer applies only for one restaurant cart")
      return
    }

    if (!restaurantOffer?.isActive) {
      toast.error("This offer is not available")
      return
    }

    if (cartTotal < restaurantOffer.minOrder) {
      const remainingAmount = restaurantOffer.minOrder - cartTotal

      toast.error(`Add ₹${remainingAmount} more to use this offer`)
      return
    }

    setAppliedOffer(restaurantOffer)

    if (restaurantOffer.type === "FREE_DELIVERY") {
      toast.success("Free delivery applied 🛵")
    } else {
      toast.success("Coupon applied 🎉")
    }
  }

  const removeOfferHandler = () => {
    setAppliedOffer(null)
    toast.success("Coupon removed")
  }

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
    setAppliedOffer(null)
    toast.success("Your order has been placed 🎉")
  }

  return (
    <main className="min-h-screen bg-[#FFF8F2] pt-[80px]">
      <HomePageNavbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-[100px] py-10">
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
              <div className="bg-white rounded-[24px] border border-orange-100 shadow-sm p-5">
                <p className="text-sm text-slate-500 font-semibold">
                  Ordering from
                </p>

                <h2 className="text-xl font-black text-slate-900 mt-1">
                  {cartItems[0]?.restaurantName}
                </h2>
              </div>

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

              {restaurantOffer && (
                <div className="border border-dashed border-[#FF5200] bg-orange-50 rounded-2xl p-4 mb-5">
                  <p className="text-sm font-black text-[#FF5200]">
                    {restaurantOffer.title}
                  </p>

                  <p className="text-xs font-bold text-slate-500 mt-1">
                    {restaurantOffer.subtitle}
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Minimum order ₹{restaurantOffer.minOrder}
                  </p>

                  {appliedOffer && (
                    <p className="text-xs font-bold text-green-600 mt-2">
                      {getOfferDiscountText(appliedOffer)}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs font-black text-[#FF5200] bg-white border border-orange-200 px-3 py-2 rounded-lg truncate">
                      {restaurantOffer.code}
                    </span>

                    {appliedOffer ? (
                      <button
                        onClick={removeOfferHandler}
                        className="text-sm font-black text-[#FF5200] bg-white border border-[#FF5200] px-4 py-2 rounded-xl"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={applyOfferHandler}
                        className="text-sm font-black text-white bg-[#FF5200] px-4 py-2 rounded-xl"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="flex justify-between text-sm font-semibold text-slate-600 mb-3">
                <span>Item Total</span>
                <span>₹{cartTotal}</span>
              </div>

              <div className="flex justify-between text-sm font-semibold text-slate-600 mb-3">
                <span>Delivery Fee</span>

                {deliveryDiscount > 0 ? (
                  <span className="text-green-600 font-bold">
                    FREE
                  </span>
                ) : (
                  <span>₹{baseDeliveryFee}</span>
                )}
              </div>

              <div className="flex justify-between text-sm font-semibold text-slate-600 mb-3">
                <span>Platform Fee</span>
                <span>₹{platformFee}</span>
              </div>

              {couponDiscount > 0 && (
                <div className="flex justify-between text-sm font-semibold text-green-600 mb-3">
                  <span>Coupon Discount</span>
                  <span>-₹{couponDiscount}</span>
                </div>
              )}

              {deliveryDiscount > 0 && (
                <div className="flex justify-between text-sm font-semibold text-green-600 mb-3">
                  <span>Delivery Discount</span>
                  <span>-₹{deliveryDiscount}</span>
                </div>
              )}

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