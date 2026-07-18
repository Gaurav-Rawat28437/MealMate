import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"

import HomePageNavbar from "../Components/HomePageComponents/HomePageNavbar"
import Footer from "../Components/other/Footer"
import HomeRestaurantLoading from "../Components/other/HomeRestaurantLoading"
import OfferRestaurantCard from "../Components/OfferComponents/OfferRestaurantCard"

import { getOfferRestaurants } from "../services/foodAndRestaurantServiceAPI"

function Offers() {
  const [restaurants, setRestaurants] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchOfferRestaurants = async (pageNumber) => {
    try {
      setLoading(true)
      setError("")

      const result = await getOfferRestaurants(pageNumber, 8)
      const offerData = result?.data || []
      setRestaurants((prev) => [...prev,...offerData])
      setPage(result?.currentPage || pageNumber)
      setHasMore(result?.hasMore || false)
    } catch (error) {
      setError("Unable to load offers. Please check your internet.")
      toast.error("Unable to load offers")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOfferRestaurants(1)
  }, [])

  const loadMoreHandler = () => {
    if (!loading && hasMore) {
      fetchOfferRestaurants(page + 1)
    }
  }

  return (
    <main className="min-h-screen bg-[#FFF8F2] pt-[70px] sm:pt-[80px]">
      <HomePageNavbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-[100px] py-8 sm:py-10">
        <div className="w-full max-w-[1057px] mx-auto mb-8">
          <p className="text-[#FF5200] font-black text-sm">
            Special Deals
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2">
            Offers for You
          </h1>

          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Explore restaurants with exciting deals and discounts.
          </p>
        </div>

        <div className="w-full max-w-[1057px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <TopOfferCard title="50% OFF" subtitle="On selected restaurants" />
          <TopOfferCard title="Free Delivery" subtitle="Save more on every order" />
          <TopOfferCard title="Extra ₹50 OFF" subtitle="Use coupons on checkout" />
        </div>

        {error && (
          <div className="w-full max-w-[1057px] mx-auto bg-red-50 border border-red-200 text-red-600 rounded-2xl p-4 sm:p-5 mb-8">
            <h3 className="font-bold">Something went wrong</h3>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {restaurants.length > 0 && (
          <div className="w-full max-w-[1057px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 justify-items-center">
            {restaurants.map((item) => (
              <OfferRestaurantCard item={item} key={item.restaurantId} />
            ))}
          </div>
        )}

        {loading && <HomeRestaurantLoading length={8} />}

        {!loading && restaurants.length === 0 && !error && (
          <p className="text-center text-slate-500 mt-10">
            No offers available right now.
          </p>
        )}

        {restaurants.length > 0 && hasMore && !loading && (
          <div className="w-full flex justify-center mt-10">
            <button
              onClick={loadMoreHandler}
              className="px-8 py-3 rounded-xl bg-[#FF5200] text-white font-bold hover:bg-[#e84900] transition shadow-lg"
            >
              Load More
            </button>
          </div>
        )}

        {!hasMore && restaurants.length > 0 && (
          <p className="text-center text-slate-400 mt-10">
            No more offers
          </p>
        )}
      </section>

      <Footer />
    </main>
  )
}

function TopOfferCard({ title, subtitle }) {
  return (
    <div className="bg-white border border-orange-100 rounded-[22px] sm:rounded-[24px] p-5 shadow-sm hover:shadow-lg transition">
      <div className="h-12 w-12 rounded-full bg-orange-100 text-[#FF5200] flex items-center justify-center font-black text-xl">
        %
      </div>

      <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-4">
        {title}
      </h3>

      <p className="text-sm text-slate-500 font-bold mt-1">
        {subtitle}
      </p>
    </div>
  )
}

export default Offers