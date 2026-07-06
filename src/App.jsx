import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocationThunk } from './Utils/LocationSlice'
import { foodCategoryThunk } from './Utils/foodCategorySlice'
import { restaurantThunk } from './Utils/restaurantSlice'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Landing'
import Home from './pages/Home'

function App() {

  const dispatch=useDispatch()
console.log(useSelector(store=>store.location.data))
  useEffect(()=>{
    dispatch(getLocationThunk())
  },[dispatch])
  return (
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      
   
  )
}

export default App
