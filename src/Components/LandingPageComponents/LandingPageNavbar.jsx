import React from "react";
import { Link } from "react-router-dom";

function LandingPageNavbar() {
  return (
    <nav className="w-full h-[78px] flex items-center justify-between px-6 sm:px-10 lg:px-20 xl:px-[110px]">
      
      <Link to="/" className="flex items-center gap-3 text-[#FF5200]">
        <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-2xl font-black shadow-lg hover:scale-110 transition-transform duration-300">
          <img
            className="h-full w-full object-contain p-2"
            src="/icons/mealmate-icon-square.svg"
            alt="icon-logo"
          />
        </div>

        <h1 className="text-3xl font-black tracking-tight">
          Meal<span className="text-[#1F1F1F]">Mate</span>
        </h1>
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-9 text-[15px] font-medium text-[#111111]">
        <Link to="/" className="hover:text-[#FF7A1A] transition">
          Home
        </Link>

        <Link to="/restaurants" className="hover:text-[#FF7A1A] transition">
          Menu
        </Link>

        <Link to="/about" className="hover:text-[#FF7A1A] transition">
          About Us
        </Link>

        <Link to="/contact" className="hover:text-[#FF7A1A] transition">
          Contact
        </Link>

        <Link
          to="/login"
          className="bg-[#FF7A1A] text-white px-7 py-3 rounded-[18px] hover:bg-[#ff6810] shadow-sm hover:scale-105 transition-transform duration-300"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
}

export default LandingPageNavbar;