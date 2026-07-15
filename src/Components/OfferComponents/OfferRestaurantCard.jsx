import React from "react"
import { useNavigate } from "react-router-dom"

function OfferRestaurantCard({ item }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/restaurants/${item.restaurantId}`)}
      className="w-full max-w-[330px] bg-white rounded-[24px] border border-orange-100 shadow-sm hover:shadow-xl hover:scale-[1.03] transition duration-300 cursor-pointer overflow-hidden"
    >
      <div className="relative w-full h-[175px] overflow-hidden">
        <img
          src={item.image}
          alt={item.restaurantName}
          className="h-full w-full object-cover"
        />

        <div className="absolute top-3 left-3 bg-[#16803C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          ⭐ {item.restaurantInfo?.avgRating || "4.0"}
        </div>

        {item.offer && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
            <p className="text-white font-black text-lg">
              {item.offer.displayText || item.offer.title}
            </p>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-black text-[#1F2937] truncate">
          {item.restaurantName}
        </h3>

        <p className="text-sm text-[#6B7280] mt-1 truncate">
          {item.restaurantInfo?.cuisines?.join(", ") || item.category}
        </p>

        <div className="flex items-center justify-between gap-3 mt-3">
          <span className="text-sm font-bold text-[#FF5200] truncate">
            {item.restaurantInfo?.minMaxDeliveryTime || "30-40 mins"}
          </span>

          <span className="text-sm font-semibold text-[#374151] truncate">
            {item.restaurantInfo?.costForTwoMessage || "₹300 for two"}
          </span>
        </div>

        <p className="text-sm text-[#4B5563] font-medium mt-2 truncate">
          {item.areaName || item.locality}
        </p>

        {item.offer && (
          <div className="mt-4 border border-dashed border-[#FF5200] rounded-xl p-3 bg-orange-50">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-black text-[#FF5200]">
                  {item.offer.title}
                </p>

                <p className="text-xs font-bold text-slate-500 mt-1">
                  {item.offer.subtitle}
                </p>
              </div>

              <span className="text-xs font-black text-[#FF5200] bg-white border border-orange-200 px-3 py-2 rounded-lg">
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