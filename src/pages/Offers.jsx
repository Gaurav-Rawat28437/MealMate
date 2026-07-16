import React, { useEffect, useState } from "react"

import HomePageNavbar from "../Components/HomePageComponents/HomePageNavbar"
import Footer from "../Components/other/Footer"
import HomeRestaurantLoading from "../Components/other/HomeRestaurantLoading"
import OfferRestaurantCard from "../Components/OfferComponents/OfferRestaurantCard"

import { getOfferRestaurants } from "../services/foodAndRestaurantServiceAPI"

function Offers() {
  const [restaurants, setRestaurants] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchOfferRestaurants = async (pageNumber) => {
    try {
      setLoading(true)
      setError("")

      const result = await getOfferRestaurants(pageNumber, 9)

      setRestaurants((prev) => [...prev, ...result.data])
      setPage(result.currentPage)
      setHasMore(result.hasMore)
    } catch (error) {
      setError("Unable to load offers. Please check your internet.")
      toast.error("This offer is not available")
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
    <main className="min-h-screen bg-[#FFF8F2]">
      <HomePageNavbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-[100px] py-10 pt-[90px]">
        <div className="w-full max-w-[1057px] mx-auto mb-8">
          <p className="text-[#FF5200] font-black text-sm">
            Special Deals
          </p>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
            Offers for You
          </h1>

          <p className="text-slate-500 mt-2">
            Explore restaurants with exciting deals and discounts.
          </p>
        </div>

        <div className="w-full max-w-[1057px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <TopOfferCard title="50% OFF" subtitle="On selected restaurants" />
          <TopOfferCard title="Free Delivery" subtitle="Save more on every order" />
          <TopOfferCard title="Extra ₹50 OFF" subtitle="Use coupons on checkout" />
        </div>

        {error && (
          <div className="w-full max-w-[1057px] mx-auto bg-red-50 border border-red-200 text-red-600 rounded-2xl p-5 mb-8">
            <h3 className="font-bold">Something went wrong</h3>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        <div className="w-full max-w-[1057px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
          {restaurants.map((item) => (
            <OfferRestaurantCard item={item} key={item.restaurantId} />
          ))}
        </div>

        {loading && <HomeRestaurantLoading length={3} />}

        {!loading && restaurants.length === 0 && !error && (
          <p className="text-center text-slate-500 mt-10">
            No offers available right now.
          </p>
        )}

        {hasMore && !loading && (
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
    <div className="bg-white border border-orange-100 rounded-[24px] p-5 shadow-sm hover:shadow-lg transition">
      <div className="h-12 w-12 rounded-full bg-orange-100 text-[#FF5200] flex items-center justify-center font-black text-xl">
        %
      </div>

      <h3 className="text-xl font-black text-slate-900 mt-4">
        {title}
      </h3>

      <p className="text-sm text-slate-500 font-bold mt-1">
        {subtitle}
      </p>
    </div>
  )
}

export default Offers