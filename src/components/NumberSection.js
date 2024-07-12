"use client"

import React, { useEffect, useState } from "react"
import {
  CalendarDots,
  Lightning,
  UsersFour,
  SolarPanel,
} from "@phosphor-icons/react"

const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 100)

    const timer = setInterval(() => {
      start += increment
      setCount(Math.min(Math.round(start), end))

      if (start >= end) clearInterval(timer)
    }, 100)

    return () => clearInterval(timer)
  }, [end, duration])

  return count
}

const NumberSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("number-section")
      const sectionTop = section.getBoundingClientRect().top
      const sectionVisible = sectionTop < window.innerHeight

      if (sectionVisible) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const items = [
    { Icon: CalendarDots, number: 20, text: "Years Experience" },
    { Icon: Lightning, number: 500, text: "MWp" },
    { Icon: SolarPanel, number: 110, text: "Completed Projects" },
    { Icon: UsersFour, number: 70, text: "Satisfied Clients" },
  ]

  return (
    <>
      <div
        id="number-section"
        className="container-fluid fact bg-[#dff2e1]  py-16 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-12 md:px-20 lg:px-36 gap-24 justify-center">
          {items.map((item, index) => {
            const count = useCountUp(item.number, 5000) // Adjust duration as needed

            return (
              <div
                key={index}
                className={`col-md-6 col-lg-3 text-xl border-3 gradient-border  shadow-2xl bg-[#ffffff] p-5  text-dark font-semibold flex flex-col gap-2 items-center text-center fade-in ${
                  isVisible
                    ? "visible transform translate-y-0"
                    : "translate-y-24"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <item.Icon size={32} color="#003d2b" />
                <h2 className="font-black mb-1">{isVisible ? count : 0}+</h2>
                <p className="font-bold mb-0">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#61c06a] to-[#549b9b] p-2" />
    </>
  )
}

export default NumberSection
