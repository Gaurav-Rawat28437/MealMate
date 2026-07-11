import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import HomePageNavbar from "../Components/HomePageComponents/HomePageNavbar"
import RestaurantsCards from "../Components/HomePageComponents/RestaurantsCards"
import Footer from "../Components/other/Footer"
import HomeRestaurantLoading from "../Components/other/HomeRestaurantLoading"
import { restaurantLoadMoreThunk } from "../Utils/RestaurantSlice"


function Restaurant() {
  const dispatch = useDispatch()

  const {loadRestaurant,page,hasMore,loading,error} = useSelector((store) => store.restaurants?.loadRestaurant)

  useEffect(() => {
    if (!loadRestaurant || loadRestaurant.length === 0) {
      dispatch(restaurantLoadMoreThunk({ page: 1, limit: 9 }))
    }
  }, [dispatch, loadRestaurant.length])

  const loadMoreHandler = () => {
    if (!loading && hasMore) {
      dispatch(
        restaurantLoadMoreThunk({
          page: page + 1,
          limit: 9,
        })
      )
    }
  }

  return (
    <main className="min-h-screen bg-[#FFF8F2]">
      <HomePageNavbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-[100px] py-10">
        <div className="w-full max-w-[1057px] mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            Explore Restaurant
          </h1>

          <p className="text-slate-500 mt-2">
            Choose your favourite restaurant and explore their menu.
          </p>
        </div>

        {error && (
          <div className="w-full max-w-[1057px] mx-auto bg-red-50 border border-red-200 text-red-600 rounded-2xl p-5 mb-8">
            <h3 className="font-bold">Something went wrong</h3>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        <div className="w-full max-w-[1057px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
          {loadRestaurant.map((item) => (
            <RestaurantsCards item={item} key={item.restaurantId} />
          ))}
        </div>

        {loading && <HomeRestaurantLoading length={3} />}

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

        {!hasMore && loadRestaurant.length > 0 && (
          <p className="text-center text-slate-400 mt-10">
            No more restaurants
          </p>
        )}
      </section>

      {!hasMore && loadRestaurant.length > 0 && <Footer />}
    </main>
  )
}

export default Restaurant