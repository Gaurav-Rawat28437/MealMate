import React from 'react'
import HomePageNavbar from '../Components/HomePageComponents/HomePageNavbar'
import HomeFoodCategory from '../Components/HomePageComponents/HomeFoodCategory'
import BestRestaurantsInYourCity from '../Components/HomePageComponents/BestRestaurantsInYourCity'
import TopRatedRestaurants from '../Components/HomePageComponents/TopRatedRestaurants'


function Home() {

  return (
    <div>
      <HomePageNavbar/>

      <section className="px-[100px] py-10">
        <HomeFoodCategory />
        <TopRatedRestaurants />
        <BestRestaurantsInYourCity/>

      </section>
      
    </div>
  )
}

export default Home
