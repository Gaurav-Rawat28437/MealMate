import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getLocationThunk } from './Utils/LocationSlice'
import { foodCategoryThunk } from './Utils/foodCategorySlice'
import { restaurantThunk } from './Utils/restaurantSlice'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Landing'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

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
      </Routes>
      
   
  )
}

export default App
