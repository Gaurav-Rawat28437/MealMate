import React, { useEffect, useRef, useState } from "react"
import { getTopRatedRestaurants } from "../../services/foodAndRestaurantServiceAPI"
import RestaurantsCards from "./RestaurantsCards"
import HomeRestaurantLoading from "../other/HomeRestaurantLoading"
import LeftRightBtn from "../other/LeftRightBtn"
import HomeTopRatedRestaurantLoading from "../other/HomeTopRatedRestaurantLoading"

function TopRatedRestaurants() {
  const [topRatedData, setTopRatedData] = useState([])
  const [loading, setLoading] = useState(false)

  const RestaurantScrollLeftRightRef = useRef(null)

  useEffect(() => {
    const fetchTopRatedRestaurants = async () => {
      try {
        setLoading(true)
        

        const topRatedRestaurants = await getTopRatedRestaurants(4.5)

        setTopRatedData(topRatedRestaurants)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTopRatedRestaurants()
  }, [])

  if (loading) {
    return <HomeTopRatedRestaurantLoading length={6} />
  }

  if (topRatedData.length === 0) {
    return null
  }

  return (
    <section 
      id="top-rated-section"
      className="w-full max-w-[1057px] mt-12 mx-auto">

      <div className="w-full flex justify-between items-center gap-3">
        <div>
            <h3 className="text-[20px] font-bold text-slate-900 mb-5">
                Top Rated Restaurants
            </h3>
          
        </div>

        <LeftRightBtn scrollLeftRightRef={RestaurantScrollLeftRightRef}/>
      </div>

      <div 
        ref={RestaurantScrollLeftRightRef}
        className="mt-2 grid grid-flow-col auto-cols-[320px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {topRatedData.map((item) => (
          <RestaurantsCards item={item} key={item.restaurantId} size="small"/>
        ))}
      </div>
    </section>
  )
}

export default TopRatedRestaurants