import React from 'react'
import HomePageNavbar from '../Components/HomePageComponents/HomePageNavbar'
import HomeFoodCategory from '../Components/HomePageComponents/HomeFoodCategory'
import HomeRestaurant from '../Components/HomePageComponents/HomeRestaurant'


function Home() {

  return (
    <div>
      <HomePageNavbar/>

      <section className="px-[100px] py-10">
        <HomeFoodCategory />
        <HomeRestaurant/>

      </section>
      
    </div>
  )
}

export default Home
