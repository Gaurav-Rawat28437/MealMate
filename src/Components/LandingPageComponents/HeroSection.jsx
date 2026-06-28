import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-full px-15 py-5">
      <div className=" w-full flex items-center justify-between mt-30">
        
        <div className="z-10 pt-8 lg:pt-0">
          <div className=" h-fit w-115">

            <h1 className="text-[38px] sm:text-[50px] lg:text-[54px] xl:text-[64px] font-black leading-[1.1] text-[#111111] tracking-tight">
              Delicious{" "}
              <span className="text-[#FF7A1A]">Food</span>,
              <br />
              Delivered{" "}
              <span className="text-[#FF7A1A]">Fast</span>
            </h1>

            <p className="mt-7 max-w-[540px] text-[17px] leading-7 text-[#555555] font-medium">
              Order your favorite dishes from top restaurants in town. We deliver
              deliciousness to your doorstep. Hungry for convenience?{" "}
              <span className="font-black text-[#333333]">
                Let&apos;s get started!
              </span>
            </p>
          </div>

          <button
            onClick={() => navigate("/restaurants")}
            className="mt-10 bg-[#FF7A1A] text-white px-10 py-4 rounded-[16px] text-[17px] font-semibold hover:bg-[#ff6810] shadow-md hover:scale-105 transition-transform duration-300"
          >
            Explore Menu
          </button>
        </div>



      </div>

      
      <div className="absolute top-0 -right-3  h-[770px] w-[780px] ">
        <img
          src="/mealmate-food-items.png"
          alt="MealMate food items"
          className=" h-full w-full object-cover drop-shadow-2xl"
        />
      </div>

      <div className=" h-80 w-150 relative ">

        {/* Floating Card 1 */}
        <div className="hidden absolute top-[60px] lg:flex h-[125px] w-[175px] bg-white/95 rounded-r-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex-col justify-center items-center">
          <div className="text-[#FF7A1A] text-[34px]">
              <i className="fa-solid fa-truck"></i>
          </div>
          <p className="mt-2 text-[18px] leading-6 text-[#777777] font-medium text-center">
            Priority <br /> Delivery
          </p>
        </div>

        
        <div className="hidden absolute top-35 left-35 lg:flex  h-[165px] w-[210px] bg-white/95 rounded-t-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex-col justify-center items-center">
          <div className="text-[#FF7A1A] text-[34px]">🍴</div>
          <p className="mt-3 text-[24px] leading-8 text-[#777777] font-medium text-center">
            Exclusive <br /> Menus
          </p>
        </div>

        
        <div className="hidden lg:flex absolute top-10 right-15 h-[125px] w-[220px] bg-white/95 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex-col justify-center items-center">
          <div className="text-[#FF7A1A] text-[34px]">
            <i className="fa-solid fa-cake-candles"></i>
          </div>
          <p className="mt-2 text-[22px] leading-7 text-[#777777] font-medium text-center">
            Birthday <br /> Rewards
          </p>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;