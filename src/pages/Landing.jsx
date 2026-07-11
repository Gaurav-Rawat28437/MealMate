import React, { useEffect } from "react";
import LandingPageNavbar from "../Components/LandingPageComponents/LandingPageNavbar";
import HeroSection from "../Components/LandingPageComponents/HeroSection";
import FoodCategorySection from "../Components/LandingPageComponents/FoodCategorySection";
import { useDispatch, useSelector } from "react-redux";
import { foodItemThunk } from "../Utils/foodCategorySlice";
import Footer from "../Components/other/Footer";

function LandingPage() {

  const {foodItems:foodItemsData,loading}=useSelector(store=>store.foodCategory)
  
 
  const dispatch=useDispatch()

  useEffect(()=>{
    if(!foodItemsData || foodItemsData.length===0)
    {
      dispatch(foodItemThunk())
      
    }
  },[dispatch,foodItemsData.length])


  return (
    <main className="w-full min-h-screen bg-[#FFF8F2] overflow-hidden">
     
      <section className="min-h-screen w-full bg-[#E8C1AA] flex justify-center items-center p-0 md:p-3">
        <div className="w-full min-h-screen md:min-h-[94vh] bg-[#FFF8F1] rounded-none md:rounded-[32px] shadow-[0_20px_60px_rgba(90,45,20,0.22)]">
          <LandingPageNavbar />
          <HeroSection />
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-[120px] py-16 md:py-20 bg-[#FFF8F2]">
        <FoodCategorySection foodItemsData={foodItemsData} loading={loading}/>
      </section>

      <Footer />
    </main>
  );
}

export default LandingPage;