import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"

import HomePageNavbar from "../Components/HomePageComponents/HomePageNavbar"
import HomeFoodCategory from "../Components/HomePageComponents/HomeFoodCategory"
import BestRestaurantsInYourCity from "../Components/HomePageComponents/BestRestaurantsInYourCity"
import TopRatedRestaurants from "../Components/HomePageComponents/TopRatedRestaurants"
import Footer from "../Components/other/Footer"

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollToTopRated) {
      setTimeout(() => {
        const section = document.getElementById("top-rated-section")

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 300)
    }
  }, [location])

  return (
    <main className="min-h-screen bg-[#FFF8F2]">
      <HomePageNavbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-[100px] py-10 pt-[80px]">
        <HomeFoodCategory />
        <TopRatedRestaurants />
        <BestRestaurantsInYourCity />
      </section>

      <Footer />
    </main>
  )
}

export default Home