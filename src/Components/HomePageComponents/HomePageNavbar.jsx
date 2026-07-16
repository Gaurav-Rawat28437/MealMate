import React from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

function HomePageNavbar() {
  const navigate = useNavigate()

  const { suburb, city } = useSelector((store) => store.location?.data) || {}
  const cartItems = useSelector((store) => store.cart) || []

  const location = suburb && city ? `${suburb}, ${city}` : "Select location"

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-[80px] bg-white flex items-center justify-between gap-9 px-6 lg:px-[100px] shadow-lg">
      
      <Link to="/" className="flex items-center gap-3 shrink-0">
        <img
          src="/icons/mealmate-icon-square.svg"
          alt="MealMate logo"
          className="h-11 w-11"
        />

        <h1 className="text-3xl font-bold text-[#FF7A1A]">
          Meal<span className="text-black">Mate</span>
        </h1>
      </Link>

      
      <div className="leading-tight hidden md:block">
        <p className="text-[12px] text-gray-500 font-medium">
          Deliver to
        </p>

        <h3 className="w-35 text-[14px] font-bold text-slate-900 truncate">
          {location}
        </h3>
      </div>

      
      <div
        onClick={() => navigate("/search")}
        className="hidden md:flex w-[420px] h-11 border border-gray-300 rounded-xl items-center px-4 gap-3 cursor-pointer hover:border-[#FF7A1A] transition"
      >
        <i className="fa-solid fa-magnifying-glass text-gray-500"></i>

        <input
          readOnly
          type="text"
          placeholder="Search food or restaurants"
          className="w-full outline-none text-sm cursor-pointer bg-transparent"
        />
      </div>

      
      <div className="flex items-center gap-5 lg:gap-8 text-[16px] font-medium">
        <Link to="/home" className="hover:text-[#FF7A1A]">
          Home
        </Link>

        <Link to="/restaurants" className="hover:text-[#FF7A1A]">
          Menu
        </Link>

        <Link to="/offers" className="hover:text-[#FF7A1A]">
          Offers
        </Link>

        <Link to="/cart" className="hover:text-[#FF7A1A] relative">
          Cart

          {cartItems.length > 0 && (
            <span className="absolute -top-3 -right-4 h-5 w-5 rounded-full bg-[#FF7A1A] text-white text-xs flex items-center justify-center font-bold">
              {cartItems.length}
            </span>
          )}
        </Link>

        <Link
          to="/login"
          className="bg-[#FF7A1A] text-white px-6 py-2 rounded-xl hover:bg-[#ff6810]"
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default HomePageNavbar