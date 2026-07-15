import React from "react"

function RestaurantOffer({ offer }) {
  if (!offer) return null

  return (
    <div className="w-full mb-8">
      <h2 className="text-xl font-black text-slate-900 mb-4">
        Deals for you
      </h2>

      <div className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-orange-100 text-[#FF5200] flex items-center justify-center font-black text-xl">
          %
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-black text-slate-900">
            {offer.title}
          </h3>

          <p className="text-sm font-bold text-slate-500 mt-1">
            {offer.subtitle}
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Minimum order ₹{offer.minOrder}
          </p>
        </div>

        <div className="border border-dashed border-[#FF5200] text-[#FF5200] px-4 py-2 rounded-xl font-black text-sm">
          {offer.code}
        </div>
      </div>
    </div>
  )
}

export default RestaurantOffer