import React from "react";

function Loading() {
  return (
    <div className="min-h-screen w-full bg-[#FFF8F2] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Logo Loader */}
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full border-4 border-orange-100"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FF7A1A] animate-spin"></div>

          <div className="absolute inset-3 rounded-full bg-white shadow-lg flex items-center justify-center">
            <span className="text-4xl">🍽️</span>
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1F1F1F]">
            Loading categories
          </h2>
        </div>

        {/* Small dots */}
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF7A1A] animate-bounce"></span>
          <span className="h-3 w-3 rounded-full bg-[#FF7A1A] animate-bounce [animation-delay:0.15s]"></span>
          <span className="h-3 w-3 rounded-full bg-[#FF7A1A] animate-bounce [animation-delay:0.3s]"></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;