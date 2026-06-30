import React, { useEffect } from "react";
import LandingPageNavbar from "../Components/LandingPageComponents/LandingPageNavbar";
import HeroSection from "../Components/LandingPageComponents/HeroSection";
import FoodCategorySection from "../Components/LandingPageComponents/FoodCategorySection";

function LandingPage() {

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_BE_URL}/food`)
  },[])
  return (
    <main className="w-full min-h-screen bg-[#FFF8F2] overflow-hidden">
      {/* Hero wrapper */}
      <section className="min-h-screen w-full bg-[#E8C1AA] flex justify-center items-center p-0 md:p-3">
        <div className="w-full min-h-screen md:min-h-[94vh] bg-[#FFF8F1] rounded-none md:rounded-[32px] shadow-[0_20px_60px_rgba(90,45,20,0.22)]">
          <LandingPageNavbar />
          <HeroSection />
        </div>
      </section>

      {/* Food category section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-[120px] py-16 md:py-20 bg-[#FFF8F2]">
        <FoodCategorySection />
      </section>
    </main>
  );
}

export default LandingPage;