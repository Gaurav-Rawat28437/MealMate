import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import HomePageNavbar from "../Components/HomePageComponents/HomePageNavbar"
import Footer from "../Components/other/Footer"
import HomeRestaurantLoading from "../Components/other/HomeRestaurantLoading"
import RestaurantOffer from "../Components/MenuPageComponents/RestaurantOffer"
import MenuAccordion from "../Components/MenuPageComponents/MenuAccordion"

import {
  getRestaurantById,
  getMenuCardsByRestaurantId,
} from "../services/foodAndRestaurantServiceAPI"
import toast from "react-hot-toast"

function RestaurantMenu() {
  const { restaurantId } = useParams()

  const [restaurant, setRestaurant] = useState(null)
  const [menuCards, setMenuCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [search, setSearch] = useState("")
  const [pureVeg, setPureVeg] = useState(false)
  const [bestseller, setBestseller] = useState(false)

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true)
        setError("")

        const restaurantData = await getRestaurantById(restaurantId)
        const menuData = await getMenuCardsByRestaurantId(restaurantId)

        setRestaurant(restaurantData)
        setMenuCards(menuData)
      } catch (error) {
        setError("Unable to load menu. Please check your internet.")
        toast.error("Couldn’t load the menu. Try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchMenuData()
  }, [restaurantId])

  const filteredMenuCards = menuCards.filter((item) => {
    const matchSearch = item.name
      ?.toLowerCase()
      .includes(search.toLowerCase())

    const matchVeg = pureVeg ? item.isVeg === true : true
    const matchBestseller = bestseller ? item.isBestseller === true : true

    return matchSearch && matchVeg && matchBestseller
  })

  const menuByCategory = filteredMenuCards.reduce((acc, item) => {
    const categoryName = item.category || "Recommended"

    if (!acc[categoryName]) {
      acc[categoryName] = []
    }

    acc[categoryName].push(item)

    return acc
  }, {})

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FFF8F2]">
        <HomePageNavbar />

        <section className="px-4 sm:px-6 md:px-10 lg:px-[100px] py-10">
          <HomeRestaurantLoading length={6} />
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#FFF8F2]">
      <HomePageNavbar />

      <section className="w-full px-4 sm:px-6 md:px-10 py-10 flex justify-center">
        <div className="w-full max-w-[800px]">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded-2xl p-5 mb-8">
              <h3 className="font-bold">Something went wrong</h3>
              <p className="text-sm mt-1">{error}</p>
            </div>
          )}

          {restaurant && (
            <>
              <p className="text-xs font-bold text-slate-400 mb-4">
                Home / {restaurant.restaurantInfo?.cityName} /{" "}
                <span className="text-slate-700">
                  {restaurant.restaurantName}
                </span>
              </p>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-5">
                {restaurant.restaurantName}
              </h1>

              <div className="bg-white rounded-[28px] border border-orange-100 shadow-sm p-5 mb-8">
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold text-slate-800">
                  <span className="h-6 w-6 rounded-full bg-green-700 text-white flex items-center justify-center text-xs">
                    ★
                  </span>

                  <span>
                    {restaurant.restaurantInfo?.avgRating || "4.0"} (
                    {restaurant.restaurantInfo?.totalRatings || "Ratings"})
                  </span>

                  <span>•</span>

                  <span>
                    {restaurant.restaurantInfo?.costForTwoMessage ||
                      "₹300 for two"}
                  </span>
                </div>

                <p className="text-sm text-[#FF5200] font-bold underline mt-3">
                  {restaurant.restaurantInfo?.cuisines?.join(", ")}
                </p>

                <div className="flex gap-3 mt-4 text-sm font-bold">
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                    <div className="w-[1px] h-5 bg-slate-300"></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>

                  <div>
                    <p>
                      Outlet{" "}
                      <span className="text-slate-500">
                        {restaurant.restaurantInfo?.areaName ||
                          restaurant.areaName}
                      </span>
                    </p>

                    <p className="mt-1">
                      {restaurant.restaurantInfo?.minMaxDeliveryTime ||
                        "30-40 mins"}
                    </p>

                    {restaurant.offer && (
                      <p className="text-sm text-[#FF5200] font-black mt-4">
                        {restaurant.offer.displayText}
                      </p>
                    )}
                    
                  </div>
                </div>
              </div>
              

              <RestaurantOffer offer={restaurant.offer} />

              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-10 bg-slate-300"></div>
                <h2 className="tracking-[4px] text-xs text-slate-500 font-black">
                  MENU
                </h2>
                <div className="h-[1px] w-10 bg-slate-300"></div>
              </div>

              <div className="relative mb-5">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for dishes"
                  className="w-full h-12 rounded-xl bg-[#E9E9EF] text-center outline-none font-bold text-slate-600 placeholder:text-slate-500"
                />

                <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-slate-600"></i>
              </div>

              <div className="flex flex-wrap gap-3 mb-5">
                <button
                  onClick={() => setPureVeg(!pureVeg)}
                  className={`px-4 py-2 rounded-full border text-sm font-bold flex items-center gap-2 ${
                    pureVeg
                      ? "bg-green-50 border-green-600 text-green-700"
                      : "border-slate-300 text-slate-700"
                  }`}
                >
                  <span className="h-4 w-4 border border-green-700 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-green-700"></span>
                  </span>
                  Pure Veg
                </button>

                <button
                  onClick={() => setBestseller(!bestseller)}
                  className={`px-4 py-2 rounded-full border text-sm font-bold ${
                    bestseller
                      ? "bg-orange-50 border-[#FF5200] text-[#FF5200]"
                      : "border-slate-300 text-slate-700"
                  }`}
                >
                  Bestseller
                </button>
              </div>

              <hr className="border-slate-300 mb-4" />

              {Object.keys(menuByCategory).length === 0 && (
                <p className="text-center text-slate-500 mt-10">
                  No dishes found.
                </p>
              )}

              {Object.entries(menuByCategory).map(([categoryName, items]) => (
                <MenuAccordion
                  key={categoryName}
                  title={categoryName}
                  items={items}
                />
              ))}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default RestaurantMenu