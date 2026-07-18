import React from "react"

function LandingFoodItemLoading({ length = 12 }) {
  return (
    <main className="w-full">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <div className="h-4 w-36 bg-orange-100 rounded-full animate-pulse"></div>

          <div className="h-10 w-[300px] sm:w-[420px] max-w-full bg-orange-100 rounded-xl mt-3 animate-pulse"></div>

          <div className="h-4 w-[260px] sm:w-[320px] max-w-full bg-orange-100 rounded-full mt-4 animate-pulse"></div>
        </div>

        <div className="hidden md:flex gap-3">
          <div className="h-11 w-11 rounded-full bg-orange-100 animate-pulse"></div>
          <div className="h-11 w-11 rounded-full bg-orange-100 animate-pulse"></div>
        </div>
      </div>

      <div className="grid grid-flow-col grid-rows-2 gap-4 sm:gap-5 overflow-hidden pb-5">
        {[...Array(length)].map((_, index) => (
          <div
            key={index}
            className="h-[150px] w-[145px] sm:h-[170px] sm:w-[190px] bg-white rounded-[24px] sm:rounded-[26px] border border-orange-100 shadow-sm flex flex-col justify-center items-center gap-4"
          >
            <div className="h-[72px] w-[72px] sm:h-[82px] sm:w-[82px] rounded-full bg-orange-100 animate-pulse"></div>

            <div className="h-4 w-24 bg-orange-100 rounded-full animate-pulse"></div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default LandingFoodItemLoading