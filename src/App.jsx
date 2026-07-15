import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getLocationThunk } from './Utils/LocationSlice'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Landing'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import RestaurantByFoodCategory from './pages/RestaurantByFoodCategory'
import RestaurantMenu from './pages/RestaurantMenu'
import Offers from './pages/Offers'

function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getLocationThunk())
  },[dispatch])
  return (
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        
        <Route path='/restaurants' element={<Restaurant/>}></Route>
        <Route path='/restaurants/Category/:foodCategoryId' element={<RestaurantByFoodCategory/>}></Route>
        <Route path='/restaurants/:restaurantId' element={<RestaurantMenu />}></Route>

        <Route path="/offers" element={<Offers />} />
      </Routes>
      
   
  )
}

export default App
