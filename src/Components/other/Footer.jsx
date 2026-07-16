import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToTopRated = () => {
    if (location.pathname === "/home") {
      const section = document.getElementById("top-rated-section")

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    } else {
      navigate("/home", {
        state: {
          scrollToTopRated: true,
        },
      })
    }
  }

  return (
    <footer className="w-full bg-[#1E1A17] text-white px-6 sm:px-10 lg:px-[90px] py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#FF5200] flex items-center justify-center">
                <i className="fa-solid fa-bowl-food text-white"></i>
              </div>

              <h2 className="text-2xl font-black">
                Meal<span className="text-[#FF5200]">Mate</span>
              </h2>
            </Link>

            <p className="text-sm text-[#9CA3AF] mt-6 leading-7 max-w-[250px]">
              MealMate is a food ordering practice project where users can
              explore food categories, restaurants, and top-rated restaurants.
            </p>
          </div>

         
          <div>
            <h3 className="text-sm font-bold mb-5">Explore</h3>

            <ul className="flex flex-col gap-4 text-sm text-[#9CA3AF]">
              <li>
                <button
                  onClick={scrollToTopRated}
                  className="hover:text-[#FF5200] transition text-left"
                >
                  Food Delivery
                </button>
              </li>

              <li>
                <Link
                  to="/restaurants"
                  className="hover:text-[#FF5200] transition"
                >
                  Restaurants
                </Link>
              </li>

              <li>
                <button
                  onClick={scrollToTopRated}
                  className="hover:text-[#FF5200] transition text-left"
                >
                  Top Rated
                </button>
              </li>
            </ul>
          </div>

      
          <div>
            <h3 className="text-sm font-bold mb-5">Project</h3>

            <ul className="flex flex-col gap-4 text-sm text-[#9CA3AF]">
              <li>
                <Link to="/" className="hover:text-[#FF5200] transition">
                  About Project
                </Link>
              </li>

              <li>
                <a
                  href="https://github.com/Gaurav-Rawat28437"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF5200] transition"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="mailto:djuvgaurav28437@gmail.com"
                  className="hover:text-[#FF5200] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-5">Connect</h3>

            <p className="text-sm text-[#9CA3AF] leading-6">
              Follow the project or connect with the developer.
            </p>

            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com/Gaurav-Rawat28437"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl border border-white/15 bg-white/5 hover:bg-[#FF5200] hover:text-white transition flex items-center justify-center text-[#9CA3AF]"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/gaurav-rawat-0b23a4352/"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl border border-white/15 bg-white/5 hover:bg-[#FF5200] hover:text-white transition flex items-center justify-center text-[#9CA3AF]"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="https://www.instagram.com/gurv_rwt"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl border border-white/15 bg-white/5 hover:bg-[#FF5200] hover:text-white transition flex items-center justify-center text-[#9CA3AF]"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-7 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-sm text-[#8B8178]">
            © 2026 MealMate. Built for learning and practice.
          </p>

          <div className="flex items-center gap-5 text-sm text-[#8B8178]">
            <button className="hover:text-[#FF5200] transition">
              Privacy
            </button>

            <button className="hover:text-[#FF5200] transition">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer