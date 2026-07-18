import React, { useEffect, useState } from "react"

function LeftRightBtn({ scrollLeftRightRef }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  const updateScroll = () => {
    const element = scrollLeftRightRef?.current

    if (!element) return

    setScrollPosition(element.scrollLeft)
    setMaxScroll(element.scrollWidth - element.clientWidth)
  }

  useEffect(() => {
    const element = scrollLeftRightRef?.current

    if (!element) return

    updateScroll()

    element.addEventListener("scroll", updateScroll)
    window.addEventListener("resize", updateScroll)

    return () => {
      element.removeEventListener("scroll", updateScroll)
      window.removeEventListener("resize", updateScroll)
    }
  }, [scrollLeftRightRef])

  return (
    <div className="hidden sm:flex items-center gap-2">
      <button
        onClick={() => {
          scrollLeftRightRef.current?.scrollBy({
            left: -300,
            behavior: "smooth",
          })
        }}
        className={`h-9 w-9 rounded-full border border-slate-200 shadow-sm transition ${
          scrollPosition <= 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-neutral-700 hover:bg-[#FF5200] hover:text-white"
        } `}
      >
        <i className="fa-solid fa-arrow-left text-sm"></i>
      </button>

      <button
        onClick={() => {
          scrollLeftRightRef.current?.scrollBy({
            left: 300,
            behavior: "smooth",
          })
        }}
        className={`h-9 w-9 rounded-full border border-slate-200 shadow-sm transition ${
          scrollPosition >= maxScroll - 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-neutral-700 hover:bg-[#FF5200] hover:text-white"
        }`}
      >
        <i className="fa-solid fa-arrow-right text-sm"></i>
      </button>
    </div>
  )
}

export default LeftRightBtn