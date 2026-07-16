import React from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../Utils/menuCartSlice"
import toast from "react-hot-toast"

function MenuItemCard({ item }) {
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"

  const imageUrl = item.image
    ? item.image
    : item.imageId
    ? CDN_URL + item.imageId
    : null

  const price =
    typeof item.price === "number"
      ? item.price > 1000
        ? item.price / 100
        : item.price
      : item.price


  const dispatch=useDispatch()

  function addCartHandler(){
    dispatch(addToCart(item))
    toast.success(`${item.name} added to cart 🍽️`)
  }

  return (
    <div className="w-full flex gap-4 py-6 border-b border-slate-200">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span
            className={`h-4 w-4 border flex items-center justify-center ${
              item.isVeg ? "border-green-700" : "border-red-700"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                item.isVeg ? "bg-green-700" : "bg-red-700"
              }`}
            ></span>
          </span>

          {item.isBestseller && (
            <span className="text-xs font-bold text-[#FF5200]">
              Bestseller
            </span>
          )}
        </div>

        <h4 className="text-[17px] font-black text-slate-800 mt-2">
          {item.name}
        </h4>

        <p className="text-sm font-bold text-slate-800 mt-1">
          ₹{price || "99"}
        </p>

        {item.rating && (
          <p className="text-sm font-bold text-green-700 mt-2">
            ★ {item.rating}{" "}
            {item.ratingCount && (
              <span className="text-slate-500">({item.ratingCount})</span>
            )}
          </p>
        )}

        {item.description && (
          <p className="text-sm text-slate-500 leading-5 mt-3 line-clamp-2">
            {item.description}
          </p>
        )}
      </div>

      <div className="w-[120px] sm:w-[150px] flex flex-col items-center shrink-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={item.name}
            className="h-[115px] w-[120px] sm:h-[135px] sm:w-[150px] object-cover rounded-2xl"
          />
        ) : (
          <div className="h-[115px] w-[120px] sm:h-[135px] sm:w-[150px] bg-orange-50 rounded-2xl flex items-center justify-center text-slate-400 text-sm">
            No Image
          </div>
        )}

        <button 
          onClick={()=>{
            addCartHandler()
          }}
          className="mt-[-18px] h-9 w-[90px] bg-white text-green-700 border border-slate-300 rounded-xl font-black shadow-md hover:bg-green-50 transition">
          ADD
        </button>
      </div>
    </div>
  )
}

export default MenuItemCard