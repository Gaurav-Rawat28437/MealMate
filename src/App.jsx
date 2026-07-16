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
import {Toaster} from "react-hot-toast"
import MenuCart from './pages/MenuCart'
import PageNotFound from './pages/PageNotFound'
import Search from './pages/Search'

function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getLocationThunk())
  },[dispatch])
  return (<>
<Toaster />
      <Routes>
        
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        
        <Route path='/restaurants' element={<Restaurant/>}></Route>
        <Route path='/restaurants/Category/:foodCategoryId' element={<RestaurantByFoodCategory/>}></Route>
        <Route path='/restaurants/:restaurantId' element={<RestaurantMenu />}></Route>

        <Route path="/offers" element={<Offers />} />
        <Route path="/cart" element={<MenuCart />} />
        <Route path="/search" element={<Search />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
   
  </>
  )
}

export default App
