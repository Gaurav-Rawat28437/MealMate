import React, { useRef } from "react";
import LandingFoodItemLoading from "../other/LandingFoodItemLoading";
import LeftRightBtn from "../other/LeftRightBtn";
import { useNavigate } from "react-router-dom";

function FoodCategorySection({foodItemsData,loading}) {
  const nav=useNavigate()

    const foodScrollLeftRightRef = useRef(null)

  if(loading)
  {
    return <LandingFoodItemLoading/>
  }

  return (
    <main className="w-full">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <p className="text-[#FF5200] font-extrabold text-sm uppercase tracking-wide">
            Popular Categories
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">
            What are you craving today?
          </h2>

          <p className="text-slate-500 mt-3">
            Choose from top food options loved by customers.
          </p>
        </div>

        <LeftRightBtn scrollLeftRightRef={foodScrollLeftRightRef} />
      </div>

      <div
        ref={foodScrollLeftRightRef}
        className="grid grid-flow-col grid-rows-2 gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {foodItemsData.length>0 && foodItemsData.map((item, index) => (
          <div
            key={index}
            onClick={()=>{
              nav(`/restaurants/Category/${item.foodCategoryId}?name=${item.name}`)
            }}
            className="h-[170px] w-[160px] sm:w-[190px] bg-white rounded-[26px] border border-orange-100 shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-center items-center gap-4"
          >
            <div className="h-[82px] w-[82px] rounded-full bg-[#FFF0E7] flex items-center justify-center text-5xl">
              {item.emoji}
            </div>

            <h3 className="font-black text-slate-800">{item.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default FoodCategorySection;