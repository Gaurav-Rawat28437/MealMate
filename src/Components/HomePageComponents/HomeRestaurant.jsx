import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restaurantThunk } from '../../Utils/restaurantSlice'

function HomeRestaurant() {
    const restaurantData=useSelector(store=>store.restaurants?.data)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(!restaurantData || restaurantData.length==0)
        dispatch(restaurantThunk())
    },[dispatch,restaurantData.length])
  return (
    <div>
      
    </div>
  )
}

export default HomeRestaurant
