import React from "react"
import { useNavigate } from "react-router-dom"

function RestaurantsCards({ item, size = "normal" }) {
  const navigate = useNavigate()

  const isSmall = size === "small"

  return (
    <div
      onClick={() => navigate(`/restaurants/${item.restaurantId}`)}
      className={`w-full bg-white rounded-[22px] sm:rounded-[24px] border border-orange-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition duration-300 cursor-pointer overflow-hidden ${
        isSmall ? "max-w-[260px]" : "max-w-[330px]"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          isSmall ? "h-[135px]" : "h-[160px] sm:h-[175px]"
        }`}
      >
        <img
          src={item.image}
          alt={item.restaurantName}
          className="h-full w-full object-cover"
        />

        <span className="absolute top-3 left-3 bg-[#16803C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          ⭐ {item.restaurantInfo?.avgRating || "4.0"}
        </span>
      </div>

      <div className={isSmall ? "p-3" : "p-3 sm:p-4"}>
        <h3
          className={`font-black text-[#1F2937] truncate ${
            isSmall ? "text-base" : "text-base sm:text-lg"
          }`}
        >
          {item.restaurantName}
        </h3>

        <p className="text-sm text-[#6B7280] mt-1 truncate">
          {item.restaurantInfo?.cuisines?.join(", ") || item.category}
        </p>

        <div className="flex items-center justify-between gap-3 mt-3">
          <span className="text-xs sm:text-sm font-bold text-[#FF5200] truncate">
            {item.restaurantInfo?.minMaxDeliveryTime || "30-40 mins"}
          </span>

          <span className="text-xs sm:text-sm font-semibold text-[#374151] truncate">
            {item.restaurantInfo?.costForTwoMessage || "₹300 for two"}
          </span>
        </div>

        <p className="text-sm text-[#4B5563] font-medium mt-2 truncate">
          {item.areaName || item.locality}
        </p>

        <p className="text-xs text-[#9CA3AF] mt-1 truncate">
          {item.restaurantInfo?.totalRatings}
        </p>
      </div>
    </div>
  )
}

export default RestaurantsCards