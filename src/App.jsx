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
import toast, {Toaster} from "react-hot-toast"
import MenuCart from './pages/MenuCart'

function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getLocationThunk())
    .unwrap()
    .then(() => {
      toast.success("Location updated successfully")
    })
    .catch((error) => {
      if (error?.includes("permission")) {
        toast.error("Please allow location access")
      } else {
        toast.error("Couldn’t detect your location")
      }
    })
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
      </Routes>
      
   
  </>
  )
}

export default App
