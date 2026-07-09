import React from "react"
import LeftRightBtn from "./LeftRightBtn"

function HomeTopRatedRestaurantLoading({ length = 6 }) {
  return (
    <section className="w-full max-w-[1057px] mt-12 mx-auto">
      <div className="w-full flex justify-between items-center gap-3">
        <div>
          <div className="h-[24px] w-[230px] bg-orange-100 rounded-lg animate-pulse mb-5"></div>
        </div>

        <LeftRightBtn />
      </div>

      <div className="mt-2 grid grid-flow-col auto-cols-[260px] gap-5 overflow-hidden">
        {[...Array(length)].map((_, index) => (
          <div
            key={index}
            className="w-full max-w-[260px] bg-white rounded-[22px] border border-orange-100 shadow-sm overflow-hidden"
          >
            <div className="h-[135px] w-full bg-orange-100 animate-pulse"></div>

            <div className="p-3">
              <div className="h-5 w-[180px] bg-orange-100 rounded-md animate-pulse"></div>

              <div className="h-4 w-[210px] bg-orange-100 rounded-md animate-pulse mt-3"></div>

              <div className="flex justify-between gap-3 mt-4">
                <div className="h-4 w-[90px] bg-orange-100 rounded-md animate-pulse"></div>
                <div className="h-4 w-[95px] bg-orange-100 rounded-md animate-pulse"></div>
              </div>

              <div className="h-4 w-[150px] bg-orange-100 rounded-md animate-pulse mt-3"></div>

              <div className="h-3 w-[110px] bg-orange-100 rounded-md animate-pulse mt-3"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeTopRatedRestaurantLoading