import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"

import HomePageNavbar from "../Components/HomePageComponents/HomePageNavbar"
import Footer from "../Components/other/Footer"
import RestaurantsCards from "../Components/HomePageComponents/RestaurantsCards"
import HomeRestaurantLoading from "../Components/other/HomeRestaurantLoading"

import { searchRestaurants } from "../services/foodAndRestaurantServiceAPI"

function Search() {
  const [search, setSearch] = useState("")
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const searchText = search.trim()

    if (!searchText) {
      setRestaurants([])
      setError("")
      return
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true)
        setError("")

        const data = await searchRestaurants(searchText)

        setRestaurants(data)
      } catch (error) {
        setError("Unable to search restaurants")
        toast.error("Unable to search restaurants")
      } finally {
        setLoading(false)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [search])

  return (
    <main className="min-h-screen bg-[#FFF8F2] pt-[70px] sm:pt-[80px]">
      <HomePageNavbar />

      <section className="min-h-[90vh] px-4 sm:px-6 md:px-10 lg:px-[100px] py-8 sm:py-10">
        <div className="w-full max-w-[800px] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
            Search Food & Restaurants
          </h1>

          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Search by restaurant name, cuisine, category, or area.
          </p>

          <div className="relative mt-6 sm:mt-8">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search pizza, biryani, burgers..."
              className="w-full h-14 bg-white border border-orange-100 rounded-2xl shadow-sm px-5 pr-12 outline-none text-slate-700 font-semibold placeholder:text-slate-400"
            />

            <i className="fa-solid fa-magnifying-glass absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"></i>
          </div>
        </div>

        {loading && (
          <div className="w-full max-w-[1057px] mx-auto mt-10">
            <HomeRestaurantLoading length={6} />
          </div>
        )}

        {error && (
          <div className="w-full max-w-[1057px] mx-auto bg-red-50 border border-red-200 text-red-600 rounded-2xl p-4 sm:p-5 mt-10">
            <h3 className="font-bold">Something went wrong</h3>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {!loading && search.trim() && restaurants.length === 0 && !error && (
          <p className="text-center text-slate-500 mt-10">
            No restaurants found for "{search}".
          </p>
        )}

        {!loading && restaurants.length > 0 && (
          <div className="w-full max-w-[1057px] mx-auto mt-10">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-6">
              Search Results
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 justify-items-center">
              {restaurants.map((item) => (
                <RestaurantsCards item={item} key={item.restaurantId} />
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}

export default Search