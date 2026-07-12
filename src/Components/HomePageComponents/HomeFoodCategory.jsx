import React, { useEffect, useRef } from "react"
import LeftRightBtn from "../other/LeftRightBtn"
import FoodCategoryLoading from "../other/HomeFoodCategoryLoading"
import { useDispatch, useSelector } from "react-redux"
import { foodCategoryThunk } from "../../Utils/foodCategorySlice"
import { useNavigate } from "react-router-dom"

function HomeFoodCategory() {
  const {
    foodCategories: foodCategoryData = [],
    loading,
    error,
  } = useSelector((store) => store.foodCategory)

  const dispatch = useDispatch()
  const nav = useNavigate()

  const foodScrollLeftRightRef = useRef(null)

  useEffect(() => {
    if (foodCategoryData.length === 0) {
      dispatch(foodCategoryThunk())
    }
  }, [dispatch, foodCategoryData.length])

  if (loading) {
    return <FoodCategoryLoading length={foodCategoryData.length || 8} />
  }

  if (error) {
    return (
      <div className="w-full max-w-[1057px] mt-8 mx-auto bg-red-50 border border-red-200 text-red-600 rounded-2xl p-5">
        <h3 className="font-bold">Unable to load food categories</h3>
        <p className="text-sm mt-1">
          Please check your internet connection and try again.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[1057px] flex flex-col gap-4 mt-8 px-4 sm:px-0 mx-auto">
      <div className="w-full flex justify-between items-center gap-3">
        <h2 className="text-[18px] sm:text-[21px] font-bold text-slate-900">
          What would you like to order?
        </h2>

        <LeftRightBtn scrollLeftRightRef={foodScrollLeftRightRef} />
      </div>

      <div
        ref={foodScrollLeftRightRef}
        className="w-full grid grid-flow-col auto-cols-[130px] sm:auto-cols-[150px] md:auto-cols-[160px] gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {foodCategoryData.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              nav(`/restaurants/category/${item.id}`)
            }}
            className="h-[150px] sm:h-[180px] bg-white rounded-[22px] border border-orange-100 shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-center items-center gap-3"
          >
            <img
              className="h-full w-full object-contain p-2"
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeFoodCategory