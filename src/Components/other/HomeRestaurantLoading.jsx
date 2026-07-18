import React from "react"

function HomeRestaurantLoading({ length = 12 }) {
  return (
    <section className="w-full max-w-[1057px] mt-10 sm:mt-12 mx-auto">
      <div className="h-7 w-60 sm:w-72 bg-orange-100 rounded-lg animate-pulse mb-6"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 justify-center">
        {[...Array(length)].map((_, index) => (
          <div
            key={index}
            className="h-[285px] bg-white rounded-[24px] border border-orange-100 shadow-sm overflow-hidden"
          >
            <div className="h-[160px] sm:h-[170px] bg-orange-100 animate-pulse"></div>

            <div className="p-4">
              <div className="h-5 w-40 bg-orange-100 rounded-md animate-pulse"></div>
              <div className="h-4 w-52 max-w-full bg-orange-100 rounded-md animate-pulse mt-3"></div>
              <div className="h-4 w-32 bg-orange-100 rounded-md animate-pulse mt-3"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeRestaurantLoading