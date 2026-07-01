import React from "react";
import { Link } from "react-router-dom";

function HomePageNavbar() {
  return (
    <nav className="w-full h-[80px] bg-white flex items-center justify-between px-[100px] shadow-sm">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/icons/mealmate-icon-square.svg"
          alt="MealMate logo"
          className="h-11 w-11"
        />

        <h1 className="text-3xl font-bold text-[#FF7A1A]">
          Meal<span className="text-black">Mate</span>
        </h1>
      </Link>

      {/* Search */}
      <div className="w-[420px] h-11 border border-gray-300 rounded-xl flex items-center px-4 gap-3">
        <i className="fa-solid fa-magnifying-glass text-gray-500"></i>

        <input
          type="text"
          placeholder="Search food or restaurants"
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Links */}
      <div className="flex items-center gap-8 text-[16px] font-medium">
        <Link to="/home" className="hover:text-[#FF7A1A]">
          Home
        </Link>

        <Link to="/restaurants" className="hover:text-[#FF7A1A]">
          Menu
        </Link>

        <Link to="/offers" className="hover:text-[#FF7A1A]">
          Offers
        </Link>

        <Link to="/cart" className="hover:text-[#FF7A1A]">
          Cart
        </Link>

        <Link
          to="/login"
          className="bg-[#FF7A1A] text-white px-6 py-2 rounded-xl hover:bg-[#ff6810]"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default HomePageNavbar;