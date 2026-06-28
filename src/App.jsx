import React, { useEffect } from 'react'
import LandingPage from './pages/Landing'
import { useDispatch } from 'react-redux'
import { getLocationThunk } from './Utils/LocationSlice'
import { foodCategoryThunk } from './Utils/foodCategorySlice'

function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getLocationThunk())
    dispatch(foodCategoryThunk())
  },[dispatch])
  return (
    <div>
      <LandingPage/>
    </div>
  )
}

export default App
