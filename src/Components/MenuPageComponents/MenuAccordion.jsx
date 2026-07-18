import React, { useState } from "react"
import MenuItemCard from "./MenuItemCard"

function MenuAccordion({ title, items, restaurant }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="bg-white border-b-[14px] border-[#E5E5E5]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5"
      >
        <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 text-left">
          {title} ({items.length})
        </h3>

        <i
          className={`fa-solid fa-chevron-down transition shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      {open && (
        <div>
          {items.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              restaurant={restaurant}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MenuAccordion