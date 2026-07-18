import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom"

import HomePageNavbar from "../Components/HomePageComponents/HomePageNavbar"
import RestaurantsCards from "../Components/HomePageComponents/RestaurantsCards"
import HomeRestaurantLoading from "../Components/other/HomeRestaurantLoading"
import Footer from "../Components/other/Footer"

import { restaurantThunk } from "../Utils/restaurantSlice"

function RestaurantByFoodCategory() {
  const { foodCategoryId } = useParams()
  const [searchParams] = useSearchParams()
  const categoryName = searchParams.get("name")

  const dispatch = useDispatch()

  const {
    restaurant = {},
    loading,
    error,
  } = useSelector((store) => store.restaurants)

  const restaurantByCategory = restaurant[foodCategoryId] || []

  useEffect(() => {
    if (!restaurant[foodCategoryId]) {
      dispatch(restaurantThunk(foodCategoryId))
    }
  }, [dispatch, foodCategoryId, restaurant])

  return (
    <main className="min-h-screen bg-[#FFF8F2] pt-[70px] sm:pt-[80px]">
      <HomePageNavbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-[100px] py-8 sm:py-10">
        <div className="w-full max-w-[1057px] mx-auto mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
            {categoryName}
          </h1>

          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Choose your favourite restaurant and explore their menu.
          </p>
        </div>

        {loading && <HomeRestaurantLoading length={6} />}

        {error && (
          <div className="w-full max-w-[1057px] mx-auto bg-red-50 border border-red-200 text-red-600 rounded-2xl p-4 sm:p-5 mb-8">
            <h3 className="font-bold">Something went wrong</h3>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {!loading && !error && restaurantByCategory.length === 0 && (
          <p className="text-center text-slate-500 mt-10">
            No restaurants found for this category.
          </p>
        )}

        <div className="w-full max-w-[1057px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 justify-items-center">
          {restaurantByCategory.map((item) => (
            <RestaurantsCards item={item} key={item.restaurantId} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default RestaurantByFoodCategory