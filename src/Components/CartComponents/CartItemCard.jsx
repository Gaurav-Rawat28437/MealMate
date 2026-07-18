import React from "react"

function CartItemCard({
  item,
  price,
  removeHandler,
  increaseHandler,
  decreaseHandler,
}) {
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"

  const imageUrl = item.image
    ? item.image
    : item.imageId
    ? CDN_URL + item.imageId
    : null

  return (
    <div className="bg-white rounded-[20px] sm:rounded-[24px] border border-orange-100 shadow-sm p-3 sm:p-4 flex flex-col sm:flex-row gap-4">
      <div className="h-[170px] sm:h-[110px] w-full sm:w-[110px] rounded-2xl overflow-hidden bg-orange-50 shrink-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-slate-400 text-sm">
            No Image
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-black text-slate-900 line-clamp-2">
          {item.name}
        </h3>

        <p className="text-sm font-bold text-slate-700 mt-1">
          ₹{price}
        </p>

        {item.description && (
          <p className="text-sm text-slate-500 mt-2 line-clamp-2">
            {item.description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
          <div className="flex items-center border border-green-600 rounded-xl overflow-hidden w-fit">
            <button
              onClick={() => decreaseHandler(item)}
              className="h-9 w-9 text-green-700 font-black hover:bg-green-50"
            >
              -
            </button>

            <span className="h-9 w-10 flex items-center justify-center text-green-700 font-black">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseHandler(item)}
              className="h-9 w-9 text-green-700 font-black hover:bg-green-50"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeHandler(item)}
            className="w-full sm:w-auto px-4 py-2 rounded-xl border border-red-200 text-red-500 text-sm font-bold hover:bg-red-50 transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItemCard