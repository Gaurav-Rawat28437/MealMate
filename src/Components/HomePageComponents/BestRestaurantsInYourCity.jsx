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

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true)
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
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [city])

  if (loading) {
    return <HomeRestaurantLoading length={6} />
  }

  return (
    <section className="w-full max-w-[1057px] mt-12 mx-auto">
      <div className="mb-6">
        {showDelhiFallback ? (
          <>
            <h2 className="text-[21px] font-bold text-slate-900">
              No restaurants found in {city}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Showing best restaurants in Delhi instead.
            </p>
          </>
        ) : (
          <h2 className="text-[21px] font-bold text-slate-900">
            Best Restaurants in {city}
          </h2>
        )}
      </div>

      {showDelhiFallback && (
        <h3 className="text-[20px] font-bold text-slate-900 mb-5">
          Best Restaurants in Delhi
        </h3>
      )}

      <div className="grid grid-cols-3 gap-7 justify-center">
        {restaurantData.length>0 && restaurantData.map((item) => (
          <RestaurantsCards item={item} key={item.restaurantId} />
        ))}
      </div>
    </section>
  )
}

export default BestRestaurantsInYourCity