import React from "react"

function RestaurantOffer({ offer }) {
  if (!offer) return null

  return (
    <div className="w-full mb-8">
      <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-4">
        Deals for you
      </h2>

      <div className="bg-white border border-orange-100 rounded-2xl p-4 sm:p-5 shadow-sm flex items-center gap-4">
        <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-orange-100 text-[#FF5200] flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
          %
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-black text-slate-900 truncate">
            {offer.title}
          </h3>

          <p className="text-sm font-bold text-slate-500 mt-1 truncate">
            {offer.subtitle}
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Minimum order ₹{offer.minOrder}
          </p>
        </div>

        <div className="hidden sm:block border border-dashed border-[#FF5200] text-[#FF5200] px-4 py-2 rounded-xl font-black text-sm">
          {offer.code}
        </div>
      </div>

      <div className="sm:hidden mt-3 border border-dashed border-[#FF5200] text-[#FF5200] px-4 py-2 rounded-xl font-black text-sm text-center bg-white">
        {offer.code}
      </div>
    </div>
  )
}

export default RestaurantOffer