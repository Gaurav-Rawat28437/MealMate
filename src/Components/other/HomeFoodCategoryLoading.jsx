import React from "react";
import LeftRightBtn from "./LeftRightBtn";

function FoodCategoryLoading({ length = 8 }) {
  const skeletonLength = length > 0 ? length : 8;

  return (
    <div className="w-full max-w-[1057px] flex flex-col gap-4 mt-8 px-4 sm:px-0">
      <div className="w-full flex justify-between items-center gap-3">
        <div>
          <div className="h-[25px] w-[260px] bg-orange-100 rounded-lg animate-pulse"></div>
        </div>

        <LeftRightBtn />
      </div>

      <div className="w-full grid grid-flow-col auto-cols-[130px] sm:auto-cols-[150px] md:auto-cols-[160px] gap-4 overflow-hidden">
        {[...Array(skeletonLength)].map((_, index) => (
          <div
            key={index}
            className="h-[150px] sm:h-[180px] bg-white rounded-[22px] border border-orange-100 shadow-sm flex justify-center items-center"
          >
            <div className="h-full w-full flex items-center justify-center p-2">
              <div className="h-[105px] w-[105px] sm:h-[125px] sm:w-[125px] rounded-full bg-orange-100 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodCategoryLoading;