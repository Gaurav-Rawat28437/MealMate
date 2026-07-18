import React from "react"
import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <main className="min-h-screen bg-[#FFF8F2] flex items-center justify-center px-4">
      <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-orange-100 shadow-sm p-6 sm:p-8 max-w-[500px] w-full text-center">
        <h1 className="text-5xl sm:text-6xl font-black text-[#FF5200]">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-4">
          Page Not Found
        </h2>

        <p className="text-sm sm:text-base text-slate-500 mt-3">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/home"
          className="inline-block mt-6 px-7 py-3 rounded-xl bg-[#FF5200] text-white font-bold hover:bg-[#e84900] transition"
        >
          Go to Home
        </Link>
      </div>
    </main>
  )
}

export default PageNotFound