import React from "react";

function LeftRightBtn() {
  return (
    <div className="flex items-center gap-2">
      <button
        
        className="h-9 w-9 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-[#FF5200] hover:text-white transition"
      >
        <i className="fa-solid fa-arrow-left text-sm"></i>
      </button>

      <button
        
        className="h-9 w-9 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-[#FF5200] hover:text-white transition"
      >
        <i className="fa-solid fa-arrow-right text-sm"></i>
      </button>
    </div>
  );
}

export default LeftRightBtn;