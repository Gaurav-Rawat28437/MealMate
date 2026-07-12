import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { restaurantThunk } from '../Utils/restaurantSlice'

function RestaurantByFoodCategory() {
    const {foodCategoryId}=useParams()
    console.log(foodCategoryId)

    const restaurantByCategory=useSelector(store=>store.restaurants?.foodCategoryId)
    console.log(restaurantByCategory)
    const dispatch=useDispatch()

    useEffect(()=>{
        if(!restaurantByCategory || restaurantByCategory?.length===0)
        {
            dispatch(restaurantThunk(foodCategoryId))
        }
        
    })
  return (
    <div>
      food
    </div>
  )
}

export default RestaurantByFoodCategory
