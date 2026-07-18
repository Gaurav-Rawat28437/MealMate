import React from "react"
import { useNavigate } from "react-router-dom"

function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="relative w-full min-h-[calc(100vh-78px)] px-4 sm:px-8 lg:px-15 py-8 overflow-hidden">
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10 pt-8 lg:pt-20">
        <div className="w-full lg:w-[48%] text-center lg:text-left">
          <div className="w-full max-w-[520px] mx-auto lg:mx-0">
            <h1 className="text-[38px] sm:text-[50px] lg:text-[58px] xl:text-[64px] font-black leading-[1.1] text-[#111111] tracking-tight">
              Delicious{" "}
              <span className="text-[#FF7A1A]">Food</span>,
              <br />
              Delivered{" "}
              <span className="text-[#FF7A1A]">Fast</span>
            </h1>

            <p className="mt-6 sm:mt-7 max-w-[540px] mx-auto lg:mx-0 text-[15px] sm:text-[17px] leading-7 text-[#555555] font-medium">
              Order your favorite dishes from top restaurants in town. We deliver
              deliciousness to your doorstep. Hungry for convenience?{" "}
              <span className="font-black text-[#333333]">
                Let&apos;s get started!
              </span>
            </p>
          </div>

          <button
            onClick={() => navigate("/restaurants")}
            className="mt-8 sm:mt-10 bg-[#FF7A1A] text-white px-8 sm:px-10 py-4 rounded-[16px] text-[16px] sm:text-[17px] font-semibold hover:bg-[#ff6810] shadow-md hover:scale-105 transition-transform duration-300"
          >
            Explore Menu
          </button>
        </div>

        <div className="relative w-full lg:w-[52%] flex justify-center">
          <img
            src="/mealmate-food-items.png"
            alt="MealMate food items"
            className="w-full max-w-[420px] sm:max-w-[560px] lg:max-w-[720px] object-contain drop-shadow-2xl"
          />

          <div className="hidden lg:flex absolute left-0 top-[15%] h-[125px] w-[175px] bg-white/95 rounded-r-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex-col justify-center items-center">
            <div className="text-[#FF7A1A] text-[34px]">
              <i className="fa-solid fa-truck"></i>
            </div>
            <p className="mt-2 text-[18px] leading-6 text-[#777777] font-medium text-center">
              Priority <br /> Delivery
            </p>
          </div>

          <div className="hidden lg:flex absolute left-[22%] bottom-[8%] h-[150px] w-[200px] bg-white/95 rounded-t-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex-col justify-center items-center">
            <div className="text-[#FF7A1A] text-[34px]">🍴</div>
            <p className="mt-3 text-[22px] leading-7 text-[#777777] font-medium text-center">
              Exclusive <br /> Menus
            </p>
          </div>

          <div className="hidden lg:flex absolute right-[3%] top-[8%] h-[125px] w-[210px] bg-white/95 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex-col justify-center items-center">
            <div className="text-[#FF7A1A] text-[34px]">
              <i className="fa-solid fa-cake-candles"></i>
            </div>
            <p className="mt-2 text-[22px] leading-7 text-[#777777] font-medium text-center">
              Birthday <br /> Rewards
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection