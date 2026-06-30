import React, { useEffect } from 'react'
import LandingPage from './pages/Landing'
import { useDispatch } from 'react-redux'
import { getLocationThunk } from './Utils/LocationSlice'
import { foodCategoryThunk } from './Utils/foodCategorySlice'
import { restaurantThunk } from './Utils/restaurantSlice'
import { Route, Routes } from 'react-router-dom'

function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getLocationThunk())
  },[dispatch])
  return (
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
      </Routes>
      
   
  )
}

export default App
