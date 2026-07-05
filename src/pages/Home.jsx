import React, { useEffect } from 'react'
import HomePageNavbar from '../Components/HomePageComponents/HomePageNavbar'
import { foodCategoryThunk } from '../Utils/foodCategorySlice'
import { useDispatch, useSelector } from 'react-redux'
import FoodCategoryLoading from '../Components/other/HomeFoodCategoryLoading'
import HomeFoodCategory from '../Components/HomePageComponents/HomeFoodCategory'


function Home() {
  const {foodCategories:foodCategoryData,loading,error}=useSelector(store=>store.foodCategory)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(!foodCategoryData || foodCategoryData.length===0)
    {
      dispatch(foodCategoryThunk())
    }
  },[dispatch,foodCategoryData.length])

  return (
    <div>
      <HomePageNavbar/>

      <section className="px-[100px] py-10">
        <HomeFoodCategory foodCategoryData={foodCategoryData} loading={loading}/>

      </section>
      
    </div>
  )
}

export default Home
