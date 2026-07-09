import React, { useEffect, useRef } from "react";
import LeftRightBtn from "../other/LeftRightBtn";
import FoodCategoryLoading from "../other/HomeFoodCategoryLoading";
import { useDispatch, useSelector } from "react-redux";
import { foodCategoryThunk } from "../../Utils/foodCategorySlice";

function HomeFoodCategory() {

   const {foodCategories:foodCategoryData=[],loading,error}=useSelector(store=>store.foodCategory)
  const dispatch=useDispatch()

  const foodScrollLeftRightRef = useRef(null)

  useEffect(()=>{
    if(!foodCategoryData || foodCategoryData.length===0)
    {
      dispatch(foodCategoryThunk())
    }
  },[dispatch,foodCategoryData.length])


    if(loading)
    {
        return <FoodCategoryLoading length={foodCategoryData.length}/>
    }

  return (
    <div className="w-full max-w-[1057px] flex flex-col gap-4 mt-8 px-4 sm:px-0 mx-auto">
      <div className="w-full flex justify-between items-center gap-3">
        <div>

          <h2 className="text-[18px] sm:text-[21px] font-bold text-slate-900">
            What would you like to order?
          </h2>
        </div>

        <LeftRightBtn scrollLeftRightRef={foodScrollLeftRightRef} />
      </div>

      <div
        ref={foodScrollLeftRightRef}
        className="w-full grid grid-flow-col justify-center auto-cols-[130px] sm:auto-cols-[150px] md:auto-cols-[160px] gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
        {foodCategoryData.map((item) => (
              <div
                key={item.id}
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
  );
}

export default HomeFoodCategory;