import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getRestaurantsByCity } from "../../services/foodAndRestaurantServiceAPI"
import HomeRestaurantLoading from "../other/HomeRestaurantLoading"
import RestaurantsCards from "./RestaurantsCards"

function BestRestaurantsInYourCity() {
  const city = useSelector((store) => store.location?.data?.city) || "Delhi"

  const [restaurantData, setRestaurantData] = useState([])
  const [showDelhiFallback, setShowDelhiFallback] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true)
        setError("")
        setShowDelhiFallback(false)

        const cityData = await getRestaurantsByCity(city)

        if (cityData.length > 0) {
          setRestaurantData(cityData)
        } else {
          const delhiData = await getRestaurantsByCity("Delhi")

          setRestaurantData(delhiData)
          setShowDelhiFallback(true)
        }
      } catch (error) {
        setError("Unable to load restaurants. Please check your internet connection.")
        setRestaurantData([])
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [city])

  if (loading) {
    return <HomeRestaurantLoading length={6} />
  }

  if (error) {
    return (
      <section className="w-full max-w-[1057px] mt-10 sm:mt-12 mx-auto">
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-2xl p-4 sm:p-5">
          <h3 className="font-bold">Unable to load restaurants</h3>
          <p className="text-sm mt-1">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full max-w-[1057px] mt-10 sm:mt-12 mx-auto">
      <div className="mb-6">
        {showDelhiFallback ? (
          <>
            <h2 className="text-xl sm:text-[21px] font-bold text-slate-900">
              No restaurants found in {city}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Showing best restaurants in Delhi instead.
            </p>
          </>
        ) : (
          <h2 className="text-xl sm:text-[21px] font-bold text-slate-900">
            Best Restaurants in {city}
          </h2>
        )}
      </div>

      {showDelhiFallback && (
        <h3 className="text-lg sm:text-[20px] font-bold text-slate-900 mb-5">
          Best Restaurants in Delhi
        </h3>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 justify-items-center">
        {restaurantData.map((item) => (
          <RestaurantsCards item={item} key={item.restaurantId} />
        ))}
      </div>
    </section>
  )
}

export default BestRestaurantsInYourCity