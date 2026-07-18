import React from "react"
import { useNavigate } from "react-router-dom"

function OfferRestaurantCard({ item }) {
  const navigate = useNavigate()

  if (!item) return null

  return (
    <div
      onClick={() => navigate(`/restaurants/${item.restaurantId}`)}
      className="w-full max-w-[330px] bg-white rounded-[22px] sm:rounded-[24px] border border-orange-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition duration-300 cursor-pointer overflow-hidden"
    >
      <div className="relative w-full h-[160px] sm:h-[175px] overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.restaurantName}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-orange-50 flex items-center justify-center text-slate-400 text-sm">
            No Image
          </div>
        )}

        <div className="absolute top-3 left-3 bg-[#16803C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          ⭐ {item.restaurantInfo?.avgRating || "4.0"}
        </div>

        {item.offer && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 sm:px-4 py-3">
            <p className="text-white font-black text-base sm:text-lg truncate">
              {item.offer.displayText || item.offer.title}
            </p>
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-black text-[#1F2937] truncate">
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

        {item.offer && (
          <div className="mt-4 border border-dashed border-[#FF5200] rounded-xl p-3 bg-orange-50">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-black text-[#FF5200] truncate">
                  {item.offer.title}
                </p>

                <p className="text-xs font-bold text-slate-500 mt-1 truncate">
                  {item.offer.subtitle}
                </p>
              </div>

              <span className="text-xs font-black text-[#FF5200] bg-white border border-orange-200 px-3 py-2 rounded-lg shrink-0 max-w-[120px] truncate">
                {item.offer.code}
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-2">
              Minimum order ₹{item.offer.minOrder}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default OfferRestaurantCard